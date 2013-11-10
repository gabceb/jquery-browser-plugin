util = require('utils');

ua = {
	chrome : {
		windows: "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36",
		mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36",
        android: "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Mobile Safari/537.36",
        linux: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36",
		version : "32.0.1664.3"
	},
	safari : {
		mac: "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.71 (KHTML, like Gecko) Version/7.0 Safari/537.71",
		ipad: "Mozilla/5.0(iPad; U; CPU iPhone OS 7_0_3 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B508 Safari/9537.53",
		iphone: "Mozilla/5.0(iPhone; CPU iPhone OS 7_0_3 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B508 Safari/9537.53",
		version: "7.0"
	},
	firefox : {
		windows: "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0",
		mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:25.0) Gecko/20100101 Firefox/25.0",
        linux: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:25.0) Gecko/20100101 Firefox/25.0",
		version: "25.0"
	},
	ie : {
		v_9: "Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)",
		v_10: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)",
		v_11: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
	},
  opera : {
    v_15: {
      mac : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.20 Safari/537.36 OPR/15.0.1147.18",
      windows: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.20 Safari/537.36 OPR/15.0.1147.18",
      version: "15.0.1147.18"
    },
    v_10: {
      mac : "Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00",
      windows: "Opera/9.80 (Windows NT 6.1; U; en) Presto/2.6.30 Version/10.00",
      version: "10.00"
    }
  }
}

test_url = "https://www.blendspace.com"

util.dump("Casper tests running using " + test_url);

casper.test.begin("when using Chrome on Windows", 4, function(test) {
  casper.userAgent(ua.chrome.windows);

  casper.start(test_url).then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});
  	
  	test.assert(browser.chrome, "Browser should be Chrome");
  	test.assert(browser.webkit, "Browser should be webkit based");
  	test.assertEquals(browser.version, ua.chrome.version, "Version should be " + ua.chrome.version);

  	test.assert(browser.win, "Platform should be Windows");

  }).run(function(){
  	test.done();
  });
});

casper.test.begin("when using Chrome on Mac", 4, function(test) {
  casper.userAgent(ua.chrome.mac);

  casper.start(test_url).then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});
  	
  	test.assert(browser.chrome, "Browser should be Chrome");
  	test.assert(browser.webkit, "Browser should be webkit based");
  	test.assertEquals(browser.version, ua.chrome.version, "Version should be " + ua.chrome.version);

  	test.assert(browser.mac, "Platform should be mac");

  }).run(function(){
  	test.done();
  });
});

casper.test.begin("when using Chrome on an Android device", 4, function(test) {
  casper.userAgent(ua.chrome.android);

  casper.start(test_url).then(function(){
    
    var browser = casper.evaluate(function(){
      return $.browser;
    });
    
    test.assert(browser.chrome, "Browser should be Chrome");
    test.assert(browser.webkit, "Browser should be webkit based");
    test.assertEquals(browser.version, ua.chrome.version, "Version should be " + ua.chrome.version);

    test.assert(browser.android, "Platform should be android");

  }).run(function(){
    test.done();
  });
});

casper.test.begin("when using Chrome on Linux", 4, function(test) {
  casper.userAgent(ua.chrome.linux);

  casper.start(test_url).then(function(){
    
    var browser = casper.evaluate(function(){
      return $.browser;
    });
    
    test.assert(browser.chrome, "Browser should be Chrome");
    test.assert(browser.webkit, "Browser should be webkit based");
    test.assertEquals(browser.version, ua.chrome.version, "Version should be " + ua.chrome.version);

    test.assert(browser.linux, "Platform should be linux");

  }).run(function(){
    test.done();
  });
});

casper.test.begin("when using Firefox on Windows", 4, function(test) {
  casper.userAgent(ua.firefox.windows);

  casper.start(test_url).then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});

  	test.assert(browser.mozilla, "Browser should be Mozilla");
  	test.assertEquals(browser.version, ua.firefox.version, "Version should be " + ua.firefox.version);
  	test.assert(browser.win, "Platform should be Windows");

  	test.assertFalsy(browser.webkit, "Browser should NOT be webkit based");

  }).run(function(){
  	test.done();
  });
});

casper.test.begin("when using Firefox on Mac", 4, function(test) {
  casper.userAgent(ua.firefox.mac);

  casper.start(test_url).then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});
  	
  	test.assert(browser.mozilla, "Browser should be Mozilla");
  	test.assertEquals(browser.version, ua.firefox.version, "Version should be " + ua.firefox.version);
  	test.assert(browser.mac, "Platform should be mac");

  	test.assertFalsy(browser.webkit, "Browser should NOT be webkit based");

  }).run(function(){
  	test.done();
  });
});

casper.test.begin("when using Firefox on Linux", 4, function(test) {
  casper.userAgent(ua.firefox.linux);

  casper.start(test_url).then(function(){
    
    var browser = casper.evaluate(function(){
      return $.browser;
    });
    
    test.assert(browser.mozilla, "Browser should be Mozilla");
    test.assertEquals(browser.version, ua.firefox.version, "Version should be " + ua.firefox.version);
    test.assert(browser.linux, "Platform should be linux");

    test.assertFalsy(browser.webkit, "Browser should NOT be webkit based");

  }).run(function(){
    test.done();
  });
});

casper.test.begin("when using Safari on Mac", 3, function(test) {
  casper.userAgent(ua.safari.mac);

  casper.start(test_url).then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});
  	
  	test.assert(browser.safari, "Browser should be Safari");
  	test.assert(browser.webkit, "Browser should be webkit based");
  	//test.assertEquals(browser.version, ua.safari.version, "Version should be " + ua.safari.version);

  	test.assert(browser.mac, "Platform should be mac");

  }).run(function(){
  	test.done();
  });
});

casper.test.begin("when using Safari on iPad", 3, function(test) {
  casper.userAgent(ua.safari.ipad);

  casper.start(test_url).then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});
  	
  	test.assert(browser.safari, "Browser should be Safari");
  	test.assert(browser.webkit, "Browser should be webkit based");
  	//test.assertEquals(browser.version, ua.safari.version, "Version should be " + ua.safari.version);

  	test.assert(browser.ipad, "Platform should be iPad");

  }).run(function(){
  	test.done();
  });
});

casper.test.begin("when using Safari on iPhone", 3, function(test) {
  casper.userAgent(ua.safari.iphone);

  casper.start(test_url).then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});
  	
  	test.assert(browser.safari, "Browser should be Safari");
  	test.assert(browser.webkit, "Browser should be webkit based");
  	//test.assertEquals(browser.version, ua.safari.version, "Version should be " + ua.safari.version);

  	test.assert(browser.iphone, "Platform should be iPhone");

  }).run(function(){
  	test.done();
  });
});

casper.test.begin("when using IE9", 4, function(test) {
  casper.userAgent(ua.ie.v_9);

  casper.start(test_url).then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});
  	
  	test.assert(browser.msie, "Browser should be IE");
  	test.assertEquals(browser.version, "9.0", "Version should be 9.0");
  	test.assert(browser.win, "Platform should be Windows");

  	test.assertFalsy(browser.webkit, "Browser should NOT be webkit based");

  }).run(function(){
  	test.done();
  });
});

casper.test.begin("when using IE10", 4, function(test) {
  casper.userAgent(ua.ie.v_10);

  casper.start(test_url).then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});
  	
  	test.assert(browser.msie, "Browser should be IE");
  	test.assertEquals(browser.version, "10.0", "Version should be 10.0");
  	test.assert(browser.win, "Platform should be Windows");

  	test.assertFalsy(browser.webkit, "Browser should NOT be webkit based");

  }).run(function(){
  	test.done();
  });
});

casper.test.begin("when using IE11", 4, function(test) {
  casper.userAgent(ua.ie.v_11);

  casper.start(test_url).then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});
  	
  	test.assert(browser.msie, "Browser should be IE");
  	test.assertEquals(browser.version, "11.0", "Version should be 11.0");
  	test.assert(browser.win, "Platform should be Windows");

  	test.assertFalsy(browser.webkit, "Browser should NOT be webkit based");

  }).run(function(){
  	test.done();
  });
});

casper.test.begin("when using Opera 15+ on Windows", 4, function(test) {
  casper.userAgent(ua.opera.v_15.windows);

  casper.start(test_url).then(function(){
    
    var browser = casper.evaluate(function(){
      return $.browser;
    });
    
    test.assert(browser.opera, "Browser should be Opera");
    test.assertEquals(browser.version, ua.opera.v_15.version);
    test.assert(browser.win, "Platform should be Windows");

    test.assert(browser.webkit, "Browser should be webkit based");

  }).run(function(){
    test.done();
  });
});

casper.test.begin("when using Opera 15+ on Mac", 4, function(test) {
  casper.userAgent(ua.opera.v_15.mac);

  casper.start(test_url).then(function(){
    
    var browser = casper.evaluate(function(){
      return $.browser;
    });
    
    test.assert(browser.opera, "Browser should be Opera");
    test.assertEquals(browser.version, ua.opera.v_15.version);
    test.assert(browser.mac, "Platform should be Mac");

    test.assert(browser.webkit, "Browser should be webkit based");

  }).run(function(){
    test.done();
  });
});

casper.test.begin("when using Opera 10 on Windows", 4, function(test) {
  casper.userAgent(ua.opera.v_10.windows);

  casper.start(test_url).then(function(){
    
    var browser = casper.evaluate(function(){
      return $.browser;
    });
    
    test.assert(browser.opera, "Browser should be Opera");
    test.assertEquals(browser.version, ua.opera.v_10.version);
    test.assert(browser.win, "Platform should be Windows");

    test.assertFalsy(browser.webkit, "Browser should NOT be webkit based");

  }).run(function(){
    test.done();
  });
});

casper.test.begin("when using Opera 10 on Mac", 4, function(test) {
  casper.userAgent(ua.opera.v_10.mac);

  casper.start(test_url).then(function(){
    
    var browser = casper.evaluate(function(){
      return $.browser;
    });
    
    test.assert(browser.opera, "Browser should be Opera");
    test.assertEquals(browser.version, ua.opera.v_10.version);
    test.assert(browser.mac, "Platform should be Mac");

    test.assertFalsy(browser.webkit, "Browser should NOT be webkit based");

  }).run(function(){
    test.done();
  });
});
