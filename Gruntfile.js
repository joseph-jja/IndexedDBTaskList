module.exports = function ( grunt ) {

    grunt.initConfig( {
        connect: {
            server: {
                options: {
                    port: 8234,
                    hostname: 'localhost',
                    keepalive: true,
                    livereload: true
                }
            }
        },
        handlebars: {
            compile: {
                files: {
                    'templates/TaskList.js': [ 'templates/TaskList.hbs' ], 
                    'templates/AddEditTask.js': [ 'templates/AddEditTask.hbs' ]
                }
            },
            options: {
                namespace: false,
                amd: true
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-contrib-handlebars' );

    grunt.registerTask( 'default', [ 'handlebars' ] );
};
