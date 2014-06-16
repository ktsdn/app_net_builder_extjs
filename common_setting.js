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
 myRequest_server: '192.168.42.135:8080',
 reLoad_time:10000,
 template_id:'',
 template_params:[],
 configures_builder_name:'',
 detail_activate_in_remove_view: true,
 login_token_from_django:'',
});

// #################################################
// # storage : sessionstorage, localstorage        #
// #################################################
Ext.define('Login', {
    fields: ['JWT_token'],
    extend: 'Ext.data.Model',
    proxy: {
        type: 'sessionstorage',
        id  : 'Login_JWT_token'
    }
});

// #################################################
// # csrf token                                    #
// #################################################
Ext.require(["Ext.util.Cookies", "Ext.Ajax"], function(){
    // Add csrf token to every ajax request
    var token = Ext.util.Cookies.get('csrftoken');
    var jwt_token = Ext.util.Cookies.get('jwt_token');
    if(!token){
        Ext.Error.raise("Missing csrftoken cookie");
    } else {
        if(jwt_token){
          Ext.Ajax.defaultHeaders = Ext.apply(Ext.Ajax.defaultHeaders || {}, {
              'X-CSRFToken': token,
              'Authorization': 'JWT '+jwt_token 
          });
        } else{
          Ext.Ajax.defaultHeaders = Ext.apply(Ext.Ajax.defaultHeaders || {}, {
              'X-CSRFToken': token,
          });
        }
    }
});
