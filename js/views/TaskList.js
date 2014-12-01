define( [ 'jquery', 'backbone' ], function ( $, Backbone ) {

    var TaskList = Backbone.View.extend( {
        el: $( '#taskListID' ),
        events: {
            "change #filterDisplay": 'processFilter',
            "click #addTaskID": 'addTask',
            "click button.edit-task": 'editTask'
        },
        initialize: function () {
            this.render();
        },
        render: function () {
            var self = this;
            require( [ 'templateDir/TaskList', 'handlebars', 'indexedDB', 'constants' ], function ( template, Handlebars, Idb, Constants ) {
                var db, content;

                db = new Idb( Constants.DBName );
                db.list( Constants.StoreName, function ( data ) {
                    content = template( {
                        taskListItem: data
                    } );
                    self.$el.html( content );

                    self.colorize();

                } );
            } );
        },
        colorize: function () {
            var i = 0;
            $( "#taskList tr" ).each( function ( idx, x ) {
                if ( i % 2 === 0 ) {
                    x.className += ' even';
                } else {
                    x.className += ' odd';
                }
                if ( x.className.indexOf( "hidden" ) === -1 ) {
                    i += 1;
                }
            } );
        },
        addTask: function () {
            require( [ 'taskView' ], function ( TaskView ) {
                var x = new TaskView();
            } );
        },
        editTask: function ( e ) {
            var target = e.target,
                data;
            data = target.innerHTML.replace( /Edit\ /g, '' ).replace( /[\(\)]/g, '' );
            require( [ 'taskView' ], function ( TaskView ) {
                var x = new TaskView( {
                    id: data
                } );
            } );
        },
        exportData: function ( callback ) {
            var self = this;
            require( [ 'indexedDB', 'constants' ], function ( Idb, Constants ) {
                var db;

                db = new Idb( Constants.DBName );
                db.list( Constants.StoreName, function ( data ) {
                    callback( data );
                    db.close();
                } );
            } );
        },
        processFilter: function () {
            var time, list, self = this,
                day = new Date(),
                selectedValue = $( "#filterDisplay" ).val();

            list = $( "#taskList tr" );
            if ( selectedValue === 'week' ) {
                time = 7 * 24 * 60 * 60 * 1000;
                day.setTime( day.getTime() - time );
            } else if ( selectedValue === 'month' ) {
                time = 30 * 24 * 60 * 60 * 1000;
                day.setTime( day.getTime() - time );
            }

            $( "#taskList tr" ).each( function ( idx, x ) {
                var cols = $( "td", x ),
                    tdCell, dt;

                $( x ).removeClass( "hidden" );
                $( x ).removeClass( "even" );
                $( x ).removeClass( "odd" );
                if ( selectedValue === 'working' ) {
                    tdCell = cols.get( 4 );
                    if ( tdCell && tdCell.innerHTML.toLowerCase() !== 'working' ) {
                        $( x ).addClass( "hidden" );
                    }
                } else if ( selectedValue === 'all' ) {
                    // don't really need to do anything here
                    cols.get( 4 );
                } else if ( typeof time !== 'undefined' ) {
                    tdCell = cols.get( 3 );
                    if ( tdCell ) {
                        dt = Date.parse( tdCell.innerHTML );
                        if ( dt < day.getTime() ) {
                            $( x ).addClass( "hidden" );
                        }
                    }
                }
            } );
            self.colorize();
        }
    } );

    return TaskList;
} );
