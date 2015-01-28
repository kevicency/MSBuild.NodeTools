module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    copy: {
      debug: {
        src: "Gruntfile.js",
        dest: "bin/Debug/Gruntfile.js"
      }
    },
    clean: ["bin/Debug/Gruntfile.js"]
  });

  grunt.registerTask('build-Debug', ["copy:debug"]);
};
