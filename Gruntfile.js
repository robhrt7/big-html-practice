module.exports = function(grunt) {

    // Tasks
    grunt.initConfig({
        uncss: {
          dist: {
            files: {
              'tidy.css': ['index.html']
              }
            }
        }
    });

    grunt.loadNpmTasks('grunt-uncss');
};