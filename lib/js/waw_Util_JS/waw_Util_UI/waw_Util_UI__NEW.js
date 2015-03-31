/**
 * WAW UI Util JavaScript library
 * 
 * Provides some UI JS tricks & facilities
 * 
 * @author Felipe Camacho Melero
 * 
 * @version 0.0.1b
 */


var WAW_UI__CONSTANTS = {
		"events" : {
			"EVENT__XSL_RESOURCES_LOADED" : "XSL_Resources_Loaded",
			"EVENT__XSL_RESOURCES_PROCESSED" : "XSL_Resources_Processed",
			"EVENT__ReadyToRender" : "ReadyToRender"
		}
};


/**
 * WAW UI event configuration
 */
WAW_UI__Event.prototype.config = {
	"event" : null,
	"event_TYPE" : null,
	"event_DATA" : null
};


WAW_UI__Event.prototype.eventType = null;

/**
 * WAW UI Event
 * @returns {WAW_UI__Event}
 */
function WAW_UI__Event() {
	this.config = deepCopy(this.config);
};


var WAW_UI_STATIC = {
		
	"find_XSL_Template" : function(template_Name, XSL_Templates_Array) {
		var found = false;
		
		if (XSL_Templates_Array == null) {
//			XSL_Templates_Array = this.config.XSL_Templates;
			throw new WAW_Core_Exception("Templates array is required.");
		}
		
		
		for ( var template_num = 0; template_num < XSL_Templates_Array.length; template_num++) {
			
			var template__DATA = XSL_Templates_Array[template_num];
			
			if (template__DATA.name == template_Name) {
				found = true;
				break;
			}
		}
		
		if (found) {
			return XSL_Templates_Array[template_num];
		}
		
		return found;
	},
	
	
	"render_XSLT" : function(xml_Source, xsl_Source) {
		var resultDocument = null;
		// code for IE
		if (window.ActiveXObject)  {
			resultDocument=xml_Source.transformNode(xsl_Source);
		}
		// code for Mozilla, Firefox, Opera, etc.
		else if (document.implementation && document.implementation.createDocument)  {
		  xsltProcessor=new XSLTProcessor();
		  xsltProcessor.importStylesheet(xsl_Source);
		  resultDocument = xsltProcessor.transformToFragment(xml_Source,document);
		  }
		return resultDocument;
	},
	
	
	"get_XSL_Templates_FromXML" : function(xml_Doc) {
		var templates_Array = [];
		
		jQuery(xml_Doc).find('template').each(function () {
			var xsl_Template = new WAW_XSL_Template();
			xsl_Template.name = jQuery(this).attr("name");
			xsl_Template.XSL_DATA = this;
			
			templates_Array.push(xsl_Template);
		});
		
		return templates_Array;
	}
	
	
	
};



WAW_XSL_Template.prototype.name = null;
WAW_XSL_Template.prototype.XSL_DATA = null;

function WAW_XSL_Template() {
	
}


/**
 * Find XSL template by name
 * @param template_Name
 * @param XSL_Templates_Array
 * @returns WAW_XSL_Template (Or false)
 */
WAW_UI.prototype.find_XSL_Template__by_Name = function(template_Name, XSL_Templates_Array) {

	if (XSL_Templates_Array == null) {
		XSL_Templates_Array = this.config.XSL_Templates;
	}
	
	return WAW_UI_STATIC.find_XSL_Template(template_Name, XSL_Templates_Array);
};


/**
 * Load XSL resources
 * @param source_URL
 */
WAW_UI.prototype.load_XSL_Resources = function(source_URL) {
	
	var WAW_UI = this;
	WAW_UI.config.event_Driver;
	
	WAW_Core_STATIC.load_Resources(source_URL, WAW_UI, WAW_UI.config.event_Driver, WAW_UI__CONSTANTS.events.EVENT__XSL_RESOURCES_LOADED);
};


/**
 * Render XSLT method. 
 * @param xml_Source
 * @param xsl_Source
 * @returns DOM
 */
WAW_UI.prototype.render_XSLT = function(xml_Source, xsl_Source) {
	return WAW_UI_STATIC.render_XSLT(xml_Source, xsl_Source);
}; 


/**
 * Manage event XSL_Resources_Loaded
 * @param event
 * @param params
 */
WAW_UI.prototype.manageEvent__XSL_RESOURCES_LOADED = function(event, params) {
	
	var waw_UI = this;
	var XSL_Document = params.config.event_DATA;
	var templates_Array = [];
	var process_DOC = {
		"new_templates" : []
	};
	
	templates_Array = WAW_UI_STATIC.get_XSL_Templates_FromXML(XSL_Document);
	
	for (var template_Num = 0; template_Num < templates_Array.length; template_Num++) {
		var xsl_Template = templates_Array[template_Num];
		if (waw_UI.find_XSL_Template__by_Name(xsl_Template.name) === false) {
			waw_UI.config.XSL_Templates.push(xsl_Template);
			process_DOC.new_templates.push(xsl_Template.name);
		}
	}
	
  	// Notify event ----------------------------------------------------------------------------------------------------------|\/|---
	var waw_UI_event = new waw_UI__Event();
	
	waw_UI_event.eventType = waw_UI__CONSTANTS.events.EVENT__XSL_RESOURCES_PROCESSED;
	waw_UI_event.config.event_TYPE = waw_UI_event.eventType;
	waw_UI_event.config.event_DATA = process_DOC;
	waw_UI_event.config.eventMessage = "XSL Resources Processed.";

	waw_UI.config.event_Driver.notifyEvent(waw_UI_event, 0, waw_UI);
//	waw_UI.config.event_Driver.notifyEvent(waw_UI_event, null, waw_UI.config.event_Subscribers);
	// -----------------------------------------------------------------------------------------------------------------------|/\|---
	
};


/**
 * Manage event XSL_Resources_Processed
 * @param event
 * @param params
 */
WAW_UI.prototype.manageEvent__XSL_RESOURCES_PROCESSED = function(event, params) {

};


WAW_UI.prototype.map_CUSTOM_Events = function() {
	
	var waw_UI = this;
	
	// Map event {EVENT__XSL_RESOURCES_LOADED) ---------------------------------------------------------------|\/|---
	jQuery(waw_UI).on(
		waw_UI__CONSTANTS.events.EVENT__XSL_RESOURCES_LOADED,
		null,
		waw_UI,
		function(event, params) {
			event.preventDefault();
//			event.stopPropagation();
			waw_UI.manageEvent__XSL_RESOURCES_LOADED.call(waw_UI,event, params);
		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	// Map event {EVENT__XSL_RESOURCES_LOADED) ---------------------------------------------------------------|\/|---
	jQuery(waw_UI).on(
		waw_UI__CONSTANTS.events.EVENT__XSL_RESOURCES_PROCESSED,
		null,
		waw_UI,
		function(event, params) {
			event.preventDefault();
//			event.stopPropagation();
			waw_UI.manageEvent__XSL_RESOURCES_PROCESSED.call(waw_UI,event, params);
		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
};


WAW_UI.prototype.initialize = function(){
	
	var waw_UI = this;
	waw_UI.config = deepCopy(this.config);
	
	waw_UI.config.XSL_Templates = [];
	
	// Initialize event driver ------------------------------------------|\/|---
	waw_UI.config.event_Driver = new Event_Driver();
	waw_UI.config.event_Driver.delta_Trigger = 115;
	// ------------------------------------------------------------------|/\|---
	
	waw_UI.map_CUSTOM_Events();
};


WAW_UI.prototype.config = {
	"event_Driver": null,
	"XSL_Templates": null
};


function WAW_UI() {
	
}