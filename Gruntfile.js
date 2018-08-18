module.exports = function(grunt) {
    var aRutasCHTML = [
        './*',
        './ejemplo/*',
        './cargarHTML/rHTML/*'
    ];
    var aRutasSass = ['./src/sass/*'];
    var aRutasJs = ['./src/js/*'];
    var aRutasHandlebars = ['./src/templates/*'];
    var aRutasHandlebarsJs = ['./src/templates/js/*'];

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    noCache: true
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

        watch: {
            //Optiones de configuracion.
            options: {
                nospawn: true,
                livereload: true
            },
            tarea_sass: {
                files: aRutasSass,
                tasks: ['sass']
            },
            tarea_js: {
                files: aRutasJs
            }
        }
        
    });
    
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib');
};