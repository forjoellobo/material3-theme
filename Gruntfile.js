module.exports = function (grunt) {
    // grunt.initConfig({
    //   // Watch task config
    //   watch: {
    //     sass: {
    //       files: "./styles/*.scss",
    //       tasks: ['sass']
    //     }
    //   },
    //   // SASS task config
    //   sass: {
    //       dev: {
    //           files: {
    //               // destination         // source file
    //               "./css/theme.css" : "./styles/theme.scss"
    //           }
    //       }
    //   },
    // });
    grunt.initConfig({
      sass: {
        dev: {
          files: {
            "./css/theme.css" : "./styles/theme.scss"
          }
        }
      },
  
      watch: {
        sass: {
          files: [
            'styles/**/*.scss'
          ],
          tasks: ['sass:dev']
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', 'watch');
  };