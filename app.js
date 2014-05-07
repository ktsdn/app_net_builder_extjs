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
 ajax_response_server: '20.0.2.225:8088',
 template_id:'',
 template_params:[]
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
    controllers: [ 'Templates' ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {

            layout: 'accordion',
            items:[{
                     title: 'Templates',
                     xtype: 'templateslist',
            },
            {
                     title: 'Panel 2',
                     html: 'Content'
            }
            ]

        });
    }
});