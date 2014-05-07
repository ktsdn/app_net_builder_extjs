Ext.define('net_builder.view.templates.Id_1', {
    extend: 'Ext.window.Window',
    alias: 'widget.Id_1',

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
                        name : 'mgmt_desc_uptor',
                        fieldLabel: 'mgmt_desc_uptor'
                    },
                    {
                        xtype: 'textfield',
                        name : 'mgmt_desc_downtor',
                        fieldLabel: 'mgmt_desc_downtor'
                    },
                    {
                        xtype: 'textfield',
                        name : 'mgmt_network',
                        fieldLabel: 'mgmt_network'
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
