/**
 * WAW Web MainSite Section WAW (section__WAW) 
 * 
 * JavaScript library
 * 
 * @author Felipe Camacho Melero
 * 
 * {WhatAboutWorld}
 *  ** WAW 2015 **  
 */

/**
 * Static properties & methods
 */

WAWw_MainSite__CONSTANTS.sections.SECTION__WAW = "WAW";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__WAW__Why = "Why";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__WAW__Objective = "Objective";



WAWw_Mainsite__Static.section__WAW = {
};

WAWw_Mainsite__Static.section__WAW.getNew__Section_WAW = function() {
	
	var waw_Section__WAW = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SECTION__WAW, 	// ID
			"WAW", 	// Name
			"WAW" );	// ID_Tag
	
//	waw_Section__WAW.config.properties.add__Property(
//			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-health.blogspot.com/p/blog-page_9.html"),	// Property
//			"moreInfo" );	// Property ID
	
//	waw_Section__WAW.config.properties.add__Property(
//			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-health.blogspot.com/"),
//			"blog" );
	
	var waw_SubSection__WAW__Why = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__WAW__Why, 	// ID
			"Why?", 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__WAW__Why );	// ID_Tag
	
//	waw_SubSection__WAW__Why.config.properties.add__Property(
//			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-health.blogspot.com.es/p/what-about-health-phisical.html"),
//			"moreInfo" );
	
	waw_Section__WAW.config.subsectionsList.add__Section(
			waw_SubSection__WAW__Why,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__WAW__Why );
	
	var waw_SubSection__WAW__Objective = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__WAW__Objective, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__WAW__Objective, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__WAW__Objective );	// ID_Tag
	
//	waw_SubSection__WAW__Objective.config.properties.add__Property(
//			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-health.blogspot.com.es/p/what-about-helath-p.html"),
//			"moreInfo" );
	
	waw_Section__WAW.config.subsectionsList.add__Section(
			waw_SubSection__WAW__Objective,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__WAW__Objective );
	
	return waw_Section__WAW;
	
};