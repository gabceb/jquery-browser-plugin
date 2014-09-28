#!
# jQuery Browser Plugin v0.0.6
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
    match = /(opr)[\/]([\w.]+)/.exec(ua) or /(chrome)[ \/]([\w.]+)/.exec(ua) or /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) or /(webkit)[ \/]([\w.]+)/.exec(ua) or /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) or /(msie) ([\w.]+)/.exec(ua) or ua.indexOf("trident") >= 0 and /(rv)(?::| )([\w.]+)/.exec(ua) or ua.indexOf("compatible") < 0 and /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) or []
    platform_match = /(ipad)/.exec(ua) or /(iphone)/.exec(ua) or /(android)/.exec(ua) or /(windows phone)/.exec(ua) or /(win)/.exec(ua) or /(mac)/.exec(ua) or /(linux)/.exec(ua) or /(cros)/.exec(ua) or []

    browser: match[3] or match[1] or ""
    version: match[4] or match[2]
    versionNumber: match[2] or "0"
    platform: platform_match[0] or ""

  matched = jQuery.uaMatch(window.navigator.userAgent)
  browser = {}

  if matched.browser
    browser[matched.browser] = true
    browser.version = matched.version
    browser.versionNumber = parseInt(matched.versionNumber)

  if matched.platform
    browser[matched.platform] = true

  # These are all considered mobile platforms, meaning they run a mobile browser
  if browser.android or browser.ipad or browser.iphone or browser["windows phone"]
    browser.mobile = true

  # These are all considered desktop platforms, meaning they run a desktop browser
  if browser.cros or browser.mac or browser.linux or browser.win
    browser.desktop = true

  # Chrome, Opera 15+ and Safari are webkit based browsers
  if browser.chrome or browser.opr or browser.safari
    browser.webkit = true

  # IE11 has a new token so we will assign it msie to avoid breaking changes
  if browser.rv
    ie = "msie"
    
    matched.browser = ie
    browser[ie] = true

  # Opera 15+ are identified as opr
  if browser.opr
    opera = "opera"
    
    matched.browser = opera
    browser[opera] = true

  # Stock Android browsers are marked as safari on Android.
  if browser.safari && browser.android
    android = 'android'

    matched.browser = android
    browser[android] = true
  
  # Assign the name and platform variable
  browser.name = matched.browser
  browser.platform = matched.platform

jQuery.browser = browser
) jQuery, window
