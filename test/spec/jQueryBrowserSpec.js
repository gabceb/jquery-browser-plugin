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