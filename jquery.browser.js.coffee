((jQuery, window, undefined_) ->
  "use strict"
  matched = undefined
  browser = undefined

  jQuery.uaMatch = (ua) ->
    ua = ua.toLowerCase()
    match = /(chrome)[ \/]([\w.]+)/.exec(ua) or /(webkit)[ \/]([\w.]+)/.exec(ua) or /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) or /(msie) ([\w.]+)/.exec(ua) or ua.indexOf("compatible") < 0 and /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) or []
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

jQuery.browser = browser
) jQuery, window