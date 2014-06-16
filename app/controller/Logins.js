Ext.define('net_builder.controller.Logins', {
    extend: 'Ext.app.Controller',

    views: [ 'logins.initlogin' ],

    // ############################
    // # action definition        #
    // ############################
    init: function() {
       this.control({

         'mainLoginview > form':{
                     // #######################
                     // # refresh method      #
                     // #######################
                     render: this.onPanelRendered
         },
         'mainLoginview button[action=login]':{
                     click: this.processLogin
         },
         'mainLoginview button[action=clear]':{
                     click: this.clearFormfield
         },


       }); // end of this.control({
    }, // end of init: function() {


   // ############################
   // # function definition      #
   // ############################
   onPanelRendered: function(){
           var store = Ext.create('Ext.data.Store', {
              model: "Login"
           });
           store.getProxy().clear('jwt_token');
           Ext.util.Cookies.clear('jwt_token');
    
   },

   processLogin: function(button){
         var win    = button.up('form'),
         form   = win.down('form'),
         record = form.getRecord(),
         values = form.getValues();
         local_auth_username=values.auth_username;
         local_auth_password=values.auth_password;
         var token = Ext.util.Cookies.get('csrftoken');

         Ext.Ajax.request({
             withCredentials:true,
             cors:true,
             url: 'http://'+MyVariables.myRequest_server+'/api-token-auth/',
             method: 'POST',
             useDefaultXhrHeader: false,
             disableCaching: true,
             // #####################################
             // # basic authentication ajax request #
             // #####################################          
             // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
             headers: { 'Content-Type': 'application/json' },
             //           'X-Requested-With' : '' },
             //           'Authorization': 'Basic '+Base64.encode(local_auth_string)},
             scope:this,

             // below, 'Content-Type': 'application/x-www-form-urlencoded' (form data)
             // params: {
             //    csrfmiddlewaretoken : token,
             //    username : local_auth_username,
             //    password : local_auth_password,
             //    next : '/net_builder/config_templates/1/'
             // },
         
             // below : 'Content-Type': 'application/json'
             jsonData: Ext.encode(values),
     
             disableCaching:true,
             success: this.onSuccess_login,
             failure: this.onFailure_login
         });         

   },

   onSuccess_login: function(response, opts){
           var jsonData = Ext.decode(response.responseText);
           MyVariables.login_token_from_django = jsonData.token;            
           // after login success
           window.location.href = 'app_main.html';
           var store = Ext.create('Ext.data.Store', {
              model: "Login"
           });
           store.add({JWT_token:MyVariables.login_token_from_django});
           store.sync();

   },
   onFailure_login: function(response, opts){
           MyVariables.login_token_from_django = '';            
   },
   
   clearFormfield: function(button){
         var win    = button.up('form'),
         form   = win.down('form')
         form.getForm().reset();
         console.log("Initialize the logining formation");
   }

});


