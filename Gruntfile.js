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
        imagemin: {
            dynamic: {                         // Another target
              files: [{
                expand: true,                  // Enable dynamic expansion
                cwd: 'img/',                   // Src matches are relative to this path
                src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                dest: 'img/'                  // Destination path prefix
              }]
            }
        },
        watch: {
            stylus: {
                files: ['css/styl/*', 'css/styl/blocks/*'],
                tasks: 'stylus',
                options: {
                    livereload: true
                }
            },
            html : {
                files: ['*.html'],
                options: {
                    livereload: true
                }
            },
            js : {
                files: ['js/*', 'js/vendor/*'],
                options: {
                    livereload: true
                }
            },
            imagemin : {
                files: ['img/*'],
                tasks: 'imagemin',
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['stylus', 'watch', 'imagemin']);

};