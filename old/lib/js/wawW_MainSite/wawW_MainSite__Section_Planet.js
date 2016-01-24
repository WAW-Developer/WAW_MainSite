/**
 * WAW Web MainSite Section Planet (section__Planet) 
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

WAWw_MainSite__CONSTANTS.sections.SECTION__Planet = "Planet";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Planet_Formation = "Planet_Formation";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Current_Home = "Current_Home";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Water = "Water";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__MoleculesOfLife = "MoleculesOfLife";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Cell = "Cell";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Bacteria = "Bacteria";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Plants = "Plants";
WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Animals = "Animals";

WAWw_Mainsite__Static.section__Planet = {
};

WAWw_Mainsite__Static.section__Planet.getNew__Section_Planet = function() {
	
	var waw_Section__Planet = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SECTION__Planet, 	// ID
			"Planet", 	// Name
			"Planet" );	// ID_Tag
	
	waw_Section__Planet.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-planet.blogspot.com/p/what-about-world.html"),	// Property
			"moreInfo" );	// Property ID
	
	waw_Section__Planet.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-planet.blogspot.com/"),
			"blog" );
	
	waw_Section__Planet.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-planet.blogspot.com/feeds/posts/default"),
			"blog_Feeds" );
	
	waw_Section__Planet.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", 
					[ "adaptation", "animals", "ARN", "bacteria", "biology", "chromosome", "communication", "DNA", "earth", "evolution",
					  "garbage", "humans", "intelligence", "Mars", "microbes", "oxygen", "plants", "plastic", "pollution", "research", "robot",
					  "space", "virus", "water" ]), 
					  "blog_Tags" );
	
	waw_Section__Planet.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "section__Planet"),
			"CSS_Tag" );
	
	var waw_SubSection__Planet__Planet_Formation = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Planet_Formation, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Planet_Formation, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Planet_Formation );	// ID_Tag
	
	waw_SubSection__Planet__Planet_Formation.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-planet.blogspot.com/p/what-about-planet-formation.html"),
			"moreInfo" );
	
	waw_Section__Planet.config.subsectionsList.add__Section(
			waw_SubSection__Planet__Planet_Formation,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Planet_Formation );
	
	var waw_SubSection__Planet__Current_Home = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Current_Home, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Current_Home, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Current_Home );	// ID_Tag
	
	waw_SubSection__Planet__Current_Home.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-planet.blogspot.com/p/what-about.html"),
			"moreInfo" );
	
	waw_Section__Planet.config.subsectionsList.add__Section(
			waw_SubSection__Planet__Current_Home,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Current_Home );
	
	var waw_SubSection__Planet__Water = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Water, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Water, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Water );	// ID_Tag
	
	waw_SubSection__Planet__Water.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-planet.blogspot.com/p/what-about-water.html"),
			"moreInfo" );
	
	waw_Section__Planet.config.subsectionsList.add__Section(
			waw_SubSection__Planet__Water,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Water );
	
	var waw_SubSection__Planet__MoleculesOfLife = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__MoleculesOfLife, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__MoleculesOfLife, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__MoleculesOfLife );	// ID_Tag
	
	waw_SubSection__Planet__MoleculesOfLife.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-planet.blogspot.com/p/what-about-molecules-of-life.html"),
			"moreInfo" );
	
	waw_Section__Planet.config.subsectionsList.add__Section(
			waw_SubSection__Planet__MoleculesOfLife,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__MoleculesOfLife );
	
	var waw_SubSection__Planet__Cell = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Cell, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Cell, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Cell );	// ID_Tag
	
	waw_SubSection__Planet__Cell.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-planet.blogspot.com/p/what-about-cell.html"),
			"moreInfo" );
	
	waw_Section__Planet.config.subsectionsList.add__Section(
			waw_SubSection__Planet__Cell,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Cell );
	
	var waw_SubSection__Planet__Bacteria = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Bacteria, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Bacteria, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Bacteria );	// ID_Tag
	
	waw_SubSection__Planet__Bacteria.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-planet.blogspot.com/p/what-about-bacteria.html"),
			"moreInfo" );
	
	waw_Section__Planet.config.subsectionsList.add__Section(
			waw_SubSection__Planet__Bacteria,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Bacteria );
	
	var waw_SubSection__Planet__Plants = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Plants, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Plants, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Plants );	// ID_Tag
	
	waw_SubSection__Planet__Plants.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-planet.blogspot.com/p/what-about-plants.html"),
			"moreInfo" );
	
	waw_Section__Planet.config.subsectionsList.add__Section(
			waw_SubSection__Planet__Plants,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Plants );
	
	var waw_SubSection__Planet__Animals = WAW_Core_STATIC.getNew__WAW_Core_Section(
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Animals, 	// ID
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Animals, 	// Name
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Animals );	// ID_Tag
	
	waw_SubSection__Planet__Animals.config.properties.add__Property(
			WAW_Core_STATIC.Properties.getNew__WAW_Core_Property("", "http://wabout-planet.blogspot.com/p/what-about-animals.html"),
			"moreInfo" );
	
	waw_Section__Planet.config.subsectionsList.add__Section(
			waw_SubSection__Planet__Animals,
			WAWw_MainSite__CONSTANTS.sections.SubSECTION__Planet__Animals );
	
	
	return waw_Section__Planet;
	
};