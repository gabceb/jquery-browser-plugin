module.exports = function(grunt) { 
  grunt.initConfig({
  	pkg : grunt.file.readJSON('package.json'),
    log: {
    	name: '<%= pkg.name %>',
      	version: '<%= pkg.version %>'
    }
  });
};