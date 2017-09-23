module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    },

  	watch: {
  		scripts: {
  			files: ['sass/*.sass'],
  			tasks: ['sass'],
  			options: {
  				spawn: false,
  			},
  		}
  	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['sass', 'jshint']);

};