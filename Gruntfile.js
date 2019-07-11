module.exports = function(grunt) {
    var aRutasSass = ['./src/sass/*'];
    var aRutasJs = ['./src/js/*'];
    var aRutasHbs = ['./src/template/*'];

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed', noCache: true
                },
                files: [{
                    expand: true,
                    cwd:    "src/sass/",
                    src:    ["*.sass"],
                    dest: "src/css/",
                    ext:    ".css"
                }]
            }
        },

        handlebars: {
          compile: {
            options: {
              namespace: 'Hbs'
            },
            files: {
              'src/template/dist/main.js': ['src/template/*.hbs']
            }
          }
        },

        uglify: {
            dev: {
                files: {
                    'src/js/dist/main.min.js': [
                        'src/js/*.js'
                    ]
                }
            }
        },

        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            sass: {
                files: aRutasSass,
                tasks: ['sass']
            },
            handlebars: {
                files: aRutasHbs,
                tasks: ['handlebars']
            },
            js: {
                files: aRutasJs,
                tasks: ['uglify']
            },
            index: {
                files: ['./index.html']
            }
        }
        
    });
    
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};