// #################################################
// # disable default values for get method request #
// #################################################
Ext.Loader.config.disableCaching = false;
Ext.Loader.setConfig({
    disableCaching: false
});

// #################################################
// # my defined global variable                    #
// #################################################
Ext.define('MyVariables',{
 singleton: true,
 myRequest_server: '20.0.2.224:8080',
 reLoad_time:10000,
 template_id:'',
 template_params:[],
 configures_builder_name:'',
 detail_activate_in_remove_view: true
});

// #################################################
// # csrf token                                    #
// #################################################
Ext.require(["Ext.util.Cookies", "Ext.Ajax"], function(){
    // Add csrf token to every ajax request
    var token = Ext.util.Cookies.get('csrftoken');
    if(!token){
        Ext.Error.raise("Missing csrftoken cookie");
    } else {
        Ext.Ajax.defaultHeaders = Ext.apply(Ext.Ajax.defaultHeaders || {}, {
            'X-CSRFToken': token
        });
    }
});

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
