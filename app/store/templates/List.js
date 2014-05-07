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
         read: 'http://'+MyVariables.ajax_response_server+'/net_builder/config_templates/',
        },
        reader: {
         type: 'json',
         root: 'users',
         successProperty: 'success'
        }
    }, // end of proxy: {
})
