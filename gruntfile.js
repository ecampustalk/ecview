module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'assets/css/main.css': ['assets/scss/main.scss']
                }
            }
        },

        cssmin: {
            target: {
                src: 'assets/css/main.css',
                dest: 'assets/css/main.min.css'
            }
        },

        serve: {
            options: {
                port: 9000
            }
        },
        purifycss: {
            options: {

            },
            target: {
                src: ['app/layout/views/{,*/}*.html'], // Observe all html files
                css: ['assets/vendors/{,*/}/css/*.css','assets/{,*/}*.css'], // Take all css files into consideration
                dest: 'css/tmp.css' // Write to this path
            }
        },

        browserify: {
            dist: {
                files: {
                    'dist/js/app.js': [
                        'app/app.config.js',
                        'app/shared/**/*.module.js',
                        'app/shared/**/*.factory.js',
                        'app/shared/**/*.directive.js',
                        'app/shared/**/*.controller.js',
                        'app/shared/**/*.routes.js',
                        'app/modules/**/*.module.js',
                        'app/modules/**/*.factory.js',
                        'app/modules/**/*.directive.js',
                        'app/modules/**/*.controller.js',
                        'app/modules/**/*.routes.js'

                    ]
                }
            }
        },
        copy: {
            app: {
                // This copies all the html and css into the dist/ folder
                expand: true,
                cwd: 'app/',
                src: ['**/*.html', '**/*.css'],
                dest: 'dist/app/',
            },
            assets: {
                // This copies all the html and css into the dist/ folder
                expand: true,
                cwd: 'assets/',
                src: ['**/*.*'],
                dest: 'dist/assets/',
            },
            index: {
                // This copies all the html and css into the dist/ folder
                expand: true,
                src: ['index.html'],
                dest: 'dist/',
            },
        },

        watch: {
            sass: {
                files: 'assets/scss/{,*/}*.{scss,sass}',
                tasks: ['sass']
            },
            js: {
                files: 'app/**/*.*.js',
                tasks: ['browserify']
            }
        }

    });

    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-purifycss')
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');
    grunt.registerTask('default', 'grunt-serve');
    grunt.registerTask('build', ['sass','cssmin','serve']);

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // The default tasks to run when you type: grunt
    grunt.registerTask('publish', ['browserify', 'copy']);
};