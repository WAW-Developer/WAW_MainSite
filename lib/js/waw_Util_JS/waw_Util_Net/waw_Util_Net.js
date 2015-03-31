
/**
 * WAW SOAP JavaScript library
 * 
 * JavaScript Library
 * SOAP facilities
 * 
 * @author Felipe
 * 
 * WAW 2013
 * 
 */



/**
 * WAW SOAP constants
 */
var WAW_SOAP__CONSTANTS = {
	"classType__NORMAL" : 0,
	"msgType__NORMAL" : 0,
	
	"rol__CLIENT" : "client",
	"rol__SERVER" : "server",
	
	"events" : {
		"EVENT__SOAP_MESSAGE_RECEIVED" : "SOAP_Message_received",
		"EVENT__SOAP_ERROR_RECEIVED" : "SOAP_Error_received",
		"EVENT__WAWSOAP_MESSAGE_TOSEND" : "WAWSOAP_Message_toSend",
		"EVENT__WAWSOAP_MESSAGE_RECEIVED" : "WAWSOAP_Message_received"
	}
};


WAW_SOAP__Message.prototype.class_type = null;
WAW_SOAP__Message.prototype.msg_type = null;
WAW_SOAP__Message.prototype.msg_function = null;
WAW_SOAP__Message.prototype.rol = null;
WAW_SOAP__Message.prototype.data = null;


/**
 * WAW SOAP Message
 */
function WAW_SOAP__Message() {
	
}


/**
 * WAW SOAP event configuration
 */
WAW_SOAP__Event.prototype.config = {
	"event" : null,
	"event_TYPE" : null,
	"event_DATA" : null
};


WAW_SOAP__Event.prototype.eventType = null;

/**
 * WAW SOAP Event
 * @returns {WAW_SOAP__Event}
 */
function WAW_SOAP__Event() {
//	this.config = deepCopy(this.config);
};


/**
 * Send SOAP message
 * @param {WAW_SOAP__Message} waw_SOAP_Message
 * @param {String} url [Optative]
 * @param {String} method [Optative] 
 */
WAW_SOAP__Connection.prototype.send_SOAP_Message = function(waw_SOAP_Message, url, method) {
	
	var waw_SOAP_Connection = this;
	
	var post_Object = {
			"waw_soap_message" : waw_SOAP_Message
	} ;
	
//	var post_Object_JSON = jQuery.toJSON( post_Object );
	
	if (url == null) { url = waw_SOAP_Connection.config.default_URL; }
	if (method == null) { method = waw_SOAP_Connection.config.default_Method; }
	
	jQuery.soap({
	    url: url,
	    method: method,
	    appendMethodToURL: false,

	    data: post_Object,

	    success: function (soapResponse) {
	        // do stuff with soapResponse
	        // if you want to have the response as JSON use soapResponse.toJSON();
	        // or soapResponse.toString() to get XML string
	        // or soapResponse.toXML() to get XML DOM
	    	
        	// Notify event ----------------------------------------------------------------------------------------------------------|\/|---
        	var soap_event = new WAW_SOAP__Event();
        	
        	soap_event.eventType = WAW_SOAP__CONSTANTS.events.EVENT__SOAP_MESSAGE_RECEIVED;
        	soap_event.config.event_TYPE = soap_event.eventType;
        	soap_event.config.event_DATA = soapResponse;
        	soap_event.config.eventMessage = "SOAP Message received.";

        	waw_SOAP_Connection.config.event_Driver.notifyEvent(soap_event, 0, waw_SOAP_Connection);
//        	waw_SOAP_Connection.config.event_Driver.notifyEvent(soap_event, null, waw_SOAP_Connection.config.event_Subscribers);
        	// -----------------------------------------------------------------------------------------------------------------------|/\|---
	    },
	    error: function (SOAPResponse) {
        	// Notify event ----------------------------------------------------------------------------------------------------------|\/|---
        	var soap_event = new WAW_SOAP__Event();
        	
        	soap_event.eventType = WAW_SOAP__CONSTANTS.events.EVENT__SOAP_ERROR_RECEIVED;
        	soap_event.config.event_TYPE = soap_event.eventType;
        	soap_event.config.event_DATA = SOAPResponse;
        	soap_event.config.eventMessage = "SOAP error received.";

        	waw_SOAP_Connection.config.event_Driver.notifyEvent(soap_event, 0, waw_SOAP_Connection);
//        	waw_SOAP_Connection.config.event_Driver.notifyEvent(soap_event, null, waw_SOAP_Connection.config.event_Subscribers);
        	// -----------------------------------------------------------------------------------------------------------------------|/\|---
	    }
	});
	
};


/**
 * Manage event to send SOAP message
 * @param event
 * @param params
 */
WAW_SOAP__Connection.prototype.manageEvent__SOAP_Message__ToSend = function(event, params) {
	
	var waw_SOAP_Message = params.config.event_DATA.waw_SOAP_Message;
	var url = params.config.event_DATA.url;
	var method = params.config.event_DATA.method;
	
	this.send_SOAP_Message(waw_SOAP_Message, url, method);
	
};


/**
 * Manage received SOAP message
 * @param event
 * @param params
 */
WAW_SOAP__Connection.prototype.manageEvent__SOAP_Message__Received = function(event, params) {
	
	var SOAPresponse_XML = params.config.event_DATA.toXML();

	var soap_Body_XML = jQuery(SOAPresponse_XML.documentElement).find("SOAP-ENV\\:Body, Body");
	var soap_Response_XML = jQuery(soap_Body_XML.get(0)).find("ns1\\:manage_WAW_SOAP_MessagesResponse, manage_WAW_SOAP_MessagesResponse");
	
	var soap_Response_Result_XML = jQuery(soap_Response_XML.get(0)).find("result");

	var waw_SOAP_Message = new WAW_SOAP__Message();
	waw_SOAP_Message.class_type = parseInt( jQuery(soap_Response_Result_XML).find("class_type").text() );
	waw_SOAP_Message.msg_type = parseInt( jQuery(soap_Response_Result_XML).find("msg_type").text() );
	waw_SOAP_Message.rol = jQuery(soap_Response_Result_XML).find("rol").text();
	waw_SOAP_Message.msg_function = jQuery(soap_Response_Result_XML).find("msg_function").text();
	waw_SOAP_Message.data = jQuery(soap_Response_Result_XML).find("data").text();
	
	
	
	// Notify event ----------------------------------------------------------------------------------------------------------|\/|---
	var soap_event = new WAW_SOAP__Event();
	
	soap_event.eventType = WAW_SOAP__CONSTANTS.events.EVENT__WAWSOAP_MESSAGE_RECEIVED;
	soap_event.config.event_TYPE = soap_event.eventType;
	soap_event.config.event_DATA = waw_SOAP_Message;
	soap_event.config.event_DATA__JSON = jQuery.toJSON(waw_SOAP_Message);
	soap_event.config.eventMessage = "WAW SOAP Message received.";

	this.config.event_Driver.notifyEvent(soap_event, 0, this);
	// -----------------------------------------------------------------------------------------------------------------------|/\|---
	
};


/**
 * Map custom events
 */
WAW_SOAP__Connection.prototype.map_CUSTOM_Events = function() {
	
	var waw_SOAP_Connection = this;
	
	// Map event {EVENT__WAWSOAP_MESSAGE_TOSEND) --------------------------------------------------------------|\/|---
	jQuery(waw_SOAP_Connection).on(
		WAW_SOAP__CONSTANTS.events.EVENT__WAWSOAP_MESSAGE_TOSEND,
		null,
		waw_SOAP_Connection,
		function(event, params) {
			event.preventDefault();
//			event.stopPropagation();
			waw_SOAP_Connection.manageEvent__SOAP_Message__ToSend.call(waw_SOAP_Connection, event, params);
//			waw_SOAP_Connection.manageEvent__SOAP_Message__ToSend(event, params);
		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	
	// Map event {EVENT__SOAP_MESSAGE_RECEIVED) --------------------------------------------------------------|\/|---
	jQuery(waw_SOAP_Connection).on(
		WAW_SOAP__CONSTANTS.events.EVENT__SOAP_MESSAGE_RECEIVED,
		null,
		waw_SOAP_Connection,
		function(event, params) {
			event.preventDefault();
//			event.stopPropagation();
			waw_SOAP_Connection.manageEvent__SOAP_Message__Received.call(waw_SOAP_Connection, event, params);
//			waw_SOAP_Connection.manageEvent__SOAP_Message__Received(event, params);
		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
};



/**
 * WAW SOAP Connection initialize method
 */
WAW_SOAP__Connection.prototype.initialize = function() {
	
	var waw_SOAP_Connection = this;
	waw_SOAP_Connection.config = deepCopy(this.config);
	
	waw_SOAP_Connection.config.event_Subscribers = [];
//	waw_SOAP_Connection.config.event_Subscribers.push(WAW_SOAP__Connection);
	
	// Initialize event driver ------------------------------------------|\/|---
	waw_SOAP_Connection.config.event_Driver = new Event_Driver();
	waw_SOAP_Connection.config.event_Driver.delta_Trigger = 0;
	// ------------------------------------------------------------------|/\|---
	
	waw_SOAP_Connection.map_CUSTOM_Events();
};


/**
 * WAW SOAP Connection configuration
 */
WAW_SOAP__Connection.prototype.config = {
	"default_URL": null,
	"default_Method": null,
	"event_Driver" : null,
	"event_Subscribers" : null
};


/**
 * WAW SOAP Connection
 */
function WAW_SOAP__Connection() {
	
};
