Ext.define('net_builder.view.configures.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.configureslist',

    title: 'All Configuration List',

    store: 'configures.List',

    initComponent: function() {
        this.columns = [
            {header: 'mgmt_swname', dataIndex: 'mgmt_swname', flex: 1},
            {header: 'builder_name', dataIndex: 'builder_name', flex: 1},
            {header: 'url',  dataIndex: 'url',  flex: 1}
        ];

        this.callParent(arguments);
    }
});
