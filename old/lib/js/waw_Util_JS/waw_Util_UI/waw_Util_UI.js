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
			"EVENT__XML_RESOURCES_LOADED" : "XML_Resources_Loaded",
			"EVENT__XML_RESOURCES_PROCESSED" : "XML_Resources_Processed",
			"EVENT__Initialized" : "Initialized",
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
		
	"find_in_Array__by_Name" : function(name, objects_Array) {
		var found = false;
		
		if (objects_Array == null) {
//				objects_Array = this.config.XSL_Templates;
			throw new WAW_Core_Exception("Objects array is required.");
		}
		
		
		for ( var object_num = 0; object_num < objects_Array.length; object_num++) {
			
			var object__DATA = objects_Array[object_num];
			
			if (object__DATA.name == name) {
				found = true;
				break;
			}
		}
		
		if (found) {
			return objects_Array[object_num];
		}
		
		return found;
	},
	
		
	"find_XSL_Template" : function(template_Name, XSL_Templates_Array) {
		
		if (XSL_Templates_Array == null) {
//			XSL_Templates_Array = this.config.XSL_Templates;
			throw new WAW_Core_Exception("Templates array is required.");
		}
		
		return WAW_UI_STATIC.find_in_Array__by_Name(template_Name, XSL_Templates_Array) ;
		
	},
	
	
	"find_XML_DATA" : function(xml_Name, XML_DATA_Array) {
		
		if (XML_DATA_Array == null) {
			throw new WAW_Core_Exception("XML DATA array is required.");
		}
		
		return WAW_UI_STATIC.find_in_Array__by_Name(xml_Name, XML_DATA_Array) ;
		
	},
	
	
	"find_HTML_DATA" : function(html_Name, HTML_DATA_Array) {
		
		if (HTML_DATA_Array == null) {
			throw new WAW_Core_Exception("HTML DATA array is required.");
		}
		
		return WAW_UI_STATIC.find_in_Array__by_Name(html_Name, HTML_DATA_Array);
		
	},
	
	
	"render_XSLT" : function(xml_Source, xsl_Source) {
		var resultDocument = null;
//		var element=document.createElement("div");
		
		var xml_String = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
		xml_String += new XMLSerializer().serializeToString(xml_Source);
		
		var xsl_String = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
		xsl_String += "<xsl:stylesheet version=\"2.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">";
		xsl_String += new XMLSerializer().serializeToString(xsl_Source);
		xsl_String += "</xsl:stylesheet>";
		
		new Transformation()
	    .setXml(xml_String)
	    .setXslt(xsl_String)
	    .transform('system_layer');

//		jQuery("#system_layer").xslt(xml_String, xsl_String);
		resultDocument = jQuery("#system_layer").html();
		return resultDocument;
	},
	
	
	"render_XSLT__STABLE" : function(xml_Source, xsl_Source) {
		var resultDocument = null;
		// code for IE
		if (bowser.msie)  {
			resultDocument=xml_Source.transformNode(xsl_Source);
		}
		// code for Mozilla, Firefox, Opera, etc.
		else if (document.implementation && document.implementation.createDocument)  {
		  xsltProcessor=new XSLTProcessor();
		  xsltProcessor.importStylesheet(xsl_Source.parentNode);
	  
		  resultDocument = xsltProcessor.transformToFragment(xml_Source, document);
		  
//		  var ownerDocument = document.implementation.createDocument("", "", null);
//		  resultDocument = xsltProcessor.transformToFragment(xml_Source, ownerDocument);
		  
//		  var htmlDoc = xsltProcessor.transformToDocument(xml_Source);
		
//		  resultDocument = Sarissa.serialize(htmlDoc);
//		  resultDocument =  new XMLSerializer().serializeToString(htmlDoc);  
		  
		  
		  
		  }
		return resultDocument;
	},
	
	
	"render_XSLT__OLD" : function(xml_Source, xsl_Source) {
		var resultDocument = null;
		// code for IE
		if (bowser.msie)  {
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
	
	
	"get_XSL_Templates_FromXML__NEW" : function(xml_Doc) {
		var templates_Array = [];
		
		// xsl:template
		
		
//		var xsl_stylesheet = xml_Doc.getElementsByTagName("stylesheet");
//		var xsl_stylesheet = xml_Doc.getElementsByTagNameNS("*", "stylesheet")[0];
//		var xsl_templates = xsl_stylesheet.getElementsByTagNameNS("*", "template");
		
		
//		var xsl_stylesheet__Test = jQuery(xsl_stylesheet);
//		var xsl_templates = xsl_stylesheet__Test.context.getElementsByTagName("xsl:template");
		
		var xpath__Templates = "/stylesheet/template";
		var xsl_templates = null;
		if (bowser.msie)  {
			xsl_templates = xml_Doc.selectNodes(xpath__Templates);
		} else {
			xsl_templates = xml_Doc.evaluate(xpath__Templates, xml_Doc.documentElement, null, XPathResult.ANY_TYPE,null);
		}
		
		
		for (var int = 0; int < xsl_templates.length; int++) {
			
			var array_element = xsl_templates.item(int);
			
			var xsl_Template = new WAW_XSL_Template();
			xsl_Template.name = array_element.getAttribute("name");
			xsl_Template.XSL_DATA = array_element;
			
			templates_Array.push(xsl_Template);
			
		}
		
		return templates_Array;
	},
	
	"get_XSL_Templates_FromXML__BAD" : function(xml_Doc) {
		var templates_Array = [];
		
		// xsl:template
		
		
		var xsl_stylesheet = xml_Doc.getElementsByTagName("stylesheet");
//		var xsl_stylesheet = xml_Doc.getElementsByTagNameNS("*", "stylesheet")[0];
//		var xsl_templates = xsl_stylesheet.getElementsByTagNameNS("*", "template");
		
		
		var xsl_stylesheet__Test = jQuery(xsl_stylesheet);
//		var xsl_templates = xsl_stylesheet__Test.context.getElementsByTagName("xsl:template");
//		var xsl_templates = xsl_stylesheet__Test.getElementsByTagNameNS("template");
		var xsl_templates = xsl_stylesheet__Test.find("xsl:template");
		
		for (var int = 0; int < xsl_templates.length; int++) {
			
			var array_element = xsl_templates.item(int);
			
			var xsl_Template = new WAW_XSL_Template();
			xsl_Template.name = array_element.getAttribute("name");
			xsl_Template.XSL_DATA = array_element;
			
			templates_Array.push(xsl_Template);
			
		}
		
		return templates_Array;
	},
	
	
	"get_XSL_Templates_FromXML" : function(xml_Doc) {
		var templates_Array = [];
		
		// xsl:template
		
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


WAW_XML_DATA.prototype.name = null;
WAW_XML_DATA.prototype.XML_DATA = null;

function WAW_XML_DATA() {
	
}


WAW_HTML_DATA.prototype.name = null;
WAW_HTML_DATA.prototype.HTML_DATA = null;

function WAW_HTML_DATA() {
	
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
 * Find XML DATA by name
 * @param xml_Name
 * @param XSL_DATA_Array
 * @returns WAW_XML_DATA (Or false)
 */
WAW_UI.prototype.find_XML_DATA__by_Name = function(xml_Name, XML_DATA_Array) {

	if (XML_DATA_Array == null) {
		XML_DATA_Array = this.config.XML_DATA;
	}
	
	return WAW_UI_STATIC.find_XML_DATA(xml_Name, XML_DATA_Array);
};



/**
 * Find XSL template by name
 * @param template_Name
 * @param XSL_Templates_Array
 * @returns WAW_XSL_Template (Or false)
 */
WAW_UI.prototype.find_HTML_DATA__by_Name = function(template_Name, HTML_DATA_Array) {

	if (HTML_DATA_Array == null) {
		HTML_DATA_Array = this.config.HTML_DATA;
	}
	
	return WAW_UI_STATIC.find_HTML_DATA(template_Name, HTML_DATA_Array);
};

/**
 * Load XSL resources
 * @param source_URL
 */
WAW_UI.prototype.load_XSL_Resources = function(source_URL) {
	
	var WAW_UI = this;
	WAW_UI.config.event_Driver;
	
	
	if ( bowser.msie ) {
		WAW_Core_STATIC.load_XML_Resources(source_URL, WAW_UI, WAW_UI.config.event_Driver, WAW_UI__CONSTANTS.events.EVENT__XSL_RESOURCES_LOADED);	
	} 	
	else {
		WAW_Core_STATIC.load_Resources(source_URL, WAW_UI, WAW_UI.config.event_Driver, WAW_UI__CONSTANTS.events.EVENT__XSL_RESOURCES_LOADED);
	}
	
//	WAW_Core_STATIC.load_Resources(source_URL, WAW_UI, WAW_UI.config.event_Driver, WAW_UI__CONSTANTS.events.EVENT__XSL_RESOURCES_LOADED);
	
	
	
};


/**
 * Load XML resources
 * @param source_URL
 * @param name {optional, by default is "default"}
 */
WAW_UI.prototype.load_XML_Resources = function(source_URL, name) {
	
	var WAW_UI = this;
	WAW_UI.config.event_Driver;
	
	if (name == null) {
		name = "default";
	}
	
	if ( bowser.msie ) {
		WAW_Core_STATIC.load_XML_Resources(source_URL, WAW_UI, WAW_UI.config.event_Driver, WAW_UI__CONSTANTS.events.EVENT__XML_RESOURCES_LOADED, name);
	} else {
		WAW_Core_STATIC.load_Resources(source_URL, WAW_UI, WAW_UI.config.event_Driver, WAW_UI__CONSTANTS.events.EVENT__XML_RESOURCES_LOADED, name);
	}
	
//	WAW_Core_STATIC.load_Resources(source_URL, WAW_UI, WAW_UI.config.event_Driver, WAW_UI__CONSTANTS.events.EVENT__XML_RESOURCES_LOADED, name);
//	WAW_Core_STATIC.load_XML_Resources(source_URL, WAW_UI, WAW_UI.config.event_Driver, WAW_UI__CONSTANTS.events.EVENT__XML_RESOURCES_LOADED, name);
};


/**
 * May be overriden
 */
WAW_UI.prototype.loadResources = function() {
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
	
	
	if ( bowser.msie ) {
		templates_Array = WAW_UI_STATIC.get_XSL_Templates_FromXML__BAD.call(waw_UI, XSL_Document);	
	} else if (bowser.firefox) {
		templates_Array = WAW_UI_STATIC.get_XSL_Templates_FromXML__BAD.call(waw_UI, XSL_Document);
	} else {
		templates_Array = WAW_UI_STATIC.get_XSL_Templates_FromXML.call(waw_UI, XSL_Document);	
	}
	
	
	for (var template_Num = 0; template_Num < templates_Array.length; template_Num++) {
		var xsl_Template = templates_Array[template_Num];
		if (waw_UI.find_XSL_Template__by_Name(xsl_Template.name) === false) {
			waw_UI.config.XSL_Templates.push(xsl_Template);
			process_DOC.new_templates.push(xsl_Template.name);
		}
	}
	
  	// Notify event ----------------------------------------------------------------------------------------------------------|\/|---
	var waw_UI_event = new WAW_UI__Event();
	
	waw_UI_event.eventType = WAW_UI__CONSTANTS.events.EVENT__XSL_RESOURCES_PROCESSED;
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


/**
 * Manage event XML_Resources_Loaded
 * @param event
 * @param params
 */
WAW_UI.prototype.manageEvent__XML_RESOURCES_LOADED = function(event, params) {

	var waw_UI = this;
//	var XML_Document = params.config.event_DATA;
//	var XML_name = params.config.extra_DATA;
	
	
	var xml_DATA = new WAW_XML_DATA();
	xml_DATA.name = params.config.extra_DATA;
	xml_DATA.XML_DATA = params.config.event_DATA;
	
	
	if (waw_UI.find_XML_DATA__by_Name(xml_DATA.name, waw_UI.config.XML_DATA) === false) {
		waw_UI.config.XML_DATA.push(xml_DATA);
	}
	
	
  	// Notify event ----------------------------------------------------------------------------------------------------------|\/|---
	var waw_UI_event = new WAW_UI__Event();
	
	waw_UI_event.eventType = WAW_UI__CONSTANTS.events.EVENT__XML_RESOURCES_PROCESSED;
	waw_UI_event.config.event_TYPE = waw_UI_event.eventType;
	waw_UI_event.config.event_DATA = xml_DATA;
	waw_UI_event.config.eventMessage = "XML Resources Processed.";

	waw_UI.config.event_Driver.notifyEvent(waw_UI_event, 0, waw_UI);
//	waw_UI.config.event_Driver.notifyEvent(waw_UI_event, null, waw_UI.config.event_Subscribers);
	// -----------------------------------------------------------------------------------------------------------------------|/\|---

};


/**
 * Manage event XML_Resources_Processed
 * @param event
 * @param params
 */
WAW_UI.prototype.manageEvent__XML_RESOURCES_PROCESSED = function(event, params) {

};



WAW_UI.prototype.map_DOM_Events = function() {
	
};


WAW_UI.prototype.map_CUSTOM_Events = function() {
	
	var waw_UI = this;
	
	// Map event {EVENT__XSL_RESOURCES_LOADED) ---------------------------------------------------------------|\/|---
	jQuery(waw_UI).on(
		WAW_UI__CONSTANTS.events.EVENT__XSL_RESOURCES_LOADED,
		null,
		waw_UI,
		function(event, params) {
			event.preventDefault();
//			event.stopPropagation();
			waw_UI.manageEvent__XSL_RESOURCES_LOADED.call(waw_UI,event, params);
		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	// Map event {EVENT__XSL_RESOURCES_PROCESSED) ------------------------------------------------------------|\/|---
	jQuery(waw_UI).on(
		WAW_UI__CONSTANTS.events.EVENT__XSL_RESOURCES_PROCESSED,
		null,
		waw_UI,
		function(event, params) {
			event.preventDefault();
//			event.stopPropagation();
			waw_UI.manageEvent__XSL_RESOURCES_PROCESSED.call(waw_UI,event, params);
		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	// Map event {EVENT__XML_RESOURCES_LOADED) ---------------------------------------------------------------|\/|---
	jQuery(waw_UI).on(
		WAW_UI__CONSTANTS.events.EVENT__XML_RESOURCES_LOADED,
		null,
		waw_UI,
		function(event, params) {
			event.preventDefault();
//			event.stopPropagation();
			waw_UI.manageEvent__XML_RESOURCES_LOADED.call(waw_UI,event, params);
		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	// Map event {EVENT__XML_RESOURCES_PROCESSED) ------------------------------------------------------------|\/|---
	jQuery(waw_UI).on(
		WAW_UI__CONSTANTS.events.EVENT__XML_RESOURCES_PROCESSED,
		null,
		waw_UI,
		function(event, params) {
			event.preventDefault();
//			event.stopPropagation();
			waw_UI.manageEvent__XML_RESOURCES_PROCESSED.call(waw_UI,event, params);
		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
};


WAW_UI.prototype.initialize = function(){
	
	var waw_UI = this;
	waw_UI.config = deepCopy(this.config);
	
	waw_UI.config.XSL_Templates = [];
	waw_UI.config.XML_DATA = [];
	waw_UI.config.HTML_DATA = [];
	
	// Initialize event driver ------------------------------------------|\/|---
	waw_UI.config.event_Driver = new Event_Driver();
	waw_UI.config.event_Driver.delta_Trigger = 115;
	// ------------------------------------------------------------------|/\|---
	
	waw_UI.map_CUSTOM_Events();
};


WAW_UI.prototype.config = {
	"event_Driver": null,
	"XSL_Templates": null,
	"XML_DATA": null,
	"HTML_DATA": null
};


function WAW_UI() {
	
}