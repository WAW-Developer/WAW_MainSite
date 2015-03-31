/**
 * WAW Util JavaScript library
 * 
 * Provides some JS tricks & facilities
 * 
 * @author Felipe Camacho Melero
 * 
 * @version 0.0.2b
 * 
 * 
 */


/**
 * Events stack
 */
Event_Driver.prototype.events_Stack = [];
Event_Driver.prototype.events_Stack__FIFO = [];
/**
 * Delta time for trigger
 */
Event_Driver.prototype.delta_Trigger = 1200;
Event_Driver.prototype.last_TriggerTime = 0;
Event_Driver.prototype.last_EventTime = 0;


/**
 * Add event
 * @param time
 * @param event_Object
 */
Event_Driver.prototype.add_Event = function (time, event_Object) {
	
	if ( (time <= this.last_EventTime || time <= this.last_TriggerTime) && 
		time != 0) {
		return;
	}
	
	var new_Event = {"time" : time,
	                 "object": event_Object};
	
//	this.events_Stack.unshift(new_Event);
	
	this.events_Stack.push(new_Event);
	
//	if (new_Event.time > 0) {
//		this.events_Stack.push(new_Event);
//	} else {
//		this.events_Stack__FIFO.push(new_Event);
//	}
	
	
	if (time != 0) {
		this.last_EventTime = time;	
	}
	
};

/**
 * Check events
 * @returns {Boolean}
 */
Event_Driver.prototype.check_Events__FIFO = function () {
	
	var result = false;
	
	if (this.events_Stack__FIFO.length > 0) {
//		this.events_Stack__FIFO = this.events_Stack.slice(stack_ID_old);
		
		if (this.events_Stack__FIFO.length > 1) {
			this.events_Stack__FIFO = this.events_Stack.splice(0, 1);	
		} else {
			this.events_Stack__FIFO = [];
		}
		
		
		var date = new Date();
		var time = date.getTime();
		
		
		result = true;
		this.last_TriggerTime = time;
	}
	
	return result;
};



/**
 * Check events
 * @returns {Boolean}
 */
Event_Driver.prototype.check_Events = function () {
	
	var result = false;
	
//	result = this.check_Events__FIFO();
//	if (result) {
//		return result;
//	}
//	
	
	var date = new Date();
	var time = date.getTime();
	var stack_ID_old = -1;
	
	if (time - this.last_TriggerTime > this.delta_Trigger) {
		for ( var int = 0; int < this.events_Stack.length; int++) {
			var event_Object = this.events_Stack[int];
			if (event_Object.time > this.last_TriggerTime ||
				event_Object.time == 0) {
				stack_ID_old = int;
			}
		}
	} 
	
	if (stack_ID_old >= 0) {
		
		if (this.events_Stack[stack_ID_old].time == 0) {
			this.events_Stack[stack_ID_old].time = time;
		}
		
		this.events_Stack = this.events_Stack.slice(stack_ID_old);
		
		result = true;
		this.last_TriggerTime = time;
		
	}

	return result;
};


/**
 * Notity event method
 * @param {MBE_ECOM_Step_Price_Item_Event} event
 * @param {int} time [custom time, Null for now, 0 for atomic event]
 * @param {Object} item
 */
Event_Driver.prototype.notifyEvent = function(event, time, item) {
	
	if (item == null) {
		item = this;
	}
	
	var event_Driver = this;
	
	if (time == null) {
		var date = new Date();
		time = date.getTime();
	}
	

	if (time < this.last_TriggerTime && time != 0) { // Check last event trigger
		return;
	}
	
	this.add_Event(time, event); // Add event to Event driver	
	
	
	if (this.check_Events()) {  // Check events
		jQuery(item).trigger(event.eventType, event);
	} else {
		setTimeout(function() {  // Notify item next (event delay)
			event_Driver.notifyEvent(event, time, item);
		},this.delta_Trigger + 10);
	}
	
};


/**
 * Basic event driver
 * @returns {Event_Driver}
 */
function Event_Driver() {
	var date = new Date();
	this.last_TriggerTime = date.getTime();
	
	this.events_Stack = [];
	this.events_Stack__FIFO = [];
};


/**
 * Console log trick (Not for IE)
 * @param param
 */
function console_Log(param) {
//	if (!jQuery.browser.msie) {
//		console.log(param);
//	}
	if (console) {
		console.log(param);	
	}
	
}


/**
 * JavaScript object copy facility
 * @see http://james.padolsey.com/javascript/deep-copying-of-objects-and-arrays/
 * @since 05-11-2012
 */
function deepCopy(o) {
    var copy = o,k;
 
    if (o && typeof o === 'object') {
        copy = Object.prototype.toString.call(o) === '[object Array]' ? [] : {};
        for (k in o) {
            copy[k] = deepCopy(o[k]);
        }
    }
 
    return copy;
}


/**
 * Check if object passed as parameter is an array object
 * @param a
 * @returns {Boolean}
 * {@link http://studiokoi.com/blog/article/typechecking_arrays_in_javascript}
 */
function isArray(a)
{
	return Object.prototype.toString.apply(a) === '[object Array]';
}

/**
 * This function check if a NIF is valid
 * 
 * @see http://www.diegodicamillo.com.ar/blog/2010/08/03/conjunto-de-funciones-javascript-para-validar-email-nif-cif-telefono-fijo-y-telefono-movil/
 * 
 * @param abc
 * @returns {Boolean}
 */
NIF_Facilities.prototype.isValidNif = function(abc) {
	dni=abc.substring(0,abc.length-1);
	let=abc.charAt(abc.length-1);
	if (!isNaN(let)) {
		//alert('Falta la letra');
		return false;
	}else{
		cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
		posicion = dni % 23;
		letra = cadena.substring(posicion,posicion+1);
		if (letra!=let.toUpperCase()){
			//alert("Nif no válido");
			return false;
		}
	}
	//alert("Nif válido")
	return true;
};


/**
 * Retorna: 1 = NIF ok, 2 = CIF ok, 3 = NIE ok, -1 = NIF error, -2 = CIF error, -3 = NIE error, 0 = ??? error
 * @tutorial http://www.compartecodigo.com/javascript/validar-nif-cif-nie-segun-ley-vigente-31.html
 */
NIF_Facilities.prototype.valida_nif_cif_nie = function(a) {

	var temp = a.toUpperCase();
	var cadenadni = "TRWAGMYFPDXBNJZSQVHLCKE";
 
	if( temp!= '' )
	{
		//si no tiene un formato valido devuelve error
		if( ( !/^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$/.test( temp ) && !/^[T]{1}[A-Z0-9]{8}$/.test( temp ) ) && !/^[0-9]{8}[A-Z]{1}$/.test( temp ) )
		{
			return 0;
		}
 
		//comprobacion de NIFs estandar
		if( /^[0-9]{8}[A-Z]{1}$/.test( temp ) )
		{
			posicion = a.substring( 8,0 ) % 23;
			letra = cadenadni.charAt( posicion );
			var letradni = temp.charAt( 8 );
			if( letra == letradni )
			{
				return 1;
			}
			else
			{
				return -1;
			}
		}
 
 
		//algoritmo para comprobacion de codigos tipo CIF
		suma = parseInt(a.charAt(2))+parseInt(a.charAt(4))+parseInt(a.charAt(6));
 
		for( var i = 1; i < 8; i += 2 )
		{
			temp1 = 2 * parseInt( a.charAt( i ) );
			temp1 += '';
			temp1 = temp1.substring(0,1);
			temp2 = 2 * parseInt( a.charAt( i ) );
			temp2 += '';
			temp2 = temp2.substring( 1,2 );
			if( temp2 == '' )
			{
				temp2 = '0';
			}
 
			suma += ( parseInt( temp1 ) + parseInt( temp2 ) );
		}
		suma += '';
		n = 10 - parseInt( suma.substring( suma.length-1, suma.length ) );
 
		//comprobacion de NIFs especiales (se calculan como CIFs)
		if( /^[KLM]{1}/.test( temp ) )
		{
			if( a.charAt( 8 ) == String.fromCharCode( 64 + n ) )
			{
				return 1;
			}
			else
			{
				return -1;
			}
		}
 
		//comprobacion de CIFs
		if( /^[ABCDEFGHJNPQRSUVW]{1}/.test( temp ) )
		{
			temp = n + '';
			if( a.charAt( 8 ) == String.fromCharCode( 64 + n ) || a.charAt( 8 ) == parseInt( temp.substring( temp.length-1, temp.length ) ) )
			{
				return 2;
			}
			else
			{
				return -2;
			}
		}
 
		//comprobacion de NIEs
		//T
		if( /^[T]{1}[A-Z0-9]{8}$/.test( temp ) )
		{
			if( a.charAt( 8 ) == /^[T]{1}[A-Z0-9]{8}$/.test( temp ) )
			{
				return 3;
			}
			else
			{
				return -3;
			}
		}
		//XYZ
		if( /^[XYZ]{1}/.test( temp ) )
		{
			temp = temp.replace( 'X','0' );
			temp = temp.replace( 'Y','1' );
			temp = temp.replace( 'Z','2' );
			pos = temp.substring(0, 8) % 23;
 
			if( a.toUpperCase().charAt( 8 ) == cadenadni.substring( pos, pos + 1 ) )
			{
				return 3;
			}
			else
			{
				return -3;
			}
		}
	}
 
	return 0;

};

function NIF_Facilities() {
	
}


var WAW_UTIL_STATIC = {
	
	"Array_ContainsArray" : function(arrayToSearch, arrayWithKeys) {
		
		var result = false;
		var missing_Keys = [];
		
		if (!isArray(arrayToSearch) || !isArray(arrayWithKeys)) {
			return result;
		}
		
		for (var keyNum = 0; keyNum < arrayWithKeys.length; keyNum++) {
			var key_element = arrayWithKeys[keyNum];
			if (arrayToSearch.indexOf(key_element) == -1) {
				missing_Keys.push(key_element);
			}
		}
		
		if (missing_Keys.length == 0) {
			result = true;
		} else {
			result = missing_Keys;
		}
		
		return result;
	},
	
	"Array_ContainsAnyKey" : function(arrayToSearch, arrayWithKeys) {
		
		var result = false;
		var searchResult = WAW_UTIL_STATIC.Array_ContainsArray(arrayToSearch, arrayWithKeys);
		
		
		if (isArray(searchResult) && searchResult.length < arrayWithKeys.length) {
			result = true;
		}
		
		return result;
	},
	
	/**
	 * This function returns URL params array.
	 * @see http://stackoverflow.com/questions/979975/how-to-get-the-value-from-url-parameter
	 * @returns {Array}
	 */
	"get_URLParams" : function() {
		  var query_string = {};
		  var query = window.location.search.substring(1);
		  var vars = query.split("&");
		  for (var i=0;i<vars.length;i++) {
		    var pair = vars[i].split("=");
		    	// If first entry with this name
		    if (typeof query_string[pair[0]] === "undefined") {
		      query_string[pair[0]] = pair[1];
		    	// If second entry with this name
		    } else if (typeof query_string[pair[0]] === "string") {
		      var arr = [ query_string[pair[0]], pair[1] ];
		      query_string[pair[0]] = arr;
		    	// If third or later entry with this name
		    } else {
		      query_string[pair[0]].push(pair[1]);
		    }
		  } 
	    return query_string;
	}
	
	
	
};



var QueryString = function () {
	  // This function is anonymous, is executed immediately and 
	  // the return value is assigned to QueryString!
	  var query_string = {};
	  var query = window.location.search.substring(1);
	  var vars = query.split("&");
	  for (var i=0;i<vars.length;i++) {
	    var pair = vars[i].split("=");
	    	// If first entry with this name
	    if (typeof query_string[pair[0]] === "undefined") {
	      query_string[pair[0]] = pair[1];
	    	// If second entry with this name
	    } else if (typeof query_string[pair[0]] === "string") {
	      var arr = [ query_string[pair[0]], pair[1] ];
	      query_string[pair[0]] = arr;
	    	// If third or later entry with this name
	    } else {
	      query_string[pair[0]].push(pair[1]);
	    }
	  } 
	    return query_string;
	} ();
	


/** 
 utility to add a script node to the current document
 and call the callback function when it is loaded.
 Should allow scripts to be loaded at any time during document
 life..and have code be kicked off after they are loaded.

 Browsers tested: 
 FF 3.6.x - WORKS
 Chrome 5.x - WORKS
 Safari 4.x - WORKS
 MS IE 8 - WORKS
 Opera 10.x - WORKS 
 
 @see http://software.intel.com/en-us/blogs/2010/05/22/dynamically-load-javascript-with-load-completion-notification
 
 */
function add_script(scriptURL, onloadCB) {

	var scriptEl    = document.createElement("script");

	scriptEl.type   = "text/javascript";

	scriptEl.src    = scriptURL;


	function calltheCBcmn() {

		onloadCB(scriptURL);

	}


	if(typeof(scriptEl.addEventListener) != 'undefined') {

		/* The FF, Chrome, Safari, Opera way */

		scriptEl.addEventListener('load',calltheCBcmn,false);

	}

	else {

		/* The MS IE 8+ way (may work with others - I dunno)*/

		function handleIeState() {

			if(scriptEl.readyState == 'loaded'){

				calltheCBcmn(scriptURL);

			}

		}

		var ret = scriptEl.attachEvent('onreadystatechange',handleIeState);

	}

	document.getElementsByTagName("head")[0].appendChild(scriptEl);

}


/**
 * Trick to workarround JS cache problem 
 */
get_Random_URL = function(url_js) {
	return url_js + "?nojscache=" + Date.now();
};


	
/**
 * JQuery modifications
 */
if (jQuery) {
	
	/**
	 * @see http://themergency.com/an-alternative-to-jquerys-getscript-function/
	 */
	jQuery.loadScript = function (url, arg1, arg2, arg3) {
		var cache = false, callback = null, callback_Error = null;
		//arg1 and arg2 can be interchangable as either the callback function or the cache bool
		if ($.isFunction(arg1)){
			callback = arg1;
			cache = arg2 || cache;
		} else {
			cache = arg1 || cache;
			callback = arg2 || callback;
		}

		if (arg3 != undefined && arg3 != null && $.isFunction(arg3)) {
			callback_Error = arg3;
		} else {
			callback_Error = function() {
				
			};
		}
		
		var load = true;
		//check all existing script tags in the page for the url we are trying to load
		jQuery('script[type="text/javascript"]').each(function () { return load = (url != $(this).attr('src')); });
		if (load){
			//didn't find it in the page, so load it
			//equivalent to a jQuery.getScript but with control over cacheing
			jQuery.ajax({
				type: 'GET',
				url: url,
				success: callback,
				error: callback_Error,
				dataType: 'script',
				cache: cache
			});
		} else {
			//already loaded so just call the callback
			if (jQuery.isFunction(callback)) {
				callback.call(this);
			};
		};
	};
}
	

/**
 * Returns current URL path 
 * @returns {String}
 */
function get_PathString() {
	
	var pathArray = window.location.pathname.split( '/' );
	var pathString = "";
	
	for (var int = 0; ( int < ( pathArray.length -1 )); int++) {
		pathString += pathArray[int];
	}
	
	return pathString;
}

	
	