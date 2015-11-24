( function () {

    var paths = {
        jquery: 'libs/jquery-1.11.1',
        handlebars: 'libs/handlebars-v4.0.5',
        backbone: 'libs/backbone',
        underscore: 'libs/underscore',
        taskList: '/js/views/TaskList',
        taskModel: '/js/models/Task',
        taskView: '/js/views/Task',
        constants: '/js/Constants',
        indexedDB: '/js/IndexedDB',
        templateDir: '/templates'
    };

    var shims = {
        jquery: {
            exports: 'jQuery'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        backbone: {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    };

    require.config( {
        paths: paths,
        shim: shims
    } );

} )();
