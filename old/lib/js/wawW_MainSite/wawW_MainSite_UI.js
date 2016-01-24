/**
 * WAW Web MainSite (WAWw_MainSite)  UI
 * 
 * JavaScript library
 * 
 * 
 * @author Felipe Camacho Melero
 * 
 * {WhatAboutWorld}
 *  ** WAW 2015 **  
 */


var WAWw_MainSite__UI__CONSTANTS = {
	"layer_ID" : {
		"LAYER__Header" : "big_header",
		"LAYER__Main_Content" : "main_Content",
		"stick_Menu_Header__ID" : "big_header__Footer",
		"stick_Menu_Header_Ref__ID" : "big_header__Items",
		"stick_Menu_Side__ID" : "lateral_bar_Dinamic",
		"stick_Menu_Footer__ID" : "footer",
		"stick_Menu_Footer_Ref__ID" : "footer_ref",
		"button__Options" : "menu_Item__Options"
	},
	
	"tags" : {
		"header__Item" : "header_Menu_Item__",
		"side_Menu__Section" : "lateral_bar__",
		"side_Menu__Section_Tabs" : "side_Bar__Section_Tabs__",
		"side_Bar__Subsection_Link" : "side_Bar__Subsection_Link_",
		"side_Bar__Subsection_Fragment" : "side_Bar__Subsection_Fragment_",
		"side_Bar__Subsection" : "side_Bar__Subsection_",
		"side_Bar__Item" : "side_Bar__Item_",
		"main_Content_TAB" : "main_Content_TAB__",
		"info_Layer" : "Info__",
		"infoDetail_Layer" : "__Detail",
		"infoDetailImage_Layer" : "__Detail_IMG"
	},
	
	"css_classes" : {
		"big_Header" : "big_Header",
		"big_Header__Items_Container" : "big_Header__Items_Container",
		"stick_Menu_Header__CSS" : "big_Header__Items_Dinamic",
		"stick_Menu_Side__CSS" : "side_Menu_Dinamic",
		"header_Menu_Item" : "menu_Item",
		"header_Menu_Item__Selected" : "menu_Item__Selected",
		"header_Menu_Item__Options" : "menu_Item__Options",
		"stick_Menu_Footer__CSS" : "Footer_Layer_Dinamic",
		
		"side_Menu__Option" : "side_Menu__Option",
		"side_Menu__Title" : "side_Menu__Title",
		"side_Menu__Section" : "side_Menu__Section",
		"side_Menu__Tabs" : "side_Menu_Tabs",
		"side_Menu__SubSection" : "side_Menu__SubSection",
		"side_Menu__Item": "side_Menu__Item",
		"side_Menu__Footer" : "side_Menu__Footer",
		
		"option_Button" : "Option_Button",
		"Option_Button__Close" : "Option_Button__Close",
		
		"main_Content__Tab" : "Main_Content_TAB",
		"main_Content__Info" : "Main_Content__Info",
		"main_Content__Info__DETAIL" : "Main_Content__Info__DETAIL",
		"main_Content__Info__DETAIL_IMG" : "Main_Content__Info__DETAIL_IMG",
		"Main_Content__Info__BOTTOM" : "Main_Content__Info__BOTTOM",
		
		"Sub_Content__Info" : "Sub_Content__Info",
		"Main_Content__Info__Topics" : "Main_Content__Info__Topics",
		"Main_Content__Info__Blogs" : "Main_Content__Info__Blogs",
		"Topic_Thumbnail__Container" : "Topic_Thumbnail__Container",
		
		"Info_Synergy__BUTTON" : "Info_Synergy__BUTTON",
		
		"Topic_Thumbnails__Grid_Container" : "Topic_Thumbnails__Grid_Container",
		"Topic_Thumbnails__Grid_Row" : "Topic_Thumbnails__Grid_Row",
		"Topic_Thumbnail__Container" : "Topic_Thumbnail__Container",
		"Topic_Thumbnail__IMG" : "Topic_Thumbnail__IMG",
		
		"Toolbar" : "Toolbar",
		"Toolbar_Buttons" : "Toolbar_Buttons",
		"Toolbar_Button" : "Toolbar_Button",
		"Toolbar_Button__IMG" : "Toolbar_Button__IMG",
		
		"Body_Content" : "Body_Content",
		"Options_Content" : "Options_Content",
		"Option" : "Option", // Toolbar_Button__IMG
		"Option__IMG" : "Option__IMG",
		
		
		
		"sectionTAG" : "section__",
		"section__WAW" : "section__WAW",
		"section__Health" : "section__Health",
		"section__Justice" : "section__Justice",
		"section__Planet" : "section__Planet",
		"section__Information" : "section__Information",
		"section__Energy" : "section__Energy"
		
	},
	
	"events" : {
		"EVENT__Header_Menu__Link" : "Header_Menu__Link",
		"EVENT__Options__Link" : "Options__Link",
		"EVENT__Synergy__Link" : "Synergy__Link",
		"EVENT__Topic_Thumbnail__Link" : "Topic_Thumbnail__Link",
		"EVENT__SubTopic_Thumbnail__Link" : "SubTopic_Thumbnail__Link",
		"EVENT__SubTopicBlog_Thumbnail__Link" : "SubTopicBlog_Thumbnail__Link",
		"EVENT__TopicBlog_ToolbarButton__Link" : "TopicBlog_ToolbarButton__Link",
		"EVENT__TopicBlog_Search__Update" : "TopicBlog_Search__Update",
		"EVENT__Side_Menu__Link" : "Side_Menu__Link",
		"EVENT__Side_Menu__Hide" : "Side_Menu__Hide",
		"EVENT__Section_Change" : "Section_Change",
		
		"EVENT__Section_Classes__Guitar" : "Section_Classes__Guitar",
		"EVENT__Section_Classes__Sing" : "Section_Classes__Sing"
	}
};


WAWw_MainSite__UI__CONSTANTS.Synergyes = {
		"synergyType__MoreInfo" : "MoreInfo",
		"synergyType__Topic" : "Topic",
		"synergyType__Blog" : "Blog"
			
};

WAWw_MainSite__UI__CONSTANTS.Topics = {
		
		"topic__Health" : "Health",
		"subTopic__Health__Physical_Layer" : "Physical_Layer",
		"subTopic__Health__Psychological_Layer" : "Psychological_Layer",
		
		"topic__Justice" : "Justice",
		"subTopic__Justice__HumanRights" : "HumanRights",
		"subTopic__Justice__SocialGroups" : "SocialGroups",
		"subTopic__Justice__Family" : "Family",
		"subTopic__Justice__Community" : "Community",
		"subTopic__Justice__Law" : "Law",
		"subTopic__Justice__Society" : "Society",
		"subTopic__Justice__Defense" : "Defense",
		
		"topic__Planet" : "Planet",
		"subTopic__Planet__Planet_Formation" : "Planet_Formation",
		"subTopic__Planet__Current_Home" : "Current_Home",
		"subTopic__Planet__Water" : "Water",
		"subTopic__Planet__MoleculesOfLife" : "MoleculesOfLife",
		"subTopic__Planet__Cell" : "Cell",
		"subTopic__Planet__Bacteria" : "Bacteria",
		"subTopic__Planet__Plants" : "Plants",
		"subTopic__Planet__Animals" : "Animals",
		
		"topic__Information" : "Information",
		"subTopic__Information__Language" : "Language",
		"subTopic__Information__Messages" : "Messages",
		"subTopic__Information__Communication" : "Communication",
		"subTopic__Information__Education" : "Education",
		"subTopic__Information__Knowledge" : "Knowledge",
		
		"topic__Energy" : "Energy",
		"subTopic__Energy__Acquire" : "Acquire",
		"subTopic__Energy__Storage" : "Storage",
		"subTopic__Energy__Use" : "Use"
		
};


/**
 * Set section
 * @param {String} section
 * @param {Boolean} scroll A scroll to top after section is selected 
 */
WAWw_MainSite__UI.prototype.set_Section = function(section, scroll) {
	
//	console_Log( "WAWw_MainSite UI set_Section." );	// TODO WAWw_MainSite REMOVE DEBUG LOG
//	console_Log( section );	// TODO WAWw_MainSite REMOVE DEBUG LOG
	
	var wawW_MainSite__UI = this;

	// Remove class from previous selected item ---------------------------------------------|\/|---
	jQuery('.' + WAWw_MainSite__UI__CONSTANTS.css_classes.big_Header ).find(
			'.' + WAWw_MainSite__UI__CONSTANTS.css_classes.header_Menu_Item ).removeClass(
					WAWw_MainSite__UI__CONSTANTS.css_classes.header_Menu_Item__Selected );
	// --------------------------------------------------------------------------------------|/\|---
	
	// Add menu item class to selected item -------------------------------------------------|\/|---
	jQuery('.' + WAWw_MainSite__UI__CONSTANTS.css_classes.big_Header ).find(
			'.' + WAWw_MainSite__UI__CONSTANTS.css_classes.header_Menu_Item + 
			'.' + section ).addClass(
					WAWw_MainSite__UI__CONSTANTS.css_classes.header_Menu_Item__Selected);
	// --------------------------------------------------------------------------------------|/\|---
	
	
	// Hide active main content -------------------------------------------------------------|\/|---
	jQuery('#'+ WAWw_MainSite__UI__CONSTANTS.layer_ID.LAYER__Main_Content).find(
			'.' + WAWw_MainSite__UI__CONSTANTS.css_classes.main_Content__Tab).hide();
	// --------------------------------------------------------------------------------------|/\|---
	
	// Show active main content -------------------------------------------------------------|\/|---
	jQuery('#'+ WAWw_MainSite__UI__CONSTANTS.layer_ID.LAYER__Main_Content).find(
			'.' + WAWw_MainSite__UI__CONSTANTS.css_classes.main_Content__Tab + 
			'.' + section ).show();
	// --------------------------------------------------------------------------------------|/\|---

	
//	// Hide previous active side bar content ------------------------------------------------|\/|---
//	jQuery('#'+ Pintura_Carrillo__CONSTANTS.layer_ID.layer__Lateral_Bar).find(
//			'.' + Pintura_Carrillo__CONSTANTS.css_classes.side_Menu__Section).hide();
//	// --------------------------------------------------------------------------------------|/\|---
//	
//	// Show active side bar content ---------------------------------------------------------|\/|---
//	jQuery('#'+ Pintura_Carrillo__CONSTANTS.layer_ID.layer__Lateral_Bar).find(
//			'.' + Pintura_Carrillo__CONSTANTS.css_classes.side_Menu__Section + 
//			'.' + section.css_Extra).show();
//	// --------------------------------------------------------------------------------------|/\|---
	
//	// Show options button when it is necessary ---------------------------------------|\/|---
//	jQuery('#'+ Pintura_Carrillo__CONSTANTS.layer_ID.button__Options).hide();
//	if (section.options_Button === true) {
//		jQuery('#'+ Pintura_Carrillo__CONSTANTS.layer_ID.button__Options).show();
//	}
//	// --------------------------------------------------------------------------------|/\|---
	
	
	// Notify event --------------------------------------------------------------------------------------|\/|---
	var wawW_MainSite_event = new WAWw_MainSite__Event();
	wawW_MainSite_event.config.event = null;
	wawW_MainSite_event.eventType = WAWw_MainSite__UI__CONSTANTS.events.EVENT__Section_Change;
//	wawW_MainSite_event.config.event_DATA = section;
	wawW_MainSite_event.eventMessage = "Section changue";
	
//	var section_Object = this.config.paint_Carr__Object.find_SectionObject__By_ID(section.ID);
//	
//	if (section_Object != false) {
//		section_Object.Object_DATA.manage_UI_Events(wawW_MainSite_event, wawW_MainSite_event);
//	}

	wawW_MainSite__UI.config.event_Driver.notifyEvent( wawW_MainSite_event, null, wawW_MainSite__UI );
	// ---------------------------------------------------------------------------------------------------|/\|---
	
	
	if (scroll === true) {
		jQuery('html, body').animate({
			  scrollTop: jQuery("." + WAWw_MainSite__UI__CONSTANTS.css_classes.big_Header ).offset().top //- 40
			}, 410);	
	}
	
};

/**
 * Method for manage event {EVENT__Header_Menu__Link}
 * @param event
 * @param params
 */
WAWw_MainSite__UI.prototype.manageEvent__Header_Menu__Link = function( event, params ) {
	
	var section_IDtag = jQuery( params.config.event.currentTarget ).attr( "button_key" );
	
	if ( section_IDtag !== false ) {
		
		/** @type WAWw_MainSite */
		var waw_Object = WAWw_Mainsite__Static.wawW_MainSite__Object;
		
		/** @type WAW_Core_Site */
		var waw_Site = waw_Object.config.waw_Site;
		
		var waw_Section = false;
		
		try {
			waw_Section = waw_Site.find_Section__byIDTag( section_IDtag );
			
			if ( !waw_Section ) {
				throw new WAW_Core_Exception( "Section not found." );
			}
			
		} catch (e) {
			// TODO: handle exception
			console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
			return;
		}
		
//		// Hide side bar in option mode --------------------------------------------------------|\/|---
//		jQuery('#' + Pintura_Carrillo__CONSTANTS.layer_ID.layer__Lateral_Bar).removeClass(
//				Pintura_Carrillo__CONSTANTS.css_classes.side_Menu__Option);
//		// -------------------------------------------------------------------------------------|/\|---
		
		// Set section -------------------------------------------|-|---
//		this.set_Section( "section__" + section_IDtag, true);
		
		// Set section (with routes) -----------------------------|-|---		
		this.config.appRouter.navigate( 'section/' + section_IDtag, 
				{ trigger: true, replace: true} 
		);
	}
	
};

/**
 * Method for manage event {EVENT__Synergy__Link}
 * @param event
 * @param params
 */
WAWw_MainSite__UI.prototype.manageEvent__SynergyButton__Link = function( event, params ) {
	
	var synergyTopic = jQuery( params.config.event.currentTarget ).attr( "synergyTopic" );
	var synergyType = jQuery( params.config.event.currentTarget ).attr( "synergyType" );

	/** @type WAWw_MainSite */
	var waw_Object = WAWw_Mainsite__Static.wawW_MainSite__Object;
	
	/** @type WAW_Core_Site */
	var waw_Site = waw_Object.config.waw_Site;
	
	var waw_Section = false;
	
	try {
		waw_Section = waw_Site.find_Section__byIDTag( synergyTopic );
		
		if ( !waw_Section ) {
			throw new WAW_Core_Exception( "Section not found." );
		}
		
	} catch (e) {
		// TODO: handle exception
		console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
		return;
	}
	
	
	switch ( synergyType ) {
	
		case WAWw_MainSite__CONSTANTS.synergies.SynergyType__MoreInfo:
		case WAWw_MainSite__CONSTANTS.synergies.SynergyType__Blog:
			
			try {
//				window.location = waw_Section.config.properties.get__Property( synergyType ).value;
				window.open( waw_Section.config.properties.get__Property( synergyType ).value );
			} catch (e) {
				// TODO: handle exception
				console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
				return;
			}
			
			break;
			
		case WAWw_MainSite__CONSTANTS.synergies.SynergyType__Topics:
			
			var section__CSS_Tag = "";
			
			try {
				section__CSS_Tag = waw_Section.config.properties.get__Property( WAWw_MainSite__CONSTANTS.properties.Property__CSS_Tag ).value;	
			} catch (e) {
				// TODO: handle exception
				console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
				return;
			}
						
			
			// Hide other subContents ---------------------------------------------------------------------------------------------|\/|---
			if (! jQuery( params.config.event.currentTarget ).hasClass( "selected" ) ) {
				
				jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.main_Content__Info + 
						"." + section__CSS_Tag +
						" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Sub_Content__Info  ).slideUp( 673 );
				
				jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.main_Content__Info + 
						"." + section__CSS_Tag +
						" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__BOTTOM +
						" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Info_Synergy__BUTTON ).removeClass( "selected" );
			}
			// --------------------------------------------------------------------------------------------------------------------|/\|---
			
			// Show selected subContent -------------------------------------------------------------------------------------------|\/|---
			jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Topics  + 
					"." + section__CSS_Tag ).slideToggle( 673 );
			
			jQuery('html, body').animate({
				  scrollTop: jQuery("." + WAWw_MainSite__UI__CONSTANTS.css_classes.big_Header ).offset().top //- 40
				}, 410);	
			
			
			jQuery( params.config.event.currentTarget ).toggleClass( "selected" );
			// --------------------------------------------------------------------------------------------------------------------|/\|---
			
			break;
			
		case WAWw_MainSite__CONSTANTS.synergies.SynergyType__Blog_V2:	// Blogs v2
			this.manageEvent__showBlogEntries( waw_Section, event, params );
			break;
	
		default:
			break;
	}
	
}

/**
 * Method for manage event {EVENT__Synergy__Link}
 * @param event
 * @param params
 */
WAWw_MainSite__UI.prototype.manageEvent__Topic_Thumbnail__Link = function( event, params ) {
	
	var topic = jQuery( params.config.event.currentTarget ).attr( "topic" );
	
	/** @type WAWw_MainSite */
	var waw_Object = WAWw_Mainsite__Static.wawW_MainSite__Object;
	
	/** @type WAW_Core_Site */
	var waw_Site = waw_Object.config.waw_Site;
	
	var waw_Section = false;
	
	try {
		waw_Section = waw_Site.find_Section__byIDTag( topic );
		
		if ( !waw_Section ) {
			throw new WAW_Core_Exception( "Section not found." );
		}
		
	} catch (e) {
		// TODO: handle exception
		console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
		return;
	}
	
	// Set section -------------------------------------------|-|---
//	this.set_Section( "section__" + section_IDtag, true);
	
	// Set section (with routes) -----------------------------|-|---		
	this.config.appRouter.navigate( 'section/' + topic, 
			{ trigger: true, replace: true} 
	);
	
	jQuery('html, body').animate({
		  scrollTop: jQuery("." + WAWw_MainSite__UI__CONSTANTS.css_classes.big_Header ).offset().top //- 40
		}, 410);
	
};

/**
 * Method for manage event {EVENT__SubTopic_Thumbnail__Link}
 * @param event
 * @param params
 */
WAWw_MainSite__UI.prototype.manageEvent__SubTopic_Thumbnail__Link = function( event, params ) {
	
	var topic = jQuery( params.config.event.currentTarget ).attr( "topic" );
	var subTopic = jQuery( params.config.event.currentTarget ).attr( "subTopic" );

	/** @type WAWw_MainSite */
	var waw_Object = WAWw_Mainsite__Static.wawW_MainSite__Object;
	
	/** @type WAW_Core_Site */
	var waw_Site = waw_Object.config.waw_Site;
	
	var waw_Section = false;
	
	try {
		waw_Section = waw_Site.find_Section__byIDTag( topic );
		
		if ( !waw_Section ) {
			throw new WAW_Core_Exception( "Section not found." );
		}
		
	} catch (e) {
		// TODO: handle exception
		console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
		return;
	}
	
	/** @type WAW_Core_SectionsList */
	var subSections = waw_Section.config.subsectionsList;
	var subSection = "";
	
	try {
		subSection = subSections.get__Section( subTopic );
	} catch (e) {
		// TODO: handle exception
		console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
		return;
	}
	
	/** @type WAW_Core_PropertiesList */
	var subSection_Properties = subSection.config.properties;
	try {
//		window.location = subSection_Properties.get__Property( WAWw_MainSite__CONSTANTS.synergies.SynergyType__MoreInfo ).value;
		window.open( subSection_Properties.get__Property( WAWw_MainSite__CONSTANTS.synergies.SynergyType__MoreInfo ).value );
	} catch (e) {
		// TODO: handle exception
		console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
		return;
	}

};

/**
 * Map CUSTOM events
 */
WAWw_MainSite__UI.prototype.map_CUSTOM_Events = function() {

//	this.parent.map_CUSTOM_Events.call(this);	// Parent map_CUSTOM_Events
	
	var wawW_MainSite_UI = this;
	
	// Map event {EVENT__Header_Menu__Link) ------------------------------------------------------------------|\/|---
	jQuery( wawW_MainSite_UI ).on(
			WAWw_MainSite__UI__CONSTANTS.events.EVENT__Header_Menu__Link,
		null,
		wawW_MainSite_UI,
		function(event, params) {
			event.preventDefault();
			event.stopPropagation();
			
			try {
				wawW_MainSite_UI.manageEvent__Header_Menu__Link( event, params );
			} catch (e) {
				console_Log( "Error managing event EVENT__Header_Menu__Link. " + e.message );	// TODO WAWw_MainSite REMOVE DEBUG LOG
			}

		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	// Map event {EVENT__Synergy__Link) ----------------------------------------------------------------------|\/|---
	jQuery( wawW_MainSite_UI ).on(
			WAWw_MainSite__UI__CONSTANTS.events.EVENT__Synergy__Link,
		null,
		wawW_MainSite_UI,
		function(event, params) {
			event.preventDefault();
			event.stopPropagation();
			
			try {
				wawW_MainSite_UI.manageEvent__SynergyButton__Link( event, params );
			} catch (e) {
				console_Log( "Error managing event EVENT__Synergy__Link. " + e.message );	// TODO WAWw_MainSite REMOVE DEBUG LOG
			}

		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	// Map event {EVENT__Topic_Thumbnail__Link) --------------------------------------------------------------|\/|---
	jQuery( wawW_MainSite_UI ).on(
			WAWw_MainSite__UI__CONSTANTS.events.EVENT__Topic_Thumbnail__Link,
		null,
		wawW_MainSite_UI,
		function(event, params) {
			event.preventDefault();
			event.stopPropagation();
			
			try {
				wawW_MainSite_UI.manageEvent__Topic_Thumbnail__Link(event, params );
			} catch (e) {
				console_Log( "Error managing event EVENT__Topic_Thumbnail__Link. " + e.message );	// TODO WAWw_MainSite REMOVE DEBUG LOG
			}

		});
	// -------------------------------------------------------------------------------------------------------|/\|---

	// Map event {EVENT__SubTopic_Thumbnail__Link) -----------------------------------------------------------|\/|---
	jQuery( wawW_MainSite_UI ).on(
			WAWw_MainSite__UI__CONSTANTS.events.EVENT__SubTopic_Thumbnail__Link,
		null,
		wawW_MainSite_UI,
		function(event, params) {
			event.preventDefault();
			event.stopPropagation();
			
			try {
				wawW_MainSite_UI.manageEvent__SubTopic_Thumbnail__Link( event, params );
			} catch (e) {
				console_Log( "Error managing event EVENT__Topic_Thumbnail__Link. " + e.message );	// TODO WAWw_MainSite REMOVE DEBUG LOG
			}

		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	WAWw_MainSite__Feeds__STATIC.map_CUSTOM_Events( this );		// Custom events for Feeds
	
};

/**
 * Map DOM events
 */
WAWw_MainSite__UI.prototype.map_DOM_Events = function() {
	
	var wawW_MainSite_UI = this;

	// Header menu item event ----------------------------------------------------------------------------------|\/|---
	jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.header_Menu_Item ).on("click", 
			null, wawW_MainSite_UI, function(event) {
		
		var wawW_MainSite_event = new WAWw_MainSite__Event();
		wawW_MainSite_event.config.event = event;
		wawW_MainSite_event.eventType = WAWw_MainSite__UI__CONSTANTS.events.EVENT__Header_Menu__Link;
		wawW_MainSite_event.config.event_DATA = "";
		wawW_MainSite_event.eventMessage = "Button header clicked";
		
		wawW_MainSite_UI.config.event_Driver.notifyEvent( wawW_MainSite_event, null, wawW_MainSite_UI );
		
	});
	// ---------------------------------------------------------------------------------------------------------|/\|---
	
	// Synergy buttons -----------------------------------------------------------------------------------------|\/|---
	jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.Info_Synergy__BUTTON ).on("click", 
			null, wawW_MainSite_UI, function(event) {
		
		var wawW_MainSite_event = new WAWw_MainSite__Event();
		wawW_MainSite_event.config.event = event;
		wawW_MainSite_event.eventType = WAWw_MainSite__UI__CONSTANTS.events.EVENT__Synergy__Link;
		wawW_MainSite_event.config.event_DATA = "";
		wawW_MainSite_event.eventMessage = "Synergy Button clicked";
		
		wawW_MainSite_UI.config.event_Driver.notifyEvent( wawW_MainSite_event, null, wawW_MainSite_UI );
		
	});
	// ---------------------------------------------------------------------------------------------------------|/\|---

	// Topic_Thumbnail links -----------------------------------------------------------------------------------|\/|---
	jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.main_Content__Info +
			"." + WAWw_MainSite__UI__CONSTANTS.css_classes.section__WAW +
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Topic_Thumbnail__Container ).on("click", 
			null, wawW_MainSite_UI, function(event) {
		
		var wawW_MainSite_event = new WAWw_MainSite__Event();
		wawW_MainSite_event.config.event = event;
		wawW_MainSite_event.eventType = WAWw_MainSite__UI__CONSTANTS.events.EVENT__Topic_Thumbnail__Link;
		wawW_MainSite_event.config.event_DATA = "";
		wawW_MainSite_event.eventMessage = "Topic Thumbnail clicked";
		
		wawW_MainSite_UI.config.event_Driver.notifyEvent( wawW_MainSite_event, null, wawW_MainSite_UI );
		
	});
	// ---------------------------------------------------------------------------------------------------------|/\|---
	
	// SubTopic_Thumbnail links --------------------------------------------------------------------------------|\/|---
	jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Topics + 
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Topic_Thumbnail__Container  + 
			"." + "SubTopic" ).on("click", 
			null, wawW_MainSite_UI, function(event) {
		
		var wawW_MainSite_event = new WAWw_MainSite__Event();
		wawW_MainSite_event.config.event = event;
		wawW_MainSite_event.eventType = WAWw_MainSite__UI__CONSTANTS.events.EVENT__SubTopic_Thumbnail__Link;
		wawW_MainSite_event.config.event_DATA = "";
		wawW_MainSite_event.eventMessage = "SubTopic Thumbnail clicked";
		
		wawW_MainSite_UI.config.event_Driver.notifyEvent( wawW_MainSite_event, null, wawW_MainSite_UI );
		
	});
	// ---------------------------------------------------------------------------------------------------------|/\|---

	WAWw_MainSite__Feeds__STATIC.map_DOM_Events( this );	// DOM event for Feeds
	
};

/**
 * Initialize sticky menus
 */
WAWw_MainSite__UI.prototype.initialize_StickyMenus = function() {
	
	var wawW_MainSite_UI = this;
	
	// Initialize sticky menu for Header ----------------------------------------------------------|\/|---
	this.config.stick_Menu_Header = new Sticky_Navigation();
	this.config.stick_Menu_Header.initialize_Sticky( 
			WAWw_MainSite__UI__CONSTANTS.layer_ID.stick_Menu_Header__ID, 
			WAWw_MainSite__UI__CONSTANTS.layer_ID.stick_Menu_Header_Ref__ID, 
			WAWw_MainSite__UI__CONSTANTS.css_classes.stick_Menu_Header__CSS );
	// --------------------------------------------------------------------------------------------|/\|---
	

	// Initialize sticky for footer ---------------------------------------------------------------|\/|---
	this.config.stick_Menu_Footer = new Sticky_Navigation();
	this.config.stick_Menu_Footer.initialize_Sticky( 
			WAWw_MainSite__UI__CONSTANTS.layer_ID.stick_Menu_Footer__ID, 
			WAWw_MainSite__UI__CONSTANTS.layer_ID.stick_Menu_Footer_Ref__ID,
			WAWw_MainSite__UI__CONSTANTS.css_classes.stick_Menu_Footer__CSS);
	// --------------------------------------------------------------------------------------------|/\|---
	
	
    // and run it again every time you scroll -----------------------------------|\/|---
    jQuery(window).scroll(function() {
    	
//    	wawW_MainSite_UI.config.stick_Menu_Header.check_Sticky();
//    	wawW_MainSite_UI.config.stick_Menu_Side.check_Sticky();
//    	wawW_MainSite_UI.config.stick_Menu_Footer.check_Sticky(true);
    	
		clearTimeout( jQuery.data( this, "scrollCheck" ) );
		jQuery.data( this, "scrollCheck", setTimeout(function() {
	    	wawW_MainSite_UI.config.stick_Menu_Header.check_Sticky();
//	    	wawW_MainSite_UI.config.stick_Menu_Side.check_Sticky();
	    	wawW_MainSite_UI.config.stick_Menu_Footer.check_Sticky(true);
		}, 130) );
    	
    });
    // --------------------------------------------------------------------------|/\|--- 

};

/**
 * Initialize
 */
WAWw_MainSite__UI.prototype.initialize = function() {
	
	// Initialize self configuration
	var wawW_MainSite_UI = this;
	wawW_MainSite_UI.config = deepCopy(this.config);
	
	
	// Initialize event driver ------------------------------------------|\/|---
	wawW_MainSite_UI.config.event_Driver = new Event_Driver();
	wawW_MainSite_UI.config.event_Driver.delta_Trigger = 315;
	// ------------------------------------------------------------------|/\|---
	
	// Menu items dragcontrol --------------------------------------------------------------------------|\/|---
	new Dragdealer('big_header__Items_Container', {
		  animationCallback: function(x, y) {
//		    $('#just-a-slider .value').text(Math.round(x * 100));
//			  console_Log( "Dragdealer. " + x + " " + y );	// TODO WAWw_MainSite REMOVE DEBUG LOG
		  }
		});
	// -------------------------------------------------------------------------------------------------|/\|---
	
	// TokenFields ---------------------------------------------------------------------------------------------|\/|---
//	jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs +
//			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Options_Content  + 
//			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Option +  
//			".labels" +
//			" input" ).tokenfield({
//			  autocomplete: {
//				    source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
//				    delay: 100
//				  },
//				  showAutocompleteOnFocus: true
//			});
	// ---------------------------------------------------------------------------------------------------------|/\|---
	
	// Backbone routes ----------------------------------------------------------------------------------------------------------|\/|---
	/**
	 * Read more: http://mrbool.com/backbone-js-router/28001#ixzz3TLilNq00
	 */
	// define router class 
	var WAWw_MainSite_Router = Backbone.Router.extend({ 
		routes: { 
			'': 'home', 
//			'view/:id' : 'view', 
			'section/:name(/p:page)': 'showSection' }, 
		home: function () {
			Backbone.history.navigate( 'section/' + "WAW", 
					{ trigger: true, replace: true} 
				);
			}, 
//		view: function (id) { alert('you are viewing an image with id of ' + id); }, 
		showSection: function (name,page) { 
			wawW_MainSite_UI.set_Section( WAWw_MainSite__UI__CONSTANTS.css_classes.sectionTAG + name );
			} 
		
		});

	
	//create new router instance 
	
	wawW_MainSite_UI.config.appRouter = new WAWw_MainSite_Router();
	
	//use router.navigate() 
//	galleryRouter.navigate('view/19'); 
	//or 
//	galleryRouter.navigate('view/19', {trigger: true}); 
	//or 
//	galleryRouter.navigate('view/19', {trigger: true, replace: true});

	
	// without History API 
	Backbone.history.start(); 
	//or 
	// use html5 History API 
//	Backbone.history.start({pushState: true});
 
	// --------------------------------------------------------------------------------------------------------------------------|/\|---

};

/**
 * BDFLC UI configuration
 */
WAWw_MainSite__UI.prototype.config = {
	"stick_Menu_Header" : null,
	"stick_Menu_Side" : null,
	"stick_Menu_Footer" : null,
	"event_Driver" : null,
	"appRouter" : null,
	"extra_Plugins" : {
		"i18next" : {
			
		}
	}
};

function WAWw_MainSite__UI() {
	
//	this.config = deepCopy( WAWw_MainSite__UI.prototype.config );	// Initialize config
	
	
}
