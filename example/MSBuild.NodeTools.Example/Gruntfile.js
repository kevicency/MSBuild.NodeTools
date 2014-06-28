'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({
    copy: {
      debug: {
        src: "Gruntfile.js",
        dest: "bin/Debug/Gruntfile.js"
      }
    }
  });
  grunt.registerTask('build-Debug', ["copy:debug"]);
};
