A jQuery plugin for browser detection. jQuery removed support for browser detection on 1.9.1 so it was abstracted into a jQuery plugin

## Installation

Include script *after* the jQuery library:

    <script src="/path/to/jquery.browser.js"></script>

## Usage

Returns true if the current useragent is some version of Microsoft's Internet Explorer. Supports all IE versions including IE11

    $.browser.msie;

Returns true if the current useragent is some version of a Webkit browser (Safari, Chrome and Opera 15+).

    $.browser.webkit;

Returns true if the current useragent is some version of Firefox.

    $.browser.mozilla;

Reading the browser verion
    
    $.browser.version

## Things not included in the original jQuery $.browser implementation

- Detect Windows, Mac, Linux, iPad, iPhone and Android useragents

```javascript
	$.browser.ipad
	$.browser.iphone
	$.browser.android
	$.browser.win
	$.browser.mac
	$.browser.linux
```

- Support for new useragent on IE11
- Support for webkit based Opera browsers

## Development

- Source hosted at [GitHub](https://github.com/gabceb/jquery-browser-plugin)
- Report issues, questions, feature requests on [GitHub Issues](https://github.com/gabceb/jquery-browser-plugin/issues) 

## Attributions

- [Examples and original implementation](http://api.jquery.com/jQuery.browser/)
- [Original Gist used for the plugin](https://gist.github.com/adeelejaz/4714079)