/**
 * WAW Util Core JavaScript library
 * 
 * Provides WAW Core Objects
 * 
 * @author Felipe Camacho Melero
 * 
 * @version 0.0.1b
 * 
 * @use WAW Util JavaScript library >= 0.0.2b
 * 
 */


/**
 * WAW Core constants
 */
var WAW_Core_CONSTANTS = {
		
	"find_Section__ByName" : "byName",
	"find_Section__ByID" : "byID",
	"find_Section__ByTagID" : "byTagID",
	
	"exceptionType__Normal" : "normal",
	
	"events" : {
		"EVENT__RESOURCES_LOADED" : "Resources_Loaded",
		"EVENT__RESOURCES_LOAD_ERROR" : "Resources_Load_ERROR"
	},
	
	"tasks" : {
		"find_Task__ByName" : "byName",
		"find_Task__ByState" : "byState",
		"task_Type__Normal" : "normal",
		"find_Task_TagOption__AllTags" : "allTags",
		"find_Task_TagOption__AnyTag" : "anyTag",
		"task_State_SearchOption__AnyState" : "AnyState",
		"task_State__Pending" : "Pending",
		"task_State__InProcess" : "InProcess",
		"task_State__Finished" : "Finished",
	},
	
	"xml_Tags" : {
		"XML_Tag__WAW_Core_Site" :"WAW_Core_Site",
		"XML_Tag__WAW_Core_Section" :"WAW_Core_Section",
		"XML_Tag__WAW_Core_SubSections" :"WAW_Core_SubSections",
		
		"XML_TagAttr__ID" :"id",
		"XML_TagAttr__IDtag" :"idTag",
		"XML_TagAttr__Name" :"name",
		"XML_TagAttr__Type" :"type"
	}
		
};


/**
 * WAW Core event configuration
 */
WAW_Core__Event.prototype.config = {
	"event" : null,
	"event_TYPE" : null,
	"event_DATA" : null
};


WAW_Core__Event.prototype.eventType = null;

/**
 * WAW Core Event
 * @returns {WAW_Core__Event}
 */
function WAW_Core__Event() {
	this.config = deepCopy(this.config);
};


WAW_Core_Exception.prototype.type = null;
WAW_Core_Exception.prototype.message = null;


/**
 * WAW Core Exception
 * @param message
 * @param type
 */
function WAW_Core_Exception(message, type) {
	
	if (type == null) {
		this.type = type;
	}
	
	this.message = message;
	
}



/**
 * WAW UTIL Core Static methods
 */
var WAW_Core_STATIC = {
		
		/**
		 * 
		 * @param search_Key
		 * @param search_Type
		 * @param sections_Array
		 * @returns {Boolean}
		 * 
		 * @throws {WAW_Core_Exception}
		 */
		"find_Section" : function(search_Key, search_Type, sections_Array) {
			
			var found = false;
			
			if (sections_Array == null) {
//				sections_Array = this.config.sections;
				throw new WAW_Core_Exception("Section array is required.");
			}
			
			if (search_Type == null) {
				search_Type = WAW_Core_CONSTANTS.find_Section__ByName;
			}
			
			for ( var section_num = 0; section_num < sections_Array.length; section_num++) {
				
				var section__DATA = sections_Array[section_num];
				
				if (search_Type == WAW_Core_CONSTANTS.find_Section__ByName &&
					section__DATA.config.name == search_Key) {
					found = true;
					break;
				} else if (search_Type == WAW_Core_CONSTANTS.find_Section__ByID &&
					section__DATA.config.ID == search_Key) {
					found = true;
					break;
				} else if (search_Type == WAW_Core_CONSTANTS.find_Section__ByTagID &&
					section__DATA.config.ID_Tag == search_Key) {
					found = true;
					break;
				}
				
			}
			
			if (found) {
				found = sections_Array[section_num];
			}
			
			return found;
		},
		
		/**
		 * 
		 * @param search_Key
		 * @param tasks_Array
		 * @returns {Integed}
		 * @throws {@link WAW_Core_Exception}
		 */
		"get_Task_Position" : function(search_Key, tasks_Array) {
			
			var found = false;
			
			if (tasks_Array == null) {
				throw new WAW_Core_Exception("Task array required.");
			} else if (search_Key == null) {
				throw new WAW_Core_Exception("Search key required.");
			}

			
			for ( var task_num = 0; task_num < tasks_Array.length; task_num++) {
				var waw_Task = tasks_Array[task_num];
				if (waw_Task.name == search_Key) {
					found = task_num;
					break;
				}
				
			}
			
			return found;
			
		},
		
		/**
		 * Find task
		 * @param search_Key
		 * @param search_Type
		 * @param tasks_Array
		 * @param tags_Option
		 * @param tagsKeys
		 * @returns {Boolean} {WAW_Core_Task} {Array}
		 */
		"find_Task" : function(search_Key, search_Type, tasks_Array, tags_Option, tagsKeys) {
			
			var found = false;
			var result_Array = [];
			
			if (tasks_Array == null) {
				throw new WAW_Core_Exception("Task array required.");
			}
			
			if (search_Type == null) {
				search_Type = WAW_Core_CONSTANTS.tasks.find_Task__ByName;
			}
			
			if (tags_Option === undefined) {
				tags_Option = null;
			}
			
			if (tags_Option !== null && !isArray(tagsKeys)) {
				throw new WAW_Core_Exception("Tags keys required.");
			}
			
			for ( var task_num = 0; task_num < tasks_Array.length; task_num++) {
				
				var waw_Task = tasks_Array[task_num];
				
				if (search_Type == WAW_Core_CONSTANTS.tasks.find_Task__ByName &&	// Find task by name
					waw_Task.name == search_Key) {
					
					// Check tags options -------------------------------------------|\/|---
					switch (tags_Option) {
					case WAW_Core_CONSTANTS.tasks.find_Task_TagOption__AllTags:
						found = waw_Task.contains_AllTags(tagsKeys);
						break;
					case WAW_Core_CONSTANTS.tasks.find_Task_TagOption__AnyTag:
						found = waw_Task.contains_AnyTag(tagsKeys);
						break;
					default:
						found = true;
						break;
					}
					// --------------------------------------------------------------|/\|---
					
					break;
					
				} else if (search_Type == WAW_Core_CONSTANTS.tasks.find_Task__ByState &&	// Find task by state
					(waw_Task.state == search_Key || search_Key == WAW_Core_CONSTANTS.tasks.task_State_SearchOption__AnyState)) {
					
					var found_Really = false;
					
					// Check tags options -------------------------------------------|\/|---
					switch (tags_Option) {
					case WAW_Core_CONSTANTS.tasks.find_Task_TagOption__AllTags:
						found_Really = waw_Task.contains_AllTags(tagsKeys);
						break;
					case WAW_Core_CONSTANTS.tasks.find_Task_TagOption__AnyTag:
						found_Really = waw_Task.contains_AnyTag(tagsKeys);
						break;
					default:
						found_Really = true;
						break;
					}
					// --------------------------------------------------------------|/\|---
					
					if (found_Really === true) {	// Add to result array & mark found flag
						result_Array.push(waw_Task);
						found = true;
					}
					
				}
				
			}
			
			// Prepare result ---------------------------------------------------------|\/|---
			if (found) {
				
				if (search_Type == WAW_Core_CONSTANTS.tasks.find_Task__ByName) {
					found = tasks_Array[task_num];
				} else {
					found = result_Array;
				}
				
			}
			// ------------------------------------------------------------------------|/\|---
			
			return found;
		},
		
		"load_XML_Resources": function(source_URL, ref_Object, event_Driver, custom_Event_Type, extra_DATA) { 
			
			if (custom_Event_Type == null) {
				custom_Event_Type = WAW_Core_CONSTANTS.events.EVENT__RESOURCES_LOADED;
			}
			
			if (window.ActiveXObject != null)
			  {
			  xhttp = new ActiveXObject("Msxml2.XMLHTTP");
			  }
			else 
			  {
			  xhttp = new XMLHttpRequest();
			  }
			xhttp.open("GET", source_URL, false);
			try {xhttp.responseType = "msxml-document";} catch(err) {} // Helping IE11
			xhttp.send("");
//			return xhttp.responseXML;
			
		 	// Notify event ----------------------------------------------------------------------------------------------------------|\/|---
        	var waw_Core_Event = new WAW_Core__Event();
        	waw_Core_Event.eventType = custom_Event_Type;
        	waw_Core_Event.config.event_TYPE = waw_Core_Event.eventType;
        	waw_Core_Event.config.event_DATA = xhttp.responseXML;
        	waw_Core_Event.config.extra_DATA = extra_DATA;
        	waw_Core_Event.config.eventMessage = "Resource loaded.";

        	event_Driver.notifyEvent(waw_Core_Event, 0, ref_Object);
//        	waw_Util_UI.config.event_Driver.notifyEvent(waw_UI_event, null, waw_Util_UI.config.event_Subscribers);
        	// -----------------------------------------------------------------------------------------------------------------------|/\|---
			
		},
		
		
		/**
		 * Load resource in asynchronus mode
		 * @param source_URL
		 * @param ref_Object
		 * @param event_Driver
		 * @param custom_Event_Type if null then WAW_Core_CONSTANTS.events.EVENT__RESOURCES_LOADED
		 * @param extra_DATA
		 */
		"load_Resources" : function(source_URL, ref_Object, event_Driver, custom_Event_Type, extra_DATA) {
			
			if (custom_Event_Type == null) {
				custom_Event_Type = WAW_Core_CONSTANTS.events.EVENT__RESOURCES_LOADED;
			}

			jQuery.ajax({
		        type: 'GET',
		        url: source_URL,
//				  cache: false,
//				  dataType: "xml",
//				  dataType: "html",
		        success: function(file_XML) {
				  	// Notify event ----------------------------------------------------------------------------------------------------------|\/|---
		        	var waw_Core_Event = new WAW_Core__Event();
		        	waw_Core_Event.eventType = custom_Event_Type;
		        	waw_Core_Event.config.event_TYPE = waw_Core_Event.eventType;
		        	waw_Core_Event.config.event_DATA = file_XML;
		        	waw_Core_Event.config.extra_DATA = extra_DATA;
		        	waw_Core_Event.config.eventMessage = "Resource loaded.";

		        	event_Driver.notifyEvent(waw_Core_Event, 0, ref_Object);
//		        	waw_Util_UI.config.event_Driver.notifyEvent(waw_UI_event, null, waw_Util_UI.config.event_Subscribers);
		        	// -----------------------------------------------------------------------------------------------------------------------|/\|---
		        },
		        error: function(jqXHR, textStatus, errorThrown ) {
		        	// Notify event ----------------------------------------------------------------------------------------------------------|\/|---
		        	var waw_Core_Event = new WAW_Core__Event();
		        	waw_Core_Event.eventType = WAW_Core_CONSTANTS.events.EVENT__RESOURCES_LOAD_ERROR;
		        	waw_Core_Event.config.event_TYPE = waw_Core_Event.eventType;
		        	waw_Core_Event.config.event_DATA = errorThrown;
		        	waw_Core_Event.config.extra_DATA = extra_DATA;
		        	waw_Core_Event.config.eventMessage = "Resource load error.";

		        	event_Driver.notifyEvent(waw_Core_Event, 0, ref_Object);
//		        	waw_Util_UI.config.event_Driver.notifyEvent(waw_UI_event, null, waw_Util_UI.config.event_Subscribers);
		        	// -----------------------------------------------------------------------------------------------------------------------|/\|---
		        }
		    });

		},
		
		
		"get_WAW_Core_Site__FromXML" : function(xml_Doc) {
			
			var waw_Site_XML = jQuery(xml_Doc).find(WAW_Core_CONSTANTS.xml_Tags.XML_Tag__WAW_Core_Site);
			var waw_Site = new WAW_Core_Site();
		},
		
		
		"get_WAW_Core_Section__FromXML" : function(xml_Doc) {
			
			var sections_Array = [];
			
			jQuery(xml_Doc).find(WAW_Core_CONSTANTS.xml_Tags.XML_Tag__WAW_Core_Section).each(function () {
				
				var waw_Section = new WAW_Core_Section();
				waw_Section.config.ID = jQuery(this).attr(WAW_Core_CONSTANTS.xml_Tags.XML_TagAttr__ID);
				waw_Section.config.ID_Tag = jQuery(this).attr(WAW_Core_CONSTANTS.xml_Tags.XML_TagAttr__IDtag);
				waw_Section.config.name = jQuery(this).attr(WAW_Core_CONSTANTS.xml_Tags.XML_TagAttr__Name);
				
				
				sections_Array.push(waw_Section);
			});

		}

};


/**
 * @returns {WAW_Core_Section}
 */
WAW_Core_STATIC.getNew__WAW_Core_Section = function( id, name, id_Tag ) {
	
	wawCore__Section = new WAW_Core_Section();
	
	wawCore__Section.initialize();
	
	wawCore__Section.config.ID = id;
	wawCore__Section.config.name = name;
	wawCore__Section.config.ID_Tag = id_Tag;
	
	return wawCore__Section;
};

/**
 * @returns { WAW_Core_Site }
 */
WAW_Core_STATIC.getNew__WAW_Core_Site = function() {
	var waw_Core__Site = new WAW_Core_Site();
	waw_Core__Site.initialize();
	
	return waw_Core__Site;
};


WAW_Core_Task.prototype.contains_AllTags = function(tagsKeys) {
	
	if (!isArray(tagsKeys)) {
		throw new WAW_Core_Exception("tagsKeys array required");
	} else if (!isArray(this.tasgs)) {
		throw new WAW_Core_Exception("tags not initialized");
	}
	
	return WAW_UTIL_STATIC.Array_ContainsArray(this.tasgs, tagsKeys);
};


WAW_Core_Task.prototype.contains_AnyTag = function(tagsKeys) {
	
	if (!isArray(tagsKeys)) {
		throw new WAW_Core_Exception("tagsKeys array required");
	} else if (!isArray(this.tasgs)) {
		throw new WAW_Core_Exception("tags not initialized");
	}
	
	return WAW_UTIL_STATIC.Array_ContainsAnyKey(this.tasgs, tagsKeys);
	
};


WAW_Core_Task.prototype.name = null;
WAW_Core_Task.prototype.state = null;
WAW_Core_Task.prototype.task_DATA = null;
WAW_Core_Task.prototype.tasgs = null;

/**
 * WAW Core Task
 */
function WAW_Core_Task(name, state, task_DATA, tags) {
	
	this.name = name;
	this.state = state;
	this.task_DATA = task_DATA;
	this.tasgs = tags;
	
}


WAW_Core_TaskList.prototype.initialize = function() {
	
	var waw_Core_TaskList = this;
	waw_Core_TaskList.config = deepCopy( this.config );
	waw_Core_TaskList.config.tasks_Array = [];
	
};


/**
 * Add task to tasklist
 * @param {WAW_Core_Task} waw_Task
 * @throws {WAW_Core_Exception}
 */
WAW_Core_TaskList.prototype.addTask = function(waw_Task) {
	
	if (!waw_Task instanceof WAW_Core_Task ) {
		throw new WAW_Core_Exception("WAW Task required.");
	}
	
//	if (!waw_Task.isPrototypeOf(WAW_Core_Task)) {
//		throw new WAW_Core_Exception("WAW Task required.");
//	}
	
	if (WAW_Core_STATIC.find_Task(waw_Task.name, WAW_Core_CONSTANTS.tasks.find_Task__ByName, this.config.tasks_Array) === false) {
		this.config.tasks_Array.push(waw_Task);
	} else {
		throw new WAW_Core_Exception("WAW Task already exist.");
	}
	
};


/**
 * Return task searched by name
 * @param taskName
 * @returns {WAW_Core_Task}
 */
WAW_Core_TaskList.prototype.getTask = function(taskName) {
	return WAW_Core_STATIC.find_Task(taskName, WAW_Core_CONSTANTS.tasks.find_Task__ByName, this.config.tasks_Array);
};


/**
 * Return tasks searched by state
 * @param taskState
 * @param tags_Option (Optional)
 * @param tagsKeys (Optional)
 * @returns {Array}
 */
WAW_Core_TaskList.prototype.getTasks_ByState = function(taskState, tags_Option, tagsKeys) {
	return WAW_Core_STATIC.find_Task(taskState, WAW_Core_CONSTANTS.tasks.find_Task__ByState, this.config.tasks_Array, tags_Option, tagsKeys);
};


/**
 * Update task
 * @param taskName
 * @returns {WAW_Core_Task}
 * @throws {WAW_Core_Exception}
 */
WAW_Core_TaskList.prototype.updateTask = function(wawTask) {
	
	var task_position = false;
	
	try {
		task_position = WAW_Core_STATIC.get_Task_Position(wawTask.name, this.config.tasks_Array);
	} catch (e) {
		throw new WAW_Core_Exception("Error in task position." + e.message);
	}
	
	if (task_position !== false) {
		this.config.tasks_Array[task_position] = wawTask;
	} else {
		throw new WAW_Core_Exception("WAW Task not exist.");
	}
	
};


/**
 * Update task state
 * @param {WAW_Core_Task} wawTask May be a string with task name
 * @param {String} task_State
 * @throws {WAW_Core_Exception}
 */
WAW_Core_TaskList.prototype.updateTask_State = function(wawTask, task_State) {
	
	var task_position = false;
	var wawTask_Name = "";
	
	
	if ( task_State == null || task_State == "" ) {
		throw new WAW_Core_Exception( "Task state required." );
	} else if ( wawTask == null ) {
		throw new WAW_Core_Exception( "WAW task required." );
	} else if ( wawTask instanceof WAW_Core_Task ) {
		wawTask_Name = wawTask.name;
	} else if ( typeof wawTask == "string" && wawTask != "" ) {
		wawTask_Name = wawTask;
	} else {
		throw new WAW_Core_Exception( "WAW task required." );
	}
	
	try {
		task_position = WAW_Core_STATIC.get_Task_Position( wawTask_Name, this.config.tasks_Array );
	} catch (e) {
		throw new WAW_Core_Exception( "Error in task position." + e.message );
	}
	
	if ( task_position !== false ) {
		this.config.tasks_Array[task_position].state = task_State;	
	} else {
		throw new WAW_Core_Exception("WAW Task not exist.");
	}
	
};


/**
 * Check if all task are finished
 * @param tags_Option (Optional)
 * @param tagsKeys (Optional)
 * @returns {Boolean}
 */
WAW_Core_TaskList.prototype.check_AllFinished = function(tags_Option, tagsKeys) {
	var result = false;
	
	var required_Taks = WAW_Core_STATIC.find_Task(WAW_Core_CONSTANTS.tasks.task_State_SearchOption__AnyState, 
			WAW_Core_CONSTANTS.tasks.find_Task__ByState, 
			this.config.tasks_Array, tags_Option, tagsKeys);;
	
	var finished_Tasks =  WAW_Core_STATIC.find_Task(WAW_Core_CONSTANTS.tasks.task_State__Finished, 
			WAW_Core_CONSTANTS.tasks.find_Task__ByState, 
			this.config.tasks_Array, tags_Option, tagsKeys);
	
	if (finished_Tasks.length > 0 && finished_Tasks.length == required_Taks.length) {
		result = true;
	} 
	
	return result;
};


WAW_Core_TaskList.prototype.config = {
	"tasks_Array" : []
};


//WAW_Core_TaskList.prototype.task_Array = null;

function WAW_Core_TaskList() {
	this.initialize();
}


/**
 * 
 */
WAW_Core_Item.prototype.initialize = function() {
	var waw_Core_Item = this;
	waw_Core_Item.config = deepCopy(this.config);
	waw_Core_Item.config.tasks_Array = [];
	
	// Initialize event driver ------------------------------------------|\/|---
	waw_Core_Item.config.event_Driver = new Event_Driver();
	waw_Core_Item.config.event_Driver.delta_Trigger = 115;
	// ------------------------------------------------------------------|/\|---
};


WAW_Core_Item.prototype.config = {
		"ID" : null,
		"type" : null,
		"ID_Tag" : null,
		"name": null,
		"event_Driver": null
	};


function WAW_Core_Item() {
	
}


WAW_Core_Section.prototype.find_SubSection = function(search_Key, search_Type, sections_Array) {
	if (sections_Array == null) {
		sections_Array = this.config.subsections;
	}
	return WAW_Core_STATIC.find_Section(search_Key, search_Type, sections_Array);
};


WAW_Core_Section.prototype.find_SubSection__byName = function(search_Key, sections_Array) {
	return this.find_SubSection(search_Key, WAW_Core_CONSTANTS.find_Section__ByName, sections_Array);
};


WAW_Core_Section.prototype.find_SubSection__byID = function(search_Key, sections_Array) {
	return this.find_SubSection(search_Key, WAW_Core_CONSTANTS.find_Section__ByID, sections_Array);
};


WAW_Core_Section.prototype.find_SubSection__byIDTag = function(search_Key, sections_Array) {
	return this.find_SubSection(search_Key, WAW_Core_CONSTANTS.find_Section__ByTagID, sections_Array);
};


WAW_Core_Section.prototype.map_CUSTOM_Events = function() {
	
};


WAW_Core_Section.prototype.initialize = function() {
	
	var waw_Core_Section = this;
	waw_Core_Section.config = deepCopy(this.config);
	
	waw_Core_Section.config.subsections = [];
	waw_Core_Section.config.subsectionsList = WAW_Core_STATIC.Sections.getNew__WAW_Core_SectionsList();
	waw_Core_Section.config.properties = WAW_Core_STATIC.Properties.getNew__WAW_Core_PropertiesList();
	
	// Initialize event driver ------------------------------------------|\/|---
	waw_Core_Section.config.event_Driver = new Event_Driver();
	waw_Core_Section.config.event_Driver.delta_Trigger = 115;
	// ------------------------------------------------------------------|/\|---
	
};


WAW_Core_Section.prototype.config = {
	"ID" : null,
	"ID_Tag" : null,
	"name": null,
	"event_Driver": null,
	"subsections" : null,
	"subsectionsList" : null,
	"properties" : null
};


function WAW_Core_Section() {
	
}


WAW_Core_SubSection.prototype = new WAW_Core_Section();        // Here's where the inheritance occurs 
WAW_Core_SubSection.prototype.constructor=WAW_Core_SubSection;       // Otherwise instances of WAW_Core_SubSection would have a constructor of WAW_Core_Section
WAW_Core_SubSection.prototype.parent = WAW_Core_Section.prototype; // parent trick


function WAW_Core_SubSection() {
	
}


WAW_Core_Site.prototype.find_Section = function(search_Key, search_Type, sections_Array) {
	if (sections_Array == null) {
		sections_Array = this.config.sections;
	}
	return WAW_Core_STATIC.find_Section(search_Key, search_Type, sections_Array);
};


WAW_Core_Site.prototype.find_Section__byName = function(search_Key, sections_Array) {
	if (sections_Array == null) {
		sections_Array = this.config.sections;
	}
	return this.find_Section(search_Key, WAW_Core_CONSTANTS.find_Section__ByName, sections_Array);
};


WAW_Core_Site.prototype.find_Section__byID = function(search_Key, sections_Array) {
	if (sections_Array == null) {
		sections_Array = this.config.sections;
	}
	return this.find_Section(search_Key, WAW_Core_CONSTANTS.find_Section__ByID, sections_Array);
};


WAW_Core_Site.prototype.find_Section__byIDTag = function(search_Key, sections_Array) {
	if (sections_Array == null) {
		sections_Array = this.config.sections;
	}
	return this.find_Section(search_Key, WAW_Core_CONSTANTS.find_Section__ByTagID, sections_Array);
};


WAW_Core_Site.prototype.map_CUSTOM_Events = function() {
	
};


WAW_Core_Site.prototype.initialize = function() {
	
	var waw_Core_Site = this;
	waw_Core_Site.config = deepCopy(this.config);
	
	waw_Core_Site.config.sections = [];
	
	waw_Core_Site.config.properties = WAW_Core_STATIC.Properties.getNew__WAW_Core_PropertiesList();
	
	// Initialize event driver ------------------------------------------|\/|---
	waw_Core_Site.config.event_Driver = new Event_Driver();
	waw_Core_Site.config.event_Driver.delta_Trigger = 115;
	// ------------------------------------------------------------------|/\|---
	
};


WAW_Core_Site.prototype.config = {
	"event_Driver": null,
	"sections" : null,
	"properties" : null
};


function WAW_Core_Site() {
	
}