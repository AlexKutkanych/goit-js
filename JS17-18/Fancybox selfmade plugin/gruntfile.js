module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/src/*.js'],
      dest: 'js/dist/script.main.js',
    },
  },
  uglify: {
  dist: {
    src: ['js/dist/script.main.js'],
    dest: 'js/dist/script.main.min.js',
  },
}
  });


  grunt.initConfig({
    concat_css: {
    options: {
      // Task-specific options go here.
    },
    all: {
      src: ["css/src/*.css"],
      dest: "css/dist/style.main.css"
    },
  },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
    target: {
      files: {
        'css/dist/style.main.min.css': ['css/dist/style.main.css']
      }
    }

}
});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('default', ['cssmin', 'concat_css']);

};