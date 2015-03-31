/**
 * WAW Web MainSite Section Energy (section__Energy) 
 * 
 * JavaScript library
 * 
 * @author Felipe Camacho Melero
 * 
 * {WhatAboutWorld}
 *  ** WAW 2015 **  
 */

/*globals WAWw_MainSite__CONSTANTS WAWw_Mainsite__Static WAW_Core_STATIC*/

/**
 * Static properties & methods
 */

WAWw_MainSite__CONSTANTS.sections.SECTION__Energy = "Energy";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Acquire = "Acquire";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Storage = "Storage";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Use = "Use";


WAWw_Mainsite__Static.section__Energy = {
};


WAWw_Mainsite__Static.section__Energy.getNew__Section_Energy = function() {
	
	var waw_Section__Energy = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SECTION__Energy, 	// ID
			"Energy", 	// Name
			"Energy" );	// ID_Tag
	
	waw_Section__Energy.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-energy.blogspot.com/p/what-about-energy.html"),	// Property
			"moreInfo" );	// Property ID
	
	waw_Section__Energy.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-energy.blogspot.com/"),
			"blog" );
	
	waw_Section__Energy.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-energy.blogspot.com/feeds/posts/default"),
			"blog_Feeds" );
	
	waw_Section__Energy.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", 
					[ "air power", "architecture", "battery", "cell", "design", "Energy", "engineering", "fuel", "house", "microbes",
					  "oxygen", "renewable", "solar power" ]), 
			"blog_Tags" );
	
	waw_Section__Energy.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "section__Energy"),
			"CSS_Tag" );
	
	var waw_SubSection__Energy__Acquire = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Acquire, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Acquire, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Acquire );	// ID_Tag
	
	waw_SubSection__Energy__Acquire.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-energy.blogspot.com/p/what.html"),
			"moreInfo" );
	
	waw_Section__Energy.config.subsectionsList.add__Section(
			waw_SubSection__Energy__Acquire,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Acquire );
	
	var waw_SubSection__Energy__Storage = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Storage, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Storage, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Storage );	// ID_Tag
	
	waw_SubSection__Energy__Storage.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-energy.blogspot.com/p/what-about-store-energy.html"),
			"moreInfo" );
	
	waw_Section__Energy.config.subsectionsList.add__Section(
			waw_SubSection__Energy__Storage,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Storage );
	
	var waw_SubSection__Energy__Use = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Use, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Use, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Use );	// ID_Tag
	
	waw_SubSection__Energy__Use.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-energy.blogspot.com/p/what-about-use-energy.html"),
			"moreInfo" );
	
	waw_Section__Energy.config.subsectionsList.add__Section(
			waw_SubSection__Energy__Use,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Energy__Use );
	
	return waw_Section__Energy;
	
};