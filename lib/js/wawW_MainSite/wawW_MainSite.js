/**
 * WAW Web MainSite (WAWw_MainSite) 
 * 
 * JavaScript library
 * 
 * 
 * @author Felipe Camacho Melero
 * 
 * {WhatAboutWorld}
 *  ** WAW 2015 **  
 */

/**
 * WAWw_MainSite constants
 *
 */
var WAWw_MainSite__CONSTANTS = {
	"events" : {
		"EVENT__Header_Menu__Link" : "Header_Menu__Link",
		"EVENT__Options__Link" : "Options__Link",
		"EVENT__Side_Menu__Link" : "Side_Menu__Link",
		"EVENT__Side_Menu__Hide" : "Side_Menu__Hide",
		"EVENT__Section_Change" : "Section_Change"
	},
	"states" : {
		"STATE__Start" : "Start",
		"STATE__Classes" : "Classes", 
		"STATE__Contact" : "Contact"
	},
	"sections" : {
		"SECTION__WAW" : "WAW",
		
				
//		"SECTION__Information" : "Information",
//		"SECTION__Energy" : "Energy"
	},
	"properties" : {
		"Property__CSS_Tag" : "CSS_Tag",
		"Property__Blog" : "blog",
		"Property__Blog_Feeds" : "blog_Feeds",
		"Property__blog_Tags" : "blog_Tags"
	},
	"synergies" : {
		"SynergyType__MoreInfo" : "moreInfo",
		"SynergyType__Topics" : "Topic",
		"SynergyType__Blog" : "blog",
		"SynergyType__Blog_V2" : "blog_V2"
	}

};


WAWw_MainSite__Event.prototype.config = {
		"event" : null,
		"event_TYPE" : null,
		"event_DATA" : null
	};


/**
 * WAWw_MainSite Event
 * @returns {WAWw_MainSite__Event}
 */
function WAWw_MainSite__Event() {
	this.config = deepCopy(this.config);
};


WAWw_MainSite.prototype.map_CUSTOM_Events = function() {	
	
//	this.parent.map_CUSTOM_Events.call(this);	// Parent map_CUSTOM_Events
	
	var wawW_MainSite = this;
	
	// Map event {EVENT__UserLogout) --------------------------------------------------------------|\/|---
//	jQuery(wawW_MainSite.config.dashboard_UI).on(
//			wawW_MainSite__UI__CONSTANTS.events.EVENT__UserLogout,
//		null,
//		wawW_MainSite,
//		function(event, params) {
//			event.preventDefault();
//			event.stopPropagation();
//			wawW_MainSite.manageEvent__ButtonLogout.call(wawW_MainSite, event, params);
//
//		});
	 // -------------------------------------------------------------------------------------------|/\|---
	
	// Map event {EVENT__SOAP_MESSAGE_RECEIVED) --------------------------------------------------------------|\/|---
	jQuery(wawW_MainSite.config.UI).on(
		WAW_SOAP__CONSTANTS.events.EVENT__WAWSOAP_MESSAGE_RECEIVED,
		null,
		wawW_MainSite,
		function(event, params) {
			event.preventDefault();
			event.stopPropagation();
			wawW_MainSite.manageEvent__WAWSOAP_Message__Received.call(wawW_MainSite, event, params);

		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
};


/**
 * Initialize
 */
WAWw_MainSite.prototype.initialize = function() {
	
	var wawW_MainSite = this;
	
	wawW_MainSite.config = deepCopy(this.config);
	wawW_MainSite.config.sections = [];
	
	// Initialize event driver -------------------------------------------|\/|---
	wawW_MainSite.config.event_Driver = new Event_Driver();
	wawW_MainSite.config.event_Driver.delta_Trigger = 240;
	// -------------------------------------------------------------------|/\|---
	
	// WAW Site configuration ---------------------------------------------------------------------------------------------------|\ WAW Site configuration /|---
	wawW_MainSite.config.waw_Site = WAW_Core_STATIC.getNew__WAW_Core_Site();
	wawW_MainSite.config.waw_Site.config.sections.push( WAWw_Mainsite__Static.section__WAW.getNew__Section_WAW() );
	wawW_MainSite.config.waw_Site.config.sections.push( WAWw_Mainsite__Static.section__Health.getNew__Section_Health() );
	wawW_MainSite.config.waw_Site.config.sections.push( WAWw_Mainsite__Static.section__Justice.getNew__Section_Justice() );
	wawW_MainSite.config.waw_Site.config.sections.push( WAWw_Mainsite__Static.section__Planet.getNew__Section_Planet() );
	wawW_MainSite.config.waw_Site.config.sections.push( WAWw_Mainsite__Static.section__Information.getNew__Section_Information() );
	wawW_MainSite.config.waw_Site.config.sections.push( WAWw_Mainsite__Static.section__Energy.getNew__Section_Energy() );
	// --------------------------------------------------------------------------------------------------------------------------|/ WAW Site configuration \|---
	
	
	// Initialize UI -----------------------------------------------------|\/|---
	wawW_MainSite.config.UI = new WAWw_MainSite__UI();
	wawW_MainSite.config.UI.initialize();
	wawW_MainSite.config.UI.map_CUSTOM_Events();
	wawW_MainSite.config.UI.map_DOM_Events();
//	wawW_MainSite.config.UI.set_Section( "section__WAW" );
	// -------------------------------------------------------------------|/\|---
	
    
	// Setup UI ------------------------------------------------------------------|\/|---
//    wawW_MainSite.config.UI.initialize_HeaderItems();
//    wawW_MainSite.config.UI.initialize_SideMenu();
    
//    wawW_MainSite.config.UI.map_PaintCarrillo_events();
//    wawW_MainSite.config.UI.mapDOMevents();
    
//    wawW_MainSite.config.UI.initialize_StickyMenus();
    
//    wawW_MainSite.config.UI.initialize_extraPlugins();
    
//    wawW_MainSite.config.UI.set_Section( wawW_MainSite.config.sections[0] );
    // ---------------------------------------------------------------------------|/\|---
	
	
	
	
};

/**
 * WAWw_MainSite Configuration
 */
WAWw_MainSite.prototype.config = {
	"waw_Site" : "",
	"sections": [],
	"section_Objects": [],
	"UI": null,
	"event_Driver" : null
};


function WAWw_MainSite() {
	
	
}

/**
 * Static properties
 */
var WAWw_Mainsite__Static = {
	"wawW_MainSite__Object" : ""
};


/**
 * Main
 */
jQuery(document).ready(function($){

	wawW_MainSite = new WAWw_MainSite();
	wawW_MainSite.initialize();
	
	WAWw_Mainsite__Static.wawW_MainSite__Object = wawW_MainSite;
	
	
	
	});