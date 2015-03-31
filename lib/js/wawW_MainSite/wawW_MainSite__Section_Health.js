/**
 * WAW Web MainSite Section Health (section__Health) 
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

WAWw_MainSite__CONSTANTS.sections.SECTION__Health = "Health";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Health__Physical_Layer = "Physical_Layer";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Health__Psychological_Layer = "Psychological_Layer";



WAWw_Mainsite__Static.section__Health = {
};

WAWw_Mainsite__Static.section__Health.getNew__Section_Health = function() {
	
	var waw_Section__Health = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SECTION__Health, 	// ID
			"Health", 	// Name
			"Health" );	// ID_Tag
	
	waw_Section__Health.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-health.blogspot.com/p/blog-page_9.html"),	// Property
			"moreInfo" );	// Property ID
	
	waw_Section__Health.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-health.blogspot.com/"),
			"blog" );
	
	waw_Section__Health.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-health.blogspot.com/feeds/posts/default"),
			"blog_Feeds" );
	
	waw_Section__Health.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", 
					[ "printer", "brain", "cell", "DNA", "education", "health", "information", "mental", "molecule", "psychology", "science",
					  "waw_Layer__physical", "waw_Layer__psychological" ]),
			"blog_Tags" );
	
	waw_Section__Health.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "section__Health"),
			"CSS_Tag" );
	
	var waw_SubSection__Health__Physical_Layer = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Health__Physical_Layer, 	// ID
			"Physical Layer", 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Health__Physical_Layer );	// ID_Tag
	
	waw_SubSection__Health__Physical_Layer.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-health.blogspot.com.es/p/what-about-health-phisical.html"),
			"moreInfo" );
	
	waw_Section__Health.config.subsectionsList.add__Section(
			waw_SubSection__Health__Physical_Layer,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Health__Physical_Layer );
	
	var waw_SubSection__Health__Psychological_Layer = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Health__Psychological_Layer, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Health__Psychological_Layer, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Health__Psychological_Layer );	// ID_Tag
	
	waw_SubSection__Health__Psychological_Layer.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-health.blogspot.com.es/p/what-about-helath-p.html"),
			"moreInfo" );
	
	waw_Section__Health.config.subsectionsList.add__Section(
			waw_SubSection__Health__Psychological_Layer,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Health__Psychological_Layer );
	
	return waw_Section__Health;
	
};