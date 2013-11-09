util = require('utils');

ua = {
	chrome : {
		windows: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.48 Safari/537.36",
		mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36"
	},
	safari : {
		mac: "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.71 (KHTML, like Gecko) Version/7.0 Safari/537.71",
		ipad: "Mozilla/5.0(iPad; U; CPU iPhone OS 7_0_3 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B508 Safari/9537.53",
		iphone: "Mozilla/5.0(iPhone; CPU iPhone OS 7_0_3 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B508 Safari/9537.53"
	},
	firefox : {
		windows: "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0",
		mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:25.0) Gecko/20100101 Firefox/25.0"
	},
	ie : {
		v_9: "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/5.0)",
		v_10: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)",
		v_11: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
	}
}

util.dump("Casper tests running using " + casper.cli.get(1));

casper.test.begin("when using Chrome", 1, function(test) {
  casper.userAgent(ua.chrome.windows);

  casper.start("https://www.blendspace.com").then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});
  	
  	test.assert(browser.chrome);

  }).run(function(){
  	test.done();
  });
});

casper.test.begin("when using Chrome on Windows", 1, function(test) {
  casper.userAgent(ua.chrome.mac);

  casper.start("https://www.blendspace.com").then(function(){
  	
  	var browser = casper.evaluate(function(){
  		return $.browser;
  	});
  	
  	test.assert(browser.chrome);

  }).run(function(){
  	test.done();
  });
});

/*
describe("jQuery Browser", function() {
  var userAgent;

  describe("when using Chrome", function() {
    beforeEach(function() {
      userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.48 Safari/537.36"
    });

    it("should detect the correct browser", function() {
      expect($.browser.chrome).toBe(true);
    });

    it("should detect the correct version", function() {
      expect($.browser.version).toEqual("31.0.1650.48");
    });

    it("should that the browser is webkit based", function() {
      expect($.browser.webkit).toBe(true);
    });

  });

  describe("when using Safari", function() {
    beforeEach(function() {
      userAgent = "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.71 (KHTML, like Gecko) Version/7.0 Safari/537.71"
    });

    it("should detect the correct browser", function() {
      expect($.browser.safari).toBe(true);
    });

    it("should detect the correct version", function() {
      expect($.browser.version).toEqual("7.0");
    });

    it("should that the browser is webkit based", function() {
      expect($.browser.webkit).toBe(true);
    });

  });

  describe("when using Safari on iPad", function() {
    beforeEach(function() {
      userAgent = ""
    });

    it("should detect the correct browser", function() {
      expect($.browser.safari).toBe(true);
    });

    it("should detect the correct version", function() {
      expect($.browser.version).toEqual("7.0");
    });

    it("should that the browser is webkit based", function() {
      expect($.browser.webkit).toBe(true);
    });

  });

  describe("when using Opera", function() {
    beforeEach(function() {
      userAgent = ""
    });

    it("should detect the correct browser", function() {
      expect($.browser.safari).toBe(true);
    });

    it("should detect the correct version", function() {
      expect($.browser.version).toEqual("7.0");
    });

    it("should that the browser is webkit based", function() {
      expect($.browser.webkit).toBe(true);
    });

  });

  describe("when using IE9 and below", function() {
    beforeEach(function() {
      userAgent = ""
    });

    it("should detect the correct browser", function() {
      expect($.browser.safari).toBe(true);
    });

    it("should detect the correct version", function() {
      expect($.browser.version).toEqual("7.0");
    });

    it("should that the browser is webkit based", function() {
      expect($.browser.webkit).toBe(true);
    });

  });

  describe("when using IE10", function() {
    beforeEach(function() {
      userAgent = ""
    });

    it("should detect the correct browser", function() {
      expect($.browser.safari).toBe(true);
    });

    it("should detect the correct version", function() {
      expect($.browser.version).toEqual("7.0");
    });

    it("should that the browser is webkit based", function() {
      expect($.browser.webkit).toBe(true);
    });

  });

  describe("when using IE11", function() {
    beforeEach(function() {
      userAgent = ""
    });

    it("should detect the correct browser", function() {
      expect($.browser.safari).toBe(true);
    });

    it("should detect the correct version", function() {
      expect($.browser.version).toEqual("7.0");
    });

    it("should that the browser is webkit based", function() {
      expect($.browser.webkit).toBe(true);
    });

  });

});
*/
