Ext.define('net_builder.store.configures.List', {
    extend: 'Ext.data.Store',
    model: 'net_builder.model.configures.List',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        method: 'GET',
        noCache: false,
        getParams: Ext.emptyFn,

        api: {
         read: 'http://'+MyVariables.myRequest_server+'/net_builder/mgmtsw_list/',
        },
        reader: {
         type: 'json',
         root: 'users',
         successProperty: 'success'
        }
    }, // end of proxy: {
})
