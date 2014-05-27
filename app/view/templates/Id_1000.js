Ext.define('net_builder.view.templates.Id_1000', {
    extend: 'Ext.window.Window',
    alias: 'widget.Id_1000',

    title: 'create the configuration',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'auth_username',
                        fieldLabel: 'auth_username'
                    },
                    {
                        xtype: 'textfield',
                        name : 'auth_password',
                        fieldLabel: 'auth_password'
                    },
                    {
                        xtype: 'textfield',
                        name : 'mgmt_swname',
                        fieldLabel: 'mgmt_swname'
                    },
                    {
                        xtype: 'textfield',
                        name : 'mgmt_desc',
                        fieldLabel: 'mgmt_desc'
                    },
                    {
                        xtype: 'textfield',
                        name : 'mgmt_ipnet',
                        fieldLabel: 'mgmt_ipnet'
                    },
                    {
                        xtype: 'textfield',
                        name : 'gateway_ip',
                        fieldLabel: 'gateway_ip'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Create',
                action: 'create'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
