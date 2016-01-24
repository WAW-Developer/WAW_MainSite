/**
 * WAW Util Core JavaScript library
 *  ^^{Update in DEV mode}^^
 * 
 * Provides WAW Core Objects
 * 
 * @author Felipe Camacho Melero
 * 
 * @version 0.0.11b
 * 
 * @use WAW Util JavaScript library >= 0.0.2b
 * 
 */

WAW_Core_Property.prototype.type = "";
WAW_Core_Property.prototype.value = "";

function WAW_Core_Property() {
	
}

/**
 * @param {WAW_Core_Property} property
 * @param {String} id
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_PropertiesList.prototype.add__Property = function( property , id ) {
	WAW_Core_STATIC.Properties.add__Property_ToList( this, property, id );
};

/**
 * 
 * @param {WAW_Core_Property} property
 * @param {String} id
 * 
 * @returns {WAW_Core_Property}
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_PropertiesList.prototype.get__Property = function( id ) {
	return WAW_Core_STATIC.Properties.get__Property_fromList( this, id );
};

/**
 * 
 * @param {WAW_Core_Property} property
 * @param {String} id
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_PropertiesList.prototype.update__Property = function( property , id ) {
	WAW_Core_STATIC.Properties.update__Property_ofList( this, property, id ) ;
};

/**
 * @param {String} id
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_PropertiesList.prototype.delete__Property = function( id ) {
	WAW_Core_STATIC.Properties.delete__Property_fromList( this, id );
};


WAW_Core_PropertiesList.prototype.properties_ByID = {};


function WAW_Core_PropertiesList() {
	var waw_Core_PropertiesList = this;
	waw_Core_PropertiesList.properties_ByID = deepCopy( this.properties_ByID );
}

/**
 * @param {WAW_Core_Section} section
 * @param {String} id
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_SectionsList.prototype.add__Section = function( section , id ) {
	WAW_Core_STATIC.Sections.add_SectionTo_SectionList( this, section, id );
};

/**
 * @param {String} id
 * 
 * @returns {WAW_Core_Section}
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_SectionsList.prototype.get__Section = function( id ) {
	return WAW_Core_STATIC.Sections.get__Section_fromList( this, id );
};

/**
 * 
 * @param {WAW_Core_Section} section
 * @param {String} id
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_SectionsList.prototype.update__Section = function( section , id ) {
	WAW_Core_STATIC.Sections.update__Section_ofList( this, section, id );
};

/**
 * @param {String} id
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_SectionsList.prototype.delete__Section = function( id ) {
	WAW_Core_STATIC.Sections.delete__Section_fromList( this, id );
};

WAW_Core_SectionsList.prototype.sections_ByID = {};


function WAW_Core_SectionsList() {
	var waw_Core_SectionList = this;
	waw_Core_SectionList.sections_ByID = deepCopy( this.sections_ByID );
}



//var WAW_Core_STATIC;	// TODO WAW REMOVE DEBUG TRICK (¿?¿?¿?¿?¿?¿?¿?)


WAW_Core_STATIC.Properties = {};


/**
 * @param {String} type
 * @param {Object} value
 * @returns {WAW_Core_Property}
 */
WAW_Core_STATIC.Properties.getNew__WAW_Core_Property = function( type, value ) {
	
	wawCore__Property = new WAW_Core_Property();

	wawCore__Property.type = type;
	wawCore__Property.value = value;

	return wawCore__Property;
};

/**
 * @returns {WAW_Core_PropertiesList}
 */
WAW_Core_STATIC.Properties.getNew__WAW_Core_PropertiesList = function() {
	
	wawCore__PropertiesList = new WAW_Core_PropertiesList();

	return wawCore__PropertiesList;
};

/**
 * @param {WAW_Core_PropertiesList} propertiesList
 * @param {WAW_Core_Property} property
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_STATIC.Properties.add__Property_ToList = function( propertiesList, property , id ) {

	if (( propertiesList instanceof WAW_Core_PropertiesList ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_PropertiesList is required." );
	}
	
	if (( property instanceof WAW_Core_Property ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_Property is required." );
	}
	
	if ( id == null || id == "" ) {
		throw new WAW_Core_Exception( "ID is required." );
	}
	
	
	if ( propertiesList.properties_ByID[ id ] !== undefined ) {
		throw new WAW_Core_Exception( "ID is duplicated." );
	} else {
		propertiesList.properties_ByID[ id ] = property;
	} 

};

/**
 * @param {WAW_Core_PropertiesList} propertiesList
 * 
 * @returns {WAW_Core_Property}
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_STATIC.Properties.get__Property_fromList = function( propertiesList, id ) {

	if (( propertiesList instanceof WAW_Core_PropertiesList ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_PropertiesList is required." );
	}

	if ( id == null || id == "" ) {
		throw new WAW_Core_Exception( "ID is required." );
	}
	
	
	if ( propertiesList.properties_ByID[ id ] !== undefined ) {
		return propertiesList.properties_ByID[ id ];
	} else {
//		throw new WAW_Core_Exception( "ID not exist." );
		return null;
	} 

};

/**
 * @param {WAW_Core_PropertiesList} propertiesList
 * @param {WAW_Core_Property} property
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_STATIC.Properties.update__Property_ofList = function( propertiesList, property , id ) {

	if (( propertiesList instanceof WAW_Core_PropertiesList ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_PropertiesList is required." );
	}
	
	if (( property instanceof WAW_Core_Property ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_Property is required." );
	}
	
	if ( id == null || id == "" ) {
		throw new WAW_Core_Exception( "ID is required." );
	}
	
	
	if ( propertiesList.properties_ByID[ id ] !== undefined ) {
		propertiesList.properties_ByID[ id ] = property;
	} else {
		throw new WAW_Core_Exception( "ID not exist." );
	} 

};

/**
 * @param {WAW_Core_PropertiesList} propertiesList
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_STATIC.Properties.delete__Property_fromList = function( propertiesList, id ) {

	if (( propertiesList instanceof WAW_Core_PropertiesList ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_PropertiesList is required." );
	}

	if ( id == null || id == "" ) {
		throw new WAW_Core_Exception( "ID is required." );
	}
	
	
	if ( propertiesList.properties_ByID[ id ] !== undefined ) {
		delete propertiesList.properties_ByID[ id ];
	} else {
		throw new WAW_Core_Exception( "ID not exist." );
	} 

};



WAW_Core_STATIC.Sections = {};


WAW_Core_STATIC.Sections.getNew__WAW_Core_SectionsList = function() {
	
	wawCore__SectionsList = new WAW_Core_SectionsList();
	return wawCore__SectionsList;
};


/**
 * 
 * @param {WAW_Core_SectionsList} sectionsList
 * @param {WAW_Core_Section} section
 * @param {String} id
 */
WAW_Core_STATIC.Sections.add_SectionTo_SectionList = function( sectionsList, section , id ) {

	if (( sectionsList instanceof WAW_Core_SectionsList ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_SectionsList is required." );
	}
	
	if (( section instanceof WAW_Core_Section ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_Section is required." );
	}
	
	if ( id == null || id == "" ) {
		throw new WAW_Core_Exception( "ID is required." );
	}
	
	if ( sectionsList.sections_ByID[ id ] !== undefined ) {
		throw new WAW_Core_Exception( "ID is duplicated." );
	} else {
		sectionsList.sections_ByID[ id ] = section;
	} 
};


/**
 * @param {WAW_Core_SectionsList} sectionsList
 * 
 * @returns {WAW_Core_Property}
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_STATIC.Sections.get__Section_fromList = function( sectionsList, id ) {

	if (( sectionsList instanceof WAW_Core_SectionsList ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_SectionsList is required." );
	}

	if ( id == null || id == "" ) {
		throw new WAW_Core_Exception( "ID is required." );
	}
	
	
	if ( sectionsList.sections_ByID[ id ] !== undefined ) {
		return sectionsList.sections_ByID[ id ];
	} else {
		throw new WAW_Core_Exception( "ID not exist." );
	} 

};

/**
 * @param {WAW_Core_SectionsList} sectionsList
 * @param {WAW_Core_Section} section
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_STATIC.Sections.update__Section_ofList = function( sectionsList, section , id ) {

	if (( sectionsList instanceof WAW_Core_SectionsList ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_SectionsList is required." );
	}
	
	if (( section instanceof WAW_Core_Section ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_Section is required." );
	}
	
	if ( id == null || id == "" ) {
		throw new WAW_Core_Exception( "ID is required." );
	}
	
	if ( sectionsList.sections_ByID[ id ] !== undefined ) {
		sectionsList.sections_ByID[ id ] = section;
	} else {
		throw new WAW_Core_Exception( "ID not exist." );
	} 

};

/**
 * @param {WAW_Core_SectionsList} sectionsList
 * 
 * @throws {WAW_Core_Exception}
 */
WAW_Core_STATIC.Sections.delete__Section_fromList = function( sectionsList, id ) {

	if (( sectionsList instanceof WAW_Core_SectionsList ) == false ) {
		throw new WAW_Core_Exception( "WAW_Core_SectionsList is required." );
	}

	if ( id == null || id == "" ) {
		throw new WAW_Core_Exception( "ID is required." );
	}
	
	if ( sectionsList.sections_ByID[ id ] !== undefined ) {
		delete sectionsList.sections_ByID[ id ];
	} else {
		throw new WAW_Core_Exception( "ID not exist." );
	} 

};