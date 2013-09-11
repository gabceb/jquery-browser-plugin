#!
# jQuery Browser Plugin v0.0.3
# https://github.com/gabceb/jquery-browser-plugin
# 
# Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
# http://jquery.org/license
#
# Modifications Copyright 2013 Gabriel Cebrian
# https://github.com/gabceb
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
    match = /(opr)[\/]([\w.]+)/.exec( ua ) or /(chrome)[ \/]([\w.]+)/.exec(ua) or /(webkit)[ \/]([\w.]+)/.exec(ua) or /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) or /(msie) ([\w.]+)/.exec(ua) or ua.indexOf("trident") >= 0 and /(rv)(?::| )([\w.]+)/.exec( ua ) or ua.indexOf("compatible") < 0 and /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) or []
    platform_match = /(ipad)/.exec(ua) or /(iphone)/.exec(ua) or /(android)/.exec(ua) or /(win)/.exec(ua) or /(mac)/.exec(ua) or /(linux)/.exec(ua) or []
    browser: match[1] or ""
    version: match[2] or "0"
    platform: platform_match[0] or ""

  matched = jQuery.uaMatch(window.navigator.userAgent)
  browser = {}
  
  if matched.browser
    browser[matched.browser] = true
    browser.version = matched.version

  browser[matched.platform] = true  if matched.platform
  
  # Chrome and Opera 15+ are Webkit, but Webkit is also Safari.
  if browser.chrome or browser.opr
    browser.webkit = true
  else if browser.webkit
    browser.safari = true

  # IE11 has a new token so we will assign it msie to avoid breaking changes
  if browser.rv
    browser.msie = true

  # Opera 15+ are identified as opr
  if browser.opr
    browser.opera = true

jQuery.browser = browser
) jQuery, window