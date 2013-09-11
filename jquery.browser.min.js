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
(function(e,t,n){"use strict";var r,i;e.uaMatch=function(e){e=e.toLowerCase();var t=/(opr)[\/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];var n=/(ipad)/.exec(e)||/(iphone)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0",platform:n[0]||""}};r=e.uaMatch(t.navigator.userAgent);i={};if(r.browser){i[r.browser]=true;i.version=r.version}if(r.platform){i[r.platform]=true}if(i.chrome||i.opr){i.webkit=true}else if(i.webkit){i.safari=true}if(i.rv){i.msie=true}if(i.opr){i.opera=true}e.browser=i})(jQuery,window)