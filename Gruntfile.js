module.exports = function(grunt) {

    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    'compress': false
                    //'paths': ['css/styl/']
                },
                files: {
                    'css/main.css': 'css/styl/main.styl'
                }
            }
        },
        watch: {
            stylus: {
                files: ['css/styl/*', 'css/styl/blocks/*'],
                tasks: 'stylus'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['stylus', 'watch']);

};