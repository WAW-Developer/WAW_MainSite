/**
 * WAW Web MainSite Feeds (WAWw_MainSite__Feeds)
 * 
 * JavaScript library
 * 
 * 
 * @author Felipe Camacho Melero
 * 
 * {WhatAboutWorld}
 *  ** WAW 2015 **  
 */

/*globals WAWw_MainSite__UI WAWw_MainSite__CONSTANTS jQuery WAWw_MainSite__UI__CONSTANTS WAWw_MainSite__Event console_Log WAWw_Mainsite__Static WAW_Core_Exception*/


/**
 * @param {WAW_Core_Section} waw_Section
 * @param {Feeds} feedsObject
 */
WAWw_MainSite__UI.prototype.paintBlogResults = function( waw_Section, feedsObject, searchResult ) {
	
	var wawW_MainSite_UI = this;
	
	var section__CSS_Tag = waw_Section.config.properties.get__Property( 
				WAWw_MainSite__CONSTANTS.properties.Property__CSS_Tag 
				).value;

	// HTML template for Feed information ---------------------------------------------------------------------------------------------------------|\/|---
	var HTMLString = "<div class=\"Topic_Thumbnails__Grid_Row\">" +
	"<div class=\"Topic_Thumbnail__Container SuperTopic UP\" topic=\"##@*#Section#*@##\">" +
	"<div class=\"Topic_Thumbnail__IMG ##@*#Section_CSS#*@##\"></div>" +
	"</div>" +
	"<div class=\"Topic_Thumbnail__Container SubTopic DOWN\" topic=\"##@*#Section#*@##\" feedLink=\"##@*#FeedLink#*@##\">" +
	"<div class=\"Topic_Thumbnail__IMG ##@*#CSS_IMG#*@##\"></div>" +
	"</div>" +
	"<div class=\"InfoLabel_Group ##@*#CSS_PostData#*@##\">" +
	"<div class=\"InfoLabel Date\">" +
	"	<div class=\"InfoLabel__ICON_Container\">" +
	"		<div class=\"InfoLabel__IMG Date\"></div>" +
	"		</div>" +
	"	##@*#FeedDate#*@##" +
	"</div>" +
	"<div class=\"InfoLabel Tags\">" +
	"	<div class=\"InfoLabel__ICON_Container\">" +
	"		<div class=\"InfoLabel__IMG Tags\"></div>" +
	"	</div>" +
	"	##@*#FeedTags#*@##" +
	"</div>" +
	"</div>" +
	"<h3 class=\"marquee\">##@*#Title#*@##</h3>" +
	"<div class=\"SubTopic_Description\">##@*#Content#*@##</div>" +
	"</div>";
	// --------------------------------------------------------------------------------------------------------------------------------------------|/\|---
	
	HTMLString = HTMLString.replace( new RegExp( "##@\\*#Section#\\*@##", "g" ), waw_Section.config.ID );
	HTMLString = HTMLString.replace( "##@*#Section_CSS#*@##", section__CSS_Tag );
	if ( searchResult == true) {
		HTMLString = HTMLString.replace( "##@*#CSS_IMG#*@##", "searchResult" );
		HTMLString = HTMLString.replace( "##@*#CSS_PostData#*@##", "searchResultData" );
	} else {
		HTMLString = HTMLString.replace( "##@*#CSS_IMG#*@##", "blogPost" );
		HTMLString = HTMLString.replace( "##@*#CSS_PostData#*@##", "postData" );
	}
	
	// Delete previous contents ------------------------------------------------------------------------------------|\/|---
	jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs  +
			"." + section__CSS_Tag +
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Body_Content  + 
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Topic_Thumbnails__Grid_Container ).html("");
	// -------------------------------------------------------------------------------------------------------------|/\|---
	
	// Define feedsResult -----------------------------------------------------|\/|---
	var feedsResult = "";
	
	if ( feedsObject !== undefined ) {
		feedsResult = feedsObject;
	} else {
		feedsResult = waw_Section.config.feedsObject.config.feedsResult;
	}
	// ------------------------------------------------------------------------|/\|---
	
	// Process each feed ------------------------------------------------------------------------------------------------------------------|\/|---
	for (var int = 0; int < feedsResult.entries.length; int++) {
		
		var feed_Entry = feedsResult.entries[int];
		
		var HTMLString_Entry = HTMLString.toString();
		
		HTMLString_Entry = HTMLString_Entry.replace( "##@*#FeedLink#*@##", feed_Entry.link );
		HTMLString_Entry = HTMLString_Entry.replace( "##@*#Title#*@##", feed_Entry.title );
		HTMLString_Entry = HTMLString_Entry.replace( "##@*#Content#*@##", feed_Entry.contentSnippet );
		
		var feed_Date_Formatted = "";
		if ( feed_Entry.publishedDate !== undefined) {
			var feed_Date = new Date(feed_Entry.publishedDate);
			feed_Date_Formatted = feed_Date.getFullYear() + "/" + feed_Date.getMonth() + "/" + feed_Date.getDay();
		}
		HTMLString_Entry = HTMLString_Entry.replace( "##@*#FeedDate#*@##", feed_Date_Formatted );
		
		var feed_Tags = "";
		if ( feed_Entry.categories !== undefined ) {
			feed_Tags = feed_Entry.categories.join(", ");	
		}
		HTMLString_Entry = HTMLString_Entry.replace( "##@*#FeedTags#*@##", feed_Tags );
		
		jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs  +
				"." + section__CSS_Tag +
				" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Body_Content  + 
				" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Topic_Thumbnails__Grid_Container ).append( HTMLString_Entry );
	}
	// ------------------------------------------------------------------------------------------------------------------------------------|/\|---
	
	// Initialize Marquee FX ------------------------------------------------------------------------------------|\/|---
	jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs  +
			"." + section__CSS_Tag +
			' .marquee').marquee({
		 //speed in milliseconds of the marquee
	    duration: 15000,
	    //gap in pixels between the tickers
	    gap: 50,
	    //time in milliseconds before the marquee will start animating
	    delayBeforeStart: 0,
	    //'left' or 'right'
	    direction: 'left',
	    //true or false - should the marquee be duplicated to show an effect of continues flow
	    duplicated: true
	});
	// ----------------------------------------------------------------------------------------------------------|/\|---
	
	// SubTopic_Thumbnail links --------------------------------------------------------------------------------|\/|---
	jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs +
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Topic_Thumbnail__Container + 
			"." + "SubTopic" ).on("click", 
			null, wawW_MainSite_UI, function(event) {
		
		var wawW_MainSite_event = new WAWw_MainSite__Event();
		wawW_MainSite_event.config.event = event;
		wawW_MainSite_event.eventType = WAWw_MainSite__UI__CONSTANTS.events.EVENT__SubTopicBlog_Thumbnail__Link;
		wawW_MainSite_event.config.event_DATA = "";
		wawW_MainSite_event.eventMessage = "SubTopicBlog Thumbnail clicked";
		
		wawW_MainSite_UI.config.event_Driver.notifyEvent( wawW_MainSite_event, null, wawW_MainSite_UI );
		
	});
	// ---------------------------------------------------------------------------------------------------------|/\|---
	
};

/**
 * Method for manage event {EVENT__TopicBlog_ToolbarButton__Link}
 * @param event
 * @param params
 */
WAWw_MainSite__UI.prototype.manageEvent__TopicBlog_ToolbarButton__Link = function( event, params ) {
	
	var topic = jQuery( params.config.event.currentTarget ).closest( 
			"." + WAWw_MainSite__UI__CONSTANTS.css_classes.main_Content__Info ).attr( "topic" );
	var buttonAction = jQuery( params.config.event.currentTarget ).attr( "buttonAction" );
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
		console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
		return;
	}
	
	/** @type WAWw_MainSite__Feeds */
	var feedsObject = waw_Section.config.feedsObject;
	
	switch ( buttonAction ) {
	
		case "showRSS":
			jQuery( params.config.event.currentTarget ).closest( 
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs ).find(
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Options_Content )
					.slideUp( 457 );
			
			jQuery( params.config.event.currentTarget ).closest( 
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs ).find(
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Topic_Thumbnails__Grid_Container )
					.removeClass( "Mini" );
			
			this.paintBlogResults( waw_Section );
			
			jQuery( params.config.event.currentTarget ).closest( 
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs ).find(
							" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Body_Content +	
							" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Options_Content +
							" input" + 
							".searchInput" ).val("");
			
			feedsObject.config.search_Keys = "";
			
			break;
	
		case "settings":
			jQuery( params.config.event.currentTarget ).closest( 
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs ).find(
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Options_Content )
					.slideToggle( 457 );
			
			jQuery( params.config.event.currentTarget ).closest( 
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs ).find(
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Topic_Thumbnails__Grid_Container )
					.toggleClass( "Mini" );

			break;
			
		case "close":
			jQuery( params.config.event.currentTarget ).closest( 
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs ).find(
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Options_Content )
					.slideUp( 457 );
			
			jQuery( params.config.event.currentTarget ).closest( 
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs ).find(
					"." + WAWw_MainSite__UI__CONSTANTS.css_classes.Topic_Thumbnails__Grid_Container )
					.removeClass( "Mini" );
			break;
			
		case "blogLink":
			try {
//				window.location = waw_Section.config.properties.get__Property( synergyType ).value;
				window.open( waw_Section.config.properties.get__Property( "blog" ).value );
			} catch (e) {
				// TODO: handle exception
				console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
				return;
			}
			break;
	
		default:
			break;
	}

};

/**
 * Method for manage event {showBlogEntries}
 * @param waw_Section
 */
WAWw_MainSite__UI.prototype.manageEvent__showBlogEntries = function( waw_Section, event, params ) {
	
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
	
	
	jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs  + 
			"." + section__CSS_Tag ).slideToggle( 673 );
	
	jQuery('html, body').animate({
		  scrollTop: jQuery("." + WAWw_MainSite__UI__CONSTANTS.css_classes.big_Header ).offset().top //- 40
		}, 410);
	
	jQuery( params.config.event.currentTarget ).toggleClass( "selected" );
	
	
	if ( waw_Section.config.feedsObject == undefined ) {	// Create new Feeds object
		WAWw_MainSite__Feeds__STATIC.initialize_Feeds( this, waw_Section );
	}
	
};

/**
 * @param event
 * @param params
 */
WAWw_MainSite__UI.prototype.manageEvent__BlogsFeeds_Loaded = function( event, params ) {
	
	var section_ID = params.config.event_DATA.Section;
	/** @type WAWw_MainSite */
	var waw_Object = WAWw_Mainsite__Static.wawW_MainSite__Object;
	/** @type WAW_Core_Site */
	var waw_Site = waw_Object.config.waw_Site;
	var waw_Section = false;
	
	
	try {
		waw_Section = waw_Site.find_Section__byIDTag( section_ID );
		
		if ( !waw_Section ) {
			throw new WAW_Core_Exception( "Section not found." );
		}
		
	} catch (e) {
		console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
		return;
	}

	waw_Section.config.feedsObject.config.feedsResult = params.config.event_DATA.feed;
	this.paintBlogResults( waw_Section );
	
};

/**
 * @param event
 * @param params
 */
WAWw_MainSite__UI.prototype.manageEvent__SubTopicBlog_Thumbnail__Link = function( event, params ) {
	
	var topic = jQuery( params.config.event.currentTarget ).attr( "topic" );
	var feedLink = jQuery( params.config.event.currentTarget ).attr( "feedlink" );

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
	
	window.open( feedLink );
	
};

WAWw_MainSite__UI.prototype.manageEvent__BlogsFeeds_Error = function( event, params ) {
	console_Log( "manageEvent__BlogsFeeds_Error." );	// TODO WAWw_MainSite REMOVE DEBUG LOG
	console_Log( params );	// TODO WAWw_MainSite REMOVE DEBUG LOG
};



WAWw_MainSite__UI.prototype.manageEvent__TopicBlog_Search__Update = function( event, params ) {
	
	var topic = "";
	if ( params.config.event_DATA.Section !== undefined ) {
		topic = params.config.event_DATA.Section;
	} else {
		topic = jQuery( params.config.event.currentTarget ).closest( 
				"." + WAWw_MainSite__UI__CONSTANTS.css_classes.main_Content__Info ).attr( "topic" );
	}
	
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
		console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
		return;
	}
	
	/** @type WAWw_MainSite__Feeds */
	var feedsObject = waw_Section.config.feedsObject;
	
	if ( params.config.event.currentTarget !== undefined ) {
		feedsObject.config.search_Keys = jQuery( params.config.event.currentTarget ).val();
	}
	var searchKeys = feedsObject.config.search_Keys;
	var feed_Url = waw_Section.config.properties.get__Property( WAWw_MainSite__CONSTANTS.properties.Property__Blog ).value;
	var search_Labels = jQuery( feedsObject.config.Labels.TokenField ).tokenfield( 'getTokens', false );
	
	for ( var indexLabel = 0; indexLabel < search_Labels.length; indexLabel++ ) {
		searchKeys = searchKeys + " " + search_Labels[ indexLabel ].value;
	}
	
	WAWw_MainSite__Feeds__STATIC.searchFeeds( feed_Url, searchKeys, waw_Section.config.feedsObject );
	
};

/**
 * @param event
 * @param params
 */
WAWw_MainSite__UI.prototype.manageEvent__BlogsFeeds_Search_Loaded = function( event, params ) {
	
	var section_ID = params.config.event_DATA.Section;
	
	/** @type WAWw_MainSite */
	var waw_Object = WAWw_Mainsite__Static.wawW_MainSite__Object;
	
	/** @type WAW_Core_Site */
	var waw_Site = waw_Object.config.waw_Site;
	
	var waw_Section = false;
	
	try {
		waw_Section = waw_Site.find_Section__byIDTag( section_ID );
		
		if ( !waw_Section ) {
			throw new WAW_Core_Exception( "Section not found." );
		}
		
	} catch (e) {
		console_Log( e );	// TODO WAWw_MainSite REMOVE DEBUG LOG
		return;
	}

	waw_Section.config.feedsObject.config.search_Result = params.config.event_DATA;
	this.paintBlogResults( waw_Section, waw_Section.config.feedsObject.config.search_Result, true );
	
};

var WAWw_MainSite__Feeds__CONSTANTS = {};
WAWw_MainSite__Feeds__CONSTANTS.events = {
		"EVENT__Feeds__Loaded" : "Feeds__Loaded",
		"EVENT__Feeds_Search__Loaded" : "Feeds_Search__Loaded",
		"EVENT__Feeds__ERROR" : "Feeds__ERROR"
};


/**
 * WAWw_MainSite__Feeds configuration
 */
WAWw_MainSite__Feeds.prototype.config = {
	"event_Driver" : null,
	"feeds_Object" : null,
	"search_Keys" : "",
	"search_Result" : null
};


WAWw_MainSite__Feeds.prototype.config.Labels = {};
WAWw_MainSite__Feeds.prototype.config.Labels.TokenField = null;
WAWw_MainSite__Feeds.prototype.config.Labels.all_Labels = null;
WAWw_MainSite__Feeds.prototype.config.Labels.availableLabels = null;
WAWw_MainSite__Feeds.prototype.config.Labels.selectedLabels = null;


WAWw_MainSite__Feeds.prototype.initialize = function() {
	
	// Initialize self configuration
	var wawW_MainSite_Feeds = this;
	wawW_MainSite_Feeds.config = deepCopy( this.config );
	
	
	// Initialize event driver ------------------------------------------|\/|---
	wawW_MainSite_Feeds.config.event_Driver = new Event_Driver();
	wawW_MainSite_Feeds.config.event_Driver.delta_Trigger = 215;
	// ------------------------------------------------------------------|/\|---
}


WAWw_MainSite__Feeds.prototype.loadFeed = function( feedURL ) {
	WAWw_MainSite__Feeds__STATIC.loadFeed( feedURL, this );
};


function WAWw_MainSite__Feeds() {
	
}


var WAWw_MainSite__Feeds__STATIC = {};

/**
 * @param {String} feedURL
 * @param {WAWw_MainSite__Feeds} waw_Feeds
 */
WAWw_MainSite__Feeds__STATIC.loadFeed = function( feedURL, waw_Feeds ) {
	
	
	waw_Feeds.config.feeds_Object = new google.feeds.Feed( feedURL );
	waw_Feeds.config.feeds_Object.setNumEntries( 10 );
	
	waw_Feeds.config.feeds_Object.load(function(result) {
   
      if (!result.error) {
    	  
//        var container = document.getElementById("feed");
//        for (var i = 0; i < result.feed.entries.length; i++) {
//          var entry = result.feed.entries[i];
//          var div = document.createElement("div");
//          div.appendChild(document.createTextNode(entry.title));
//          container.appendChild(div);
//        }
        
		var wawW_Feeds_event = new WAWw_MainSite__Event();
		wawW_Feeds_event.config.event = null;
		wawW_Feeds_event.eventType = WAWw_MainSite__Feeds__CONSTANTS.events.EVENT__Feeds__Loaded;
		wawW_Feeds_event.config.event_DATA = result;
		wawW_Feeds_event.eventMessage = "Feeds loaded";
		
		waw_Feeds.config.event_Driver.notifyEvent( wawW_Feeds_event, null, waw_Feeds );
        
        
      } else {
  		var wawW_Feeds_event = new WAWw_MainSite__Event();
		wawW_Feeds_event.config.event = null;
		wawW_Feeds_event.eventType = WAWw_MainSite__Feeds__CONSTANTS.events.EVENT__Feeds__ERROR;
		wawW_Feeds_event.config.event_DATA = result;
		wawW_Feeds_event.eventMessage = "Feeds Error";
		
		waw_Feeds.config.event_Driver.notifyEvent( wawW_Feeds_event, null, waw_Feeds );
      }
    });
};


/**
 * @param {String} feedURL
 * @param {String} searchKeys
 * 
 * @param {WAWw_MainSite__Feeds} waw_Feeds
 */
WAWw_MainSite__Feeds__STATIC.searchFeeds = function( feedURL, searchKeys, waw_Feeds ) {
	
//	waw_Feeds.config.feeds_Object = new google.feeds.Feed( feedURL );
//	waw_Feeds.config.feeds_Object.setNumEntries( 10 );
	
	//   google.feeds.findFeeds(query, findDone);
	// site:cnn.com president
	// findFeeds(query, findDone);
	
	var searchQuery = "site:" + feedURL + " " + searchKeys;
	
	google.feeds.findFeeds( searchQuery, function( result ) {
   
      if (!result.error) {
    	  
//        var container = document.getElementById("feed");
//        for (var i = 0; i < result.feed.entries.length; i++) {
//          var entry = result.feed.entries[i];
//          var div = document.createElement("div");
//          div.appendChild(document.createTextNode(entry.title));
//          container.appendChild(div);
//        }
        
		var wawW_Feeds_event = new WAWw_MainSite__Event();
		wawW_Feeds_event.config.event = null;
		wawW_Feeds_event.eventType = WAWw_MainSite__Feeds__CONSTANTS.events.EVENT__Feeds_Search__Loaded;
		wawW_Feeds_event.config.event_DATA = result;
		wawW_Feeds_event.eventMessage = "Feeds loaded";
		
		waw_Feeds.config.event_Driver.notifyEvent( wawW_Feeds_event, null, waw_Feeds );
        
        
      } else {
  		var wawW_Feeds_event = new WAWw_MainSite__Event();
		wawW_Feeds_event.config.event = null;
		wawW_Feeds_event.eventType = WAWw_MainSite__Feeds__CONSTANTS.events.EVENT__Feeds__ERROR;
		wawW_Feeds_event.config.event_DATA = result;
		wawW_Feeds_event.eventMessage = "Feeds Error";
		
		waw_Feeds.config.event_Driver.notifyEvent( wawW_Feeds_event, null, waw_Feeds );
      }
    });
	
};

/**
 * @param {WAWw_MainSite__UI} wawW_MainSite_UI
 * @param {WAW_Core_Section} wawSection
 */
WAWw_MainSite__Feeds__STATIC.initialize_Feeds = function( wawW_MainSite_UI, wawSection ) {

	// Create new Feeds object
	
	wawSection.config.feedsObject = new WAWw_MainSite__Feeds();
	wawSection.config.feedsObject.initialize();
	
	// Map event {EVENT__Feeds__Loaded) ------------------------------------------------------------------|\/|---
	jQuery( wawSection.config.feedsObject ).on(
			WAWw_MainSite__Feeds__CONSTANTS.events.EVENT__Feeds__Loaded,
		null,
		wawSection.config.feedsObject,
		function(event, params) {
			event.preventDefault();
			event.stopPropagation();
			
			try {
				params.config.event_DATA.Section = wawSection.config.ID;
				wawW_MainSite_UI.manageEvent__BlogsFeeds_Loaded( event, params );
			} catch (e) {
				console_Log( "Error managing event EVENT__Feeds__Loaded. " + e.message );	// TODO WAWw_MainSite REMOVE DEBUG LOG
			}

		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	// Map event {EVENT__Feeds__Loaded) ------------------------------------------------------------------|\/|---
	jQuery( wawSection.config.feedsObject ).on(
			WAWw_MainSite__Feeds__CONSTANTS.events.EVENT__Feeds_Search__Loaded,
		null,
		wawSection.config.feedsObject,
		function(event, params) {
			event.preventDefault();
			event.stopPropagation();
			
			try {
				params.config.event_DATA.Section = wawSection.config.ID;
				wawW_MainSite_UI.manageEvent__BlogsFeeds_Search_Loaded( event, params );
			} catch (e) {
				console_Log( "Error managing event EVENT__Feeds_Search__Loaded. " + e.message );	// TODO WAWw_MainSite REMOVE DEBUG LOG
			}

		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	// Map event {EVENT__Feeds__ERROR) ------------------------------------------------------------------|\/|---
	jQuery( wawSection.config.feedsObject ).on(
			WAWw_MainSite__Feeds__CONSTANTS.events.EVENT__Feeds__ERROR,
		null,
		wawSection.config.feedsObject,
		function(event, params) {
			event.preventDefault();
			event.stopPropagation();
			
			try {
				params.config.event_DATA.Section = wawSection.config.ID;
				wawW_MainSite_UI.manageEvent__BlogsFeeds_Error( event, params );
			} catch (e) {
				console_Log( "Error managing event EVENT__Feeds__ERROR. " + e.message );	// TODO WAWw_MainSite REMOVE DEBUG LOG
			}

		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	var section__CSS_Tag = wawSection.config.properties.get__Property( 
			WAWw_MainSite__CONSTANTS.properties.Property__CSS_Tag 
			).value;
	
	var section__blog_Tags = wawSection.config.properties.get__Property( 
			WAWw_MainSite__CONSTANTS.properties.Property__blog_Tags 
			).value;
	
	// TokenFields ------------------------------------------------------------------------------------------------------------------------------|\/|---
	wawSection.config.feedsObject.config.Labels.all_Labels = section__blog_Tags;
	wawSection.config.feedsObject.config.Labels.availableLabels = deepCopy( section__blog_Tags );
	wawSection.config.feedsObject.config.Labels.availableLabels.sort();
	
	wawSection.config.feedsObject.config.Labels.TokenField = jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.main_Content__Info +
			"." + section__CSS_Tag +
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs +
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Options_Content  +
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Option +
			".labels" +
			" input" ).tokenfield({
			  autocomplete: {
				    source: wawSection.config.feedsObject.config.Labels.availableLabels,
				    delay: 100
				  },
				  showAutocompleteOnFocus: true
			}).on( 'tokenfield:createdtoken', function (e) {

				var label_Index = wawSection.config.feedsObject.config.Labels.availableLabels.indexOf( e.attrs.value );
				
				if ( label_Index !== -1 ) {
					wawSection.config.feedsObject.config.Labels.availableLabels.splice( label_Index, 1 );
					jQuery( wawSection.config.feedsObject.config.Labels.TokenField ).data('bs.tokenfield').$input.autocomplete(
							{ source: wawSection.config.feedsObject.config.Labels.availableLabels });
				}
				
				var wawW_MainSite_event = new WAWw_MainSite__Event();
				wawW_MainSite_event.config.event = "";
				wawW_MainSite_event.eventType = WAWw_MainSite__UI__CONSTANTS.events.EVENT__TopicBlog_Search__Update;
				wawW_MainSite_event.config.event_DATA = {
						"Section" : wawSection.config.ID
				}
				wawW_MainSite_event.eventMessage = "TopicBlog Search input update";
				
				wawW_MainSite_UI.config.event_Driver.notifyEvent( wawW_MainSite_event, null, wawW_MainSite_UI );

		  }).on( 'tokenfield:removedtoken', function (e) {
				
				var label_Index = wawSection.config.feedsObject.config.Labels.all_Labels.indexOf( e.attrs.value );
				
				if ( label_Index !== -1 ) {
					wawSection.config.feedsObject.config.Labels.availableLabels.push( e.attrs.value );
					wawSection.config.feedsObject.config.Labels.availableLabels.sort();
					jQuery( wawSection.config.feedsObject.config.Labels.TokenField ).data('bs.tokenfield').$input.autocomplete(
							{ source: wawSection.config.feedsObject.config.Labels.availableLabels });
				}
				
				var wawW_MainSite_event = new WAWw_MainSite__Event();
				wawW_MainSite_event.config.event = "";
				wawW_MainSite_event.eventType = WAWw_MainSite__UI__CONSTANTS.events.EVENT__TopicBlog_Search__Update;
				wawW_MainSite_event.config.event_DATA = {
						"Section" : wawSection.config.ID
				}
				wawW_MainSite_event.eventMessage = "TopicBlog Search input update";
				
				wawW_MainSite_UI.config.event_Driver.notifyEvent( wawW_MainSite_event, null, wawW_MainSite_UI );
				
		  });
	// ------------------------------------------------------------------------------------------------------------------------------------------|/\|---
	
	// Load Feeds --------------------------------------------------------------------|\/|---
	wawSection.config.feedsObject.loadFeed( 
			wawSection.config.properties.get__Property( 
					WAWw_MainSite__CONSTANTS.properties.Property__Blog_Feeds 
					).value
			);
	// -------------------------------------------------------------------------------|/\|---
	
//	waw_Section.config.feedsObject = new google.feeds.Feed(
//			waw_Section.config.properties.get__Property( WAWw_MainSite__CONSTANTS.properties.Property__Blog_Feeds ).value
//			);

};

/**
 * @param {WAWw_MainSite__UI} wawW_MainSite_UI
 */
WAWw_MainSite__Feeds__STATIC.map_DOM_Events = function( wawW_MainSite_UI ) {
	
	// TopicBlog Toolbar Buttons links --------------------------------------------------------------------------------|\/|---
	jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.main_Content__Info + 
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs + 
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Toolbar +
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Toolbar_Button ).on( "click", 
			null, wawW_MainSite_UI, function(event) {
		
		var wawW_MainSite_event = new WAWw_MainSite__Event();
		wawW_MainSite_event.config.event = event;
		wawW_MainSite_event.eventType = WAWw_MainSite__UI__CONSTANTS.events.EVENT__TopicBlog_ToolbarButton__Link;
		wawW_MainSite_event.config.event_DATA = "";
		wawW_MainSite_event.eventMessage = "TopicBlog Toolbar Button clicked";
		
		wawW_MainSite_UI.config.event_Driver.notifyEvent( wawW_MainSite_event, null, wawW_MainSite_UI );
		
	});
	// ----------------------------------------------------------------------------------------------------------------|/\|---
	
	// TopicBlog Search input update  ---------------------------------------------------------------------------------|\/|---
	jQuery( "." + WAWw_MainSite__UI__CONSTANTS.css_classes.main_Content__Info + 
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Main_Content__Info__Blogs +
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Body_Content +	
			" ." + WAWw_MainSite__UI__CONSTANTS.css_classes.Options_Content +
			" input" + 
			".searchInput" ).on( "keyup change", 
			null, wawW_MainSite_UI, function(event) {
		
		var wawW_MainSite_event = new WAWw_MainSite__Event();
		wawW_MainSite_event.config.event = event;
		wawW_MainSite_event.eventType = WAWw_MainSite__UI__CONSTANTS.events.EVENT__TopicBlog_Search__Update;
		wawW_MainSite_event.config.event_DATA = "";
		wawW_MainSite_event.eventMessage = "TopicBlog Search input update";
		
		wawW_MainSite_UI.config.event_Driver.notifyEvent( wawW_MainSite_event, null, wawW_MainSite_UI );
		
	});
	// ----------------------------------------------------------------------------------------------------------------|/\|---
	
};

/**
 * @param {WAWw_MainSite__UI} wawW_MainSite_UI
 */
WAWw_MainSite__Feeds__STATIC.map_CUSTOM_Events = function( wawW_MainSite_UI ) {
	
	// Map event {EVENT__SubTopicBlog_Thumbnail__Link) -----------------------------------------------------------|\/|---
	jQuery( wawW_MainSite_UI ).on(
			WAWw_MainSite__UI__CONSTANTS.events.EVENT__SubTopicBlog_Thumbnail__Link,
		null,
		wawW_MainSite_UI,
		function(event, params) {
			event.preventDefault();
			event.stopPropagation();
			
			try {
				wawW_MainSite_UI.manageEvent__SubTopicBlog_Thumbnail__Link( event, params );
			} catch (e) {
				console_Log( "Error managing event EVENT__SubTopicBlog_Thumbnail__Link. " + e.message );	// TODO WAWw_MainSite REMOVE DEBUG LOG
			}

		});
	// -------------------------------------------------------------------------------------------------------|/\|---
	
	// Map event {EVENT__TopicBlog_ToolbarButton__Link) -----------------------------------------------------------|\/|---
	jQuery( wawW_MainSite_UI ).on(
			WAWw_MainSite__UI__CONSTANTS.events.EVENT__TopicBlog_ToolbarButton__Link,
		null,
		wawW_MainSite_UI,
		function(event, params) {
			event.preventDefault();
			event.stopPropagation();
			
			try {
				wawW_MainSite_UI.manageEvent__TopicBlog_ToolbarButton__Link( event, params );
			} catch (e) {
				console_Log( "Error managing event EVENT__TopicBlog_ToolbarButton__Link. " + e.message );	// TODO WAWw_MainSite REMOVE DEBUG LOG
			}

		});
	// ------------------------------------------------------------------------------------------------------------|/\|---
	
	// Map event {EVENT__TopicBlog_Search__Update) ----------------------------------------------------------------|\/|---
	jQuery( wawW_MainSite_UI ).on(
			WAWw_MainSite__UI__CONSTANTS.events.EVENT__TopicBlog_Search__Update,
		null,
		wawW_MainSite_UI,
		function(event, params) {
			event.preventDefault();
			event.stopPropagation();
			
			try {
				wawW_MainSite_UI.manageEvent__TopicBlog_Search__Update( event, params );
			} catch (e) {
				console_Log( "Error managing event EVENT__TopicBlog_Search__Update. " + e.message );	// TODO WAWw_MainSite REMOVE DEBUG LOG
			}

		});
	// ------------------------------------------------------------------------------------------------------------|/\|---
	
};


