Ext.define('net_builder.store.templates.List', {
    extend: 'Ext.data.Store',
    model: 'net_builder.model.templates.List',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        method: 'GET',
        noCache: false,
        getParams: Ext.emptyFn,

        api: {
         read: 'http://'+MyVariables.myRequest_server+'/net_builder/config_templates/',
        },
        reader: {
         type: 'json',
         root: 'users',
         successProperty: 'success'
        },
        afterRequest:function(request,success){
            if(success){
              // if success scenario
              var store = Ext.create('Ext.data.Store', {
                   model: "Login"
              });
              store.getProxy().clear('JWT_token');
            } else{
              window.location.reload();
            }; 
            // console.log(request);
        } // end of afterRequest:function(request,success)
        

    }, // end of proxy: {
})
