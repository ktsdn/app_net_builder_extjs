Ext.define('net_builder.controller.Templates', {
    extend: 'Ext.app.Controller',

    models: [ 'templates.List' ],
    stores: [ 'templates.List' ],
    views: [ 'templates.List',
             'templates.Id_1' ],

    // ############################
    // # action definition        #
    // ############################
    init: function() {
       this.control({

         'templateslist':{
                     // #######################
                     // # refresh method      #
                     // #######################
                     afterrender: this.onGridAfterRender,
                     itemdblclick: this.windownOpen_CreatConfiguration
         },
         'Id_1 button[action=create]':{
                     click: this.createTemplate
         }

       }); // end of this.control({
    }, // end of init: function() {


   // ############################
   // # function definition      #
   // ############################
   onPanelRendered: function(){
         console.log('Initialized Users! This happens before the Application launch function is called');
    
   },

   // ############################
   // # refresh method           #
   // ############################
   onGridAfterRender: function(grid){
       console.log(grid);
       setInterval(function(){
         grid.store.load();
       }, 120000);
    },

   windownOpen_CreatConfiguration: function(grid, record){
         MyVariables.template_id = record.get('id');
         MyVariables.template_params = record.get('params');
         local_template_name='Id_'+MyVariables.template_id
         var view = Ext.widget(local_template_name);
   },
   createTemplate: function(button){
         var win    = button.up('window'),
         form   = win.down('form'),
         record = form.getRecord(),
         values = form.getValues();
         win.close();

         local_auth_username=values.auth_username;
         local_auth_password=values.auth_password;
         local_auth_string=local_auth_username+':'+local_auth_password;

         // ########################
         // # ajax post transmit   #
         // ########################
         Ext.Ajax.request({
          withCredentials:true,
         cors:true,
         url: 'http://20.0.2.225:8088/net_builder/config_templates/1/',
         method: 'POST',
         disableCaching: true,
         beforeSend : function(req) {
           req.setRequestHeader('Authorization', Base64.encode('root:password'));
         },
         headers: { 'Content-Type': 'application/json'},
         scope:this,
         disableCaching:true,
         jsonData: Ext.encode(values),
         success: this.onSuccess,
         failure: this.onFailure
         }); // end of Ext.Ajax.request({
   },
   onSuccess: function(response, opts){
     var jsonData = Ext.decode(response.responseText);
     Ext.MessageBox.alert(jsonData[0].running_status);
     console.dir(jsonData);
   },
   onFailure: function(err){
     Ext.MessageBox.alert("error");
   }
   
   
   

});
