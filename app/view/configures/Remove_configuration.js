Ext.define('net_builder.view.configures.Remove_configuration', {
    extend: 'Ext.window.Window',
    alias: 'widget.Remove_configuration',

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
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Remove',
                action: 'remove'
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
