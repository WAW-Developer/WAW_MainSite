/**
 * WAW Web MainSite Section Information (section__Information) 
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

/*globals WAWw_MainSite__CONSTANTS WAWw_Mainsite__Static WAW_Core_STATIC*/
WAWw_MainSite__CONSTANTS.sections.SECTION__Information = "Information";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Language = "Language";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Messages = "Messages";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Communication = "Communication";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Education = "Education";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Knowledge = "Knowledge";


WAWw_Mainsite__Static.section__Information = {
};


WAWw_Mainsite__Static.section__Information.getNew__Section_Information = function() {
	
	var waw_Section__Information = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SECTION__Information, 	// ID
			"Information", 	// Name
			"Information" );	// ID_Tag
	
	waw_Section__Information.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-information.blogspot.com/p/what-about-information.html"),	// Property
			"moreInfo" );	// Property ID
	
	waw_Section__Information.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-information.blogspot.com/"),
			"blog" );
	
	waw_Section__Information.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-information.blogspot.com/feeds/posts/default"),
			"blog_Feeds" );
	
	waw_Section__Information.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", 
					[ "3D printer", "brain", "computers", "DNA", "documents", "Internet", "nanotechnology", "program", "language", "proteins",
					  "science", "security", "Silicon Valley", "smartphone", "space", "standard" ]), 
			"blog_Tags" );
	
	waw_Section__Information.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "section__Information"),
			"CSS_Tag" );
	
	var waw_SubSection__Information__Language = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Language, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Language, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Language );	// ID_Tag
	
	waw_SubSection__Information__Language.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-information.blogspot.com/p/what-about-language.html"),
			"moreInfo" );
	
	waw_Section__Information.config.subsectionsList.add__Section(
			waw_SubSection__Information__Language,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Language );
	
	var waw_SubSection__Information__Messages = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Messages, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Messages, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Messages );	// ID_Tag
	
	waw_SubSection__Information__Messages.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-information.blogspot.com/p/what-about-messages.html"),
			"moreInfo" );
	
	waw_Section__Information.config.subsectionsList.add__Section(
			waw_SubSection__Information__Messages,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Messages );
	
	var waw_SubSection__Information__Communication = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Communication, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Communication, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Communication );	// ID_Tag
	
	waw_SubSection__Information__Communication.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-information.blogspot.com/p/what-about-communication.html"),
			"moreInfo" );
	
	waw_Section__Information.config.subsectionsList.add__Section(
			waw_SubSection__Information__Communication,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Communication );
	
	var waw_SubSection__Information__Education = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Education, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Education, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Education );	// ID_Tag
	
	waw_SubSection__Information__Education.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-information.blogspot.com/p/what-about-education.html"),
			"moreInfo" );
	
	waw_Section__Information.config.subsectionsList.add__Section(
			waw_SubSection__Information__Education,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Education );
	
	var waw_SubSection__Information__Knowledge = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Knowledge, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Knowledge, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Knowledge );	// ID_Tag
	
	waw_SubSection__Information__Knowledge.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-information.blogspot.com/p/what-about-knowledge.html"),
			"moreInfo" );
	
	waw_Section__Information.config.subsectionsList.add__Section(
			waw_SubSection__Information__Knowledge,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Information__Knowledge );
	
	return waw_Section__Information;
	
};