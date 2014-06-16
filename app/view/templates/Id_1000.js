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
                width: 500,
                items: [
                    {
                        xtype: 'textfield',
                        name : 'auth_username',
                        fieldLabel: 'User Name',
                        anchor:'100%',
                        labelWidth: 250
                    },
                    {
                        xtype: 'textfield',
                        inputType:'password',
                        name : 'auth_password',
                        fieldLabel: 'Password',
                        anchor:'100%',
                        labelWidth: 250
                    },
                    {
                        xtype: 'textfield',
                        name : 'mgmt_swname',
                        fieldLabel: 'MGMT Name(CA5-E-KR1B-25-MG-03R01)',
                        anchor:'100%',
                        labelWidth: 250
                    },
                    {
                        xtype: 'textfield',
                        name : 'mgmt_portno',
                        fieldLabel: 'Port No for SW(G1/0/1,1)',
                        anchor:'100%',
                        labelWidth: 250 
                    },
                    {
                        xtype: 'textfield',
                        name : 'mgmt_ipnet',
                        fieldLabel: 'MGMT IP/Subnet(10.0.1.1/24)',
                        anchor:'100%',
                        labelWidth: 250
                    },
                    {
                        xtype: 'textfield',
                        name : 'gateway_ip',
                        fieldLabel: 'MGMT Gateway IP(10.0.1.254)',
                        anchor:'100%',
                        labelWidth: 250
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
