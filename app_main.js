// #################################################
// # main                                          #
// #################################################
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'net_builder',

    appFolder: 'app',
    controllers: [ 'Templates',
                   'Configures' ],

    launch: function() {

        // #########################
        // # start app main_viewer #
        // #########################
        Ext.create('Ext.container.Viewport', {

            layout: 'accordion',
            items:[{
                     title: 'Show the templates list',
                     xtype: 'templateslist',
            },
            {
                     title: 'Show the configuration list',
                     xtype: 'configureslist',
            }
            ]

        });
    }
});
