module.exports = function(grunt) { 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['gruntfile.js', 'jquery.browser.js'],

			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},
		uglify: {
			options: {
				banner: '/*!\n * jQuery Browser Plugin <%= pkg.version %>\n * https://github.com/gabceb/jquery-browser-plugin\n *\n * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors\n * http://jquery.org/license\n *\n * Modifications Copyright <%= grunt.template.today("yyyy") %> Gabriel Cebrian\n * https://github.com/gabceb\n *\n * Released under the MIT license\n *\n * Date: <%= grunt.template.today("dd-mm-yyyy")%>\n */'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': 'dist/<%= pkg.name %>.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'uglify']);
};