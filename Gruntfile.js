/*global module:false*/
module.exports = function (grunt) {

  /** 
   * Load required Grunt tasks. These are installed based on the versions listed
   * in `package.json` when you do `npm install` in this directory.
   */

  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-recess');
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Versioning Stuff
  grunt.loadNpmTasks('grunt-conventional-changelog');

  // Project configuration.
  grunt.initConfig({

    /**
     * We read in our `package.json` file so we can access the package name and
     * version. It's already there, so we don't repeat ourselves here.
     */
    pkg: grunt.file.readJSON("package.json"),

    // Configuration Directory


    // Metadata
    // =====================================
    meta: {
      version: '0.1.0'
    },

    // Banner to be included on files
    // =====================================
    banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '* http://PROJECT_WEBSITE/\n' + '* Copyright (c) <%= grunt.template.today("yyyy") %> ' + 'YOUR_NAME; Licensed MIT */\n',

    /**
     * Creates a changelog on a new version.
     */
    changelog: {
      options: {
        dest: 'CHANGELOG.md',
        template: 'changelog.tpl'
      }
    },

    /**
     * The directories to delete when `grunt clean` is executed.
     */
    clean: [
      '<%= build_dir %>',
      '<%= compile_dir %>'
    ],

    // Watch Less stylesheets
    // =====================================
    watch: {
      less: {
        files: ['_source/less/**/*.less'],
        tasks: ['less:development']
      }
    },

    // Compile Less stylesheets
    // =====================================
    less: {
      development: {
        options: {
          strictMath: true,
          sourceMap: false
        },
        files: {
          "application/assets/css/bootstrap.css": "_source/less/bootstrap/bootstrap.less",
          "application/assets/css/<%= pkg.name %>-<%= pkg.version %>.css": "_source/less/main.less"
        }
      }
    },

    // JSHINT
    // =====================================
    jshint: {
      src: [
        'application/assets/js/*.js',
        // Angular stuff
        'application/app/*.js',
        'application/app/**/*.js',
      ],
      gruntfile: [
        'Gruntfile.js'
      ],
      options: {
        curly: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true
      },
      globals: {}
    }

  });


  // Watch CSS Development
  grunt.registerTask('watchless', ['watch']);

  // Default task.
  // grunt.registerTask('default', ['jshint', 'concat']);

};
