'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.less'
                }
            }
        },
        watch: {
            files: 'css/*.less',
            tasks: 'less'
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });

    grunt.registerTask('css', ['less']);
    grunt.registerTask('default', ['browserSync', 'watch']);
}