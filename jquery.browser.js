/*!
 * jQuery Browser Plugin v0.0.3
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2013 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 2013-07-29T17:23:27-07:00
 */

(function( jQuery, window, undefined ) {
"use strict";
 
var matched, browser;
 
jQuery.uaMatch = function( ua ) {
  ua = ua.toLowerCase();
 
	var match = /(opr)[\/]([\w.]+)/.exec( ua ) || 
		/(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	var platform_match = /(ipad)/.exec( ua ) ||
		/(iphone)/.exec( ua ) ||
		/(android)/.exec( ua ) ||
		/(win)/.exec( ua ) ||
		/(mac)/.exec( ua ) ||
		/(linux)/.exec( ua ) ||
		[];
 
	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0",
		platform: platform_match[0] || ""
	};
};
 
matched = jQuery.uaMatch( window.navigator.userAgent );
browser = {};
 
if ( matched.browser ) {
	browser[ matched.browser ] = true;
	browser.version = matched.version;
}

if ( matched.platform) {
	browser[ matched.platform ] = true
}
 
// Chrome and Opera 15+ are Webkit, but Webkit is also Safari.
if ( browser.chrome || browser.opr) {
	browser.webkit = true;
} else if ( browser.webkit ) {
	browser.safari = true;
}

// IE11 has a new token so we will assign it msie to avoid breaking changes
if (browser.rv)
{
	browser.msie = true;
}

// Opera 15+ are identified as opr
if (browser.opr)
{
	browser.opera = true;
}
 
jQuery.browser = browser;
 
})( jQuery, window );