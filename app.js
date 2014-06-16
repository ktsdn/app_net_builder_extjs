// #################################################
// # main                                          #
// #################################################
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'net_builder',

    appFolder: 'app',
    controllers: [ 'Logins' ],

    launch: function() {

        Ext.create('Ext.container.Viewport', {

            layout: 'absolute',
            items:[{
                 title: 'KT Switch Auto-Builder System',
                 x: 50,
                 y: 50,
                 width: 300,
                 height: 120,
                 xtype : 'mainLoginview',
                 html: 'Positioned at x:50, y:50'
            },
            ]

        });
    }
});
