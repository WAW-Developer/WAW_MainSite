/**
 * WAW Web MainSite Section Justice (WAWw_Mainsite__Static.section__Justice) 
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

WAWw_MainSite__CONSTANTS.sections.SECTION__Justice = "Justice";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__HumanRights = "HumanRights";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__SocialGroups = "SocialGroups";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Family = "Family";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Community = "Community";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Law = "Law";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Society = "Society";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Defense = "Defense";

WAWw_Mainsite__Static.section__Justice = {
};

WAWw_Mainsite__Static.section__Justice.getNew__Section_Justice = function() {
	
	var waw_Section__Justice = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SECTION__Justice, 	// ID
			"Justice", 	// Name
			"Justice" );	// ID_Tag
	
	waw_Section__Justice.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-justice.blogspot.com/p/what-about-justice.html"),	// Property
			"moreInfo" );	// Property ID
	
	waw_Section__Justice.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-justice.blogspot.com/"),
			"blog" );
	
	waw_Section__Justice.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-justice.blogspot.com/feeds/posts/default"),
			"blog_Feeds" );
	
	waw_Section__Justice.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", 
					[ "bacteria", "economy", "health", "human", "justice", "research", "rights", "water", "world", "hunger" ]),
			"blog_Tags" );

	waw_Section__Justice.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "section__Justice"),
			"CSS_Tag" );
	
	var waw_SubSection__Justice__HumanRights = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__HumanRights, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__HumanRights, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__HumanRights );	// ID_Tag
	
	waw_SubSection__Justice__HumanRights.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-health.blogspot.com/p/what-about-health-phisical.html"),
			"moreInfo" );
	
	waw_Section__Justice.config.subsectionsList.add__Section(
			waw_SubSection__Justice__HumanRights,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__HumanRights );
	
	var waw_SubSection__Justice__SocialGroups = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__SocialGroups, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__SocialGroups, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__SocialGroups );	// ID_Tag
	
	waw_SubSection__Justice__SocialGroups.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-justice.blogspot.com/p/what-about-social-groups.html"),
			"moreInfo" );
	
	waw_Section__Justice.config.subsectionsList.add__Section(
			waw_SubSection__Justice__SocialGroups,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__SocialGroups );
	
	var waw_SubSection__Justice__Family = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Family, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Family, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Family );	// ID_Tag
	
	waw_SubSection__Justice__Family.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-justice.blogspot.com/p/what-about-family.html"),
			"moreInfo" );
	
	waw_Section__Justice.config.subsectionsList.add__Section(
			waw_SubSection__Justice__Family,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Family );
	
	var waw_SubSection__Justice__Community = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Community, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Community, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Community );	// ID_Tag
	
	waw_SubSection__Justice__Community.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-justice.blogspot.com/p/what-about-community.html"),
			"moreInfo" );
	
	waw_Section__Justice.config.subsectionsList.add__Section(
			waw_SubSection__Justice__Community,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Community );
	
	var waw_SubSection__Justice__Law = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Law, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Law, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Law );	// ID_Tag
	
	waw_SubSection__Justice__Law.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-justice.blogspot.com/p/what-about-law.html"),
			"moreInfo" );
	
	waw_Section__Justice.config.subsectionsList.add__Section(
			waw_SubSection__Justice__Law,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Law );
	
	var waw_SubSection__Justice__Society = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Society, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Society, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Society );	// ID_Tag
	
	waw_SubSection__Justice__Society.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-justice.blogspot.com/p/what-about-society.html"),
			"moreInfo" );
	
	waw_Section__Justice.config.subsectionsList.add__Section(
			waw_SubSection__Justice__Society,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Society );
	
	var waw_SubSection__Justice__Defense = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Defense, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Defense, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Defense );	// ID_Tag
	
	waw_SubSection__Justice__Defense.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-justice.blogspot.com/p/what-about-defense.html"),
			"moreInfo" );
	
	waw_Section__Justice.config.subsectionsList.add__Section(
			waw_SubSection__Justice__Defense,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Justice__Defense );
	
	return waw_Section__Justice;
	
};