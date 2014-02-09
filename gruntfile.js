module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/build/css/application.css': 'assets/src/scss/application.scss'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/src/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/build/img/'
        }]
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'assets/src/img/',
        src: ['**/*.pdf'],
        dest: 'assets/build/img/',
      },
    },
    watch: {
      css: {
        files: ['assets/src/scss/**/*.scss'],
        tasks: ['sass'],
      },
      img: {
        files: ['assets/src/img/**/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
      },
      pdf: {
        files: ['assets/src/img/**/*.pdf'],
        tasks: ['copy'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'imagemin', 'copy', 'watch']);
  grunt.registerTask('build', ['sass', 'imagemin', 'copy']);

};