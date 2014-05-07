Ext.define('net_builder.view.templates.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.templateslist',

    title: 'All Templates List',

    store: 'templates.List',

    initComponent: function() {
        this.columns = [
            {header: 'id',  dataIndex: 'id',  flex: 1},
            {header: 'builder', dataIndex: 'builder', flex: 1},
            {header: 'params', dataIndex: 'params', flex: 1}
        ];

        this.callParent(arguments);
    }
});
