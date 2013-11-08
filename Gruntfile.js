/*global module:false*/
module.exports = function(grunt) {
  var packageJson = grunt.file.readJSON('package.json');
  grunt.file.defaultEncoding = 'utf8';
  grunt.config.set('jsFiles', packageJson.jsFiles);
  grunt.config.set('cssFiles', packageJson.cssFiles);
  grunt.config.set('projectName', packageJson.name);
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: packageJson,
    banner: '',
    // '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    //   '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    //   '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    //   '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    //   ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true,
        separator: '\n;/*separator*/\n'
      },
      dist: {
        src: ['lib/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      },
      libs: {
        files: {
          'libs/lib.js' : grunt.config.get('jsFiles').libs,
          'libs/lib.css' : grunt.config.get('cssFiles').libs
        }
      }
    },
    jst: {
      compile: {
        options: {
          templateSettings: {
            // interpolate : /\{\{(.+?)\}\}/g
          },
          processName: function(filename) {
            var names = filename.split('/');
            return names[names.length - 1].replace(/\.html/,'');
          }
        },
        files: {
          "src/templates.js": ["templates/*.html"]
        }
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        report: 'gzip',
        sourceMap: function(path){
          return path.replace(/\.js$/, '.map');
        }
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      },
      libs: {
        src: 'libs/lib.js',
        dest: 'libs/lib.min.js',
        
      }
    },
    cssmin: {
      libs: {
        files: {
          'libs/lib.min.css': 'libs/lib.css'
        }
      }
    },

    copy: {
      libs: {
        files: [
          {expand: true,flatten: true, src: ['bower_components/**/*min.js', 'bower_components/**/*min.map'], dest: 'libs/', filter: 'isFile'},
        ]
      }
    },
    clean: {
      libs: {
        src: ["libs/**"]
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jst');

  // grunt.registerTask('copyLibFiles', 'copy library files', function() {
  //   grunt.util.recurse(grunt.file.readJSON('package.json').libs, function(path){
  //     var names = path.split('/');
  //     grunt.file.copy(path, 'libs/' + names[names.length - 1]);
  //   }, null)
  // });

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

  grunt.registerTask('refreshLibs', ['clean:libs', 'concat:libs', 'uglify:libs', 'cssmin:libs']);

  grunt.registerTask('initProject', 'init project', function(){
    var projectName = grunt.config.get('projectName');
    console.log(grunt.template.process);
  });
};
