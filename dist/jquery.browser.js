/*!
 * jQuery Browser Plugin v0.0.6
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

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], function ($) {
      factory($, root);
    });
  } else {
    // Browser globals
    factory(jQuery, root);
  }
}(this, function(jQuery, window) {
  "use strict";

  var matched, browser;

  jQuery.uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(edge)\/([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(opr)[\/]([\w.]+)/.exec( ua ) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    var platform_match = /(android)/.exec( ua ) ||
        /(bb)/.exec( ua ) ||
        /(blackberry)/.exec( ua ) ||
        /(cros)/.exec( ua ) ||
        /(ipad)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
        /(kindle)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(playbook)/.exec( ua ) ||
        /(silk)/.exec( ua ) ||
        /(win)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
        [];

    return {
      browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
      version: match[ 2 ] || match[ 4 ] || "0",
      versionNumber: match[ 4 ] || match[ 2 ] || "0",
      platform: platform_match[ 0 ] || ""
    };
  };

  matched = jQuery.uaMatch( window.navigator.userAgent );
  browser = {};

  if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.versionNumber, 10);
  }

  if ( matched.platform ) {
    browser[ matched.platform ] = true;
  }

  // These are all considered mobile platforms, meaning they run a mobile browser
  if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
    browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
    browser.mobile = true;
  }

  // These are all considered desktop platforms, meaning they run a desktop browser
  if ( browser.cros || browser.mac || browser.linux || browser.win ) {
    browser.desktop = true;
  }

  // Chrome, Opera 15+ and Safari are webkit based browsers
  if ( browser.chrome || browser.opr || browser.safari ) {
    browser.webkit = true;
  }

  // IE11 has a new token so we will assign it msie to avoid breaking changes
  // IE12 disguises itself as Chrome, but adds a new Edge token.
  if ( browser.rv || browser.edge ) {
    var ie = "msie";

    matched.browser = ie;
    browser[ie] = true;
  }

  // BB10 is a newer OS version of BlackBerry
  if ( browser.bb ) {
    var blackberry = "blackberry";

    matched.browser = blackberry;
    browser[blackberry] = true;
  }

  // Opera 15+ are identified as opr
  if ( browser.opr ) {
    var opera = "opera";

    matched.browser = opera;
    browser[opera] = true;
  }

  // Stock Android browsers are marked as Safari on Android.
  if ( browser.safari && browser.android ) {
    var android = "android";

    matched.browser = android;
    browser[android] = true;
  }

  // Assign the name and platform variable
  browser.name = matched.browser;
  browser.platform = matched.platform;

  jQuery.browser = browser;
  return browser;
}));
