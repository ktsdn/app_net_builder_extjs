var Base64 = {
 
    // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
    // public method for encoding
    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
 
        input = Base64._utf8_encode(input);
 
        while (i < input.length) {
 
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
 
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
 
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
 
            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
        }
 
        return output;
    },
 
    // public method for decoding
    decode : function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
 
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
        while (i < input.length) {
 
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
 
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
 
            output = output + String.fromCharCode(chr1);
 
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
 
        }
 
        output = Base64._utf8_decode(output);
 
        return output;
 
    },
 
    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
 
        for (var n = 0; n < string.length; n++) {
 
            var c = string.charCodeAt(n);
 
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
 
        }
 
        return utftext;
    },
 
    // private method for UTF-8 decoding
    _utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
 
        while ( i < utftext.length ) {
 
            c = utftext.charCodeAt(i);
 
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
 
        }
 
        return string;
    }
 
}


Ext.define('net_builder.controller.Templates', {
    extend: 'Ext.app.Controller',

    models: [ 'templates.List' ],
    stores: [ 'templates.List' ],
    views: [ 'templates.List',
             'templates.Id_1000',
             'templates.Id_1001',
             'templates.Id_1',
             'templates.Id_2',
             'templates.Id_3' ],

    // ############################
    // # action definition        #
    // ############################
    init: function() {
       this.control({

         'templateslist':{
                     // #######################
                     // # refresh method      #
                     // #######################
                     render: this.onPanelRendered,
                     afterrender: this.onGridAfterRender,
                     itemdblclick: this.windownOpen_CreatConfiguration
         },
         'Id_1000 button[action=create]':{
                     click: this.createTemplate
         },
         'Id_1001 button[action=create]':{
                     click: this.createTemplate
         }, 
         'Id_1 button[action=create]':{
                     click: this.createTemplate
         },
         'Id_2 button[action=create]':{
                     click: this.createTemplate
         },
         'Id_3 button[action=create]':{
                     click: this.createTemplate
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
        if(store.read().data.keys.length){
         MyVariables.login_token_from_django = store.read().data.items[0].data.JWT_token;
         Ext.util.Cookies.clear('jwt_token');
         Ext.util.Cookies.set('jwt_token',MyVariables.login_token_from_django);
        } else{
          window.location.href = 'index.html';
        };

   },

   // ############################
   // # refresh method           #
   // ############################
   onGridAfterRender: function(grid){
       // console.log(grid);
       setInterval(function(){
         grid.store.load();
       }, MyVariables.reLoad_time);
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
          url: 'http://'+MyVariables.myRequest_server+'/net_builder/config_templates/'+MyVariables.template_id+'/',
          method: 'POST',
          disableCaching: true,
          // #####################################
          // # basic authentication ajax request #
          // #####################################          
          headers: { 'Content-Type': 'application/json',
                     'Authorization': 'Basic '+Base64.encode(local_auth_string)},

          scope:this,
          disableCaching:true,
          jsonData: Ext.encode(values),
          success: this.onSuccess,
          failure: this.onFailure
         }); // end of Ext.Ajax.request({
   },
   onSuccess: function(response, opts){
     var jsonData = Ext.decode(response.responseText);
     if (jsonData[0].running_status=='success'){
      Ext.MessageBox.alert(jsonData[0].success_details);
     }
     else{
      Ext.MessageBox.alert(jsonData[0].error_details);
     }
   },
   onFailure: function(response, err){
     var jsonData = Ext.decode(response.responseText);
     Ext.MessageBox.alert(jsonData.detail);
   }

});
