#!
# jQuery Browser Plugin v0.0.2
# https://github.com/gabceb/jquery-browser-plugin
# 
# Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
# http://jquery.org/license
#
# New functionality Copyright 2013 Gabriel Cebrian
# https://github.com/gabceb/jquery-browser-plugin/wiki/Authors
#
# Released under the MIT license
#
# Date: 2013-07-29T17:23:27-07:00
# 

((jQuery, window, undefined_) ->
  "use strict"
  matched = undefined
  browser = undefined

  jQuery.uaMatch = (ua) ->
    ua = ua.toLowerCase()
    match = /(chrome)[ \/]([\w.]+)/.exec(ua) or /(webkit)[ \/]([\w.]+)/.exec(ua) or /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) or /(msie) ([\w.]+)/.exec(ua) or ua.indexOf("trident") and /(rv) ([\w.]+)/.exec( ua ) or ua.indexOf("compatible") < 0 and /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) or []
    platform_match = /(ipad)/.exec(ua) or /(iphone)/.exec(ua) or /(android)/.exec(ua) or []
    browser: match[1] or ""
    version: match[2] or "0"
    platform: platform_match[0] or ""

  matched = jQuery.uaMatch(window.navigator.userAgent)
  browser = {}
  
  if matched.browser
    browser[matched.browser] = true
    browser.version = matched.version

  browser[matched.platform] = true  if matched.platform
  
  # Chrome is Webkit, but Webkit is also Safari.
  if browser.chrome
    browser.webkit = true
  else if browser.webkit
    browser.safari = true

  # IE11 has a new token so we will assign it msie to avoid breaking changes
  if browser.rv
    browser.msie = true

jQuery.browser = browser
) jQuery, window