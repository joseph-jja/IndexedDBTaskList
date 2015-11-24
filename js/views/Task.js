define( [ 'jquery', 'backbone', 'taskModel' ], function ( $, Backbone, TModel ) {

    var Task = Backbone.View.extend( {
        el: $( '#taskEditID' ),
        initialize: function ( options ) {
            var self = this;
            if ( typeof options !== 'undefined' && options[ 'id' ] ) {
                this.model = new TModel( {
                    id: options[ 'id' ]
                } );
                this.model.fetch( {
                    callback: function ( results ) {
                        var i;
                        for ( i in results ) {
                            self.model.set( i, results[ i ] );
                        }
                    }
                } );
            } else {
                this.model = new TModel();
            }
            this.render();
        },
        events: {
            "click #saveTask": 'saveTask',
            "click #cancelTask": 'cancelTask'
        },
        saveTask: function () {
            var model, workDate = new Date(),
                taskID,
                longDesc, wdField, longDescField;

            wdField = $( "#work_date" );
            if ( wdField.val() && wdField.val() !== "" ) {
                workDate = wdField.val();
            }
            longDescField = $( "#long_description" );
            if ( !longDescField.val() || longDescField.val() === "" ) {
                longDesc = $( "#short_description" ).val();
            } else {
                longDesc = longDescField.val();
            }
            model = new TModel( {
                'work_date': workDate,
                'short_description': $( "#short_description" ).val(),
                'long_description': longDesc,
                'completed': $( "#completed" ).is( ':checked' )
            } );

            taskID = $( "#task_id" ).val();
            if ( taskID && taskID.length > 0 ) {
                model.set( 'id', taskID );
            }
            model.save();
        },
        cancelTask: function () {
            this.remove();
        },
        render: function () {
            var self = this;
            require( [ 'handlebars', 'templateDir/AddEditTask' ], function ( hb, template ) {
                var workdate = new Date().toUTCString();

                self.$el.html( template( {
                    'work_date': workdate
                } ) );

                if ( self.model && self.model.get( 'id' ) ) {
                    if ( self.model.get( 'completed' ) ) {
                        //$( "#completed" ).is( self.model.get( 'completed' )  )
                    }
                    $( "#work_date" ).val( self.model.get( 'work_date' ) );
                    $( "#long_description" ).val( self.model.get( 'long_description' ) );
                    $( "#short_description" ).val( self.model.get( 'short_description' ) );
                    $( "#task_id" ).val( self.model.get( 'id' ) );
                }
            } );
        }
    } );

    return Task;
} );
