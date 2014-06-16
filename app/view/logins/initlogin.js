Ext.define('net_builder.view.logins.initlogin', {


    extend: 'Ext.form.Panel',
//    extend: 'Ext.form.Basic',
    alias: 'widget.mainLoginview',

    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'username',
                        fieldLabel: 'User Name',
                        labelWidth: 100
                    },
                    {
                        xtype: 'textfield',
                        inputType:'password',
                        name : 'password',
                        fieldLabel: 'Password',
                        labelWidth: 100
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Login',
                action: 'login'
            },
            {
                text: 'Clear',
                action: 'clear'
                // scope: this,
                // handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
