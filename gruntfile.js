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

	imagemin: {
		dynamic: {
			files: [{
				expand: true,
				cwd: 'images/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'images/build/'
        	}]
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
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['sass'] ['jshint']);

};