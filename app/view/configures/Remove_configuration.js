Ext.define('net_builder.view.configures.Remove_configuration', {
    extend: 'Ext.window.Window',
    alias: 'widget.Remove_configuration',

    title: 'Remove the configuration',
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
                        fieldLabel: 'User Name'
                    },
                    {
                        xtype: 'textfield',
                        inputType:'password',
                        name : 'auth_password',
                        fieldLabel: 'Password'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Details',
                action: 'details'
            },
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
