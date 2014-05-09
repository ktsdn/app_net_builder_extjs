// #################################################
// # disable default values for get method request #
// #################################################
Ext.Loader.setConfig({
    disableCaching: false
});

// #################################################
// # my defined global variable                    #
// #################################################
Ext.define('MyVariables',{
 singleton: true,
 myRequest_server: '192.168.42.135:8080',
 reLoad_time:30000,
 template_id:'',
 template_params:[],
 configures_builder_name:''
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
