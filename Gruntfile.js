module.exports = function(grunt) { 
	grunt.initConfig({
		jshint: {
			files: ['gruntfile.js', 'jquery.browser.js'],

			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
};