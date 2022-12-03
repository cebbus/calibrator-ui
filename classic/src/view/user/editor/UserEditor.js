Ext.define('Admin.view.user.editor.UserEditor', {
    extend: 'Ext.window.Window',
    alias: 'widget.usereditor',
    autoShow: true,
    modal: true,

    layout: 'fit',
    width: '30%',
    controller: 'usereditorcontroller',
    config: {
        userRecord: undefined
    },

    items: [{
        xtype: 'form',
        defaultType: 'textfield',
        bodyPadding: 10,
        defaults: {
            labelWidth: 90,
            allowBlank: false,
            anchor: '100%'
        },
        items: [{
            name: 'name',
            fieldLabel: 'Name'
        }, {
            name: 'surname',
            fieldLabel: 'Surname'
        }, {
            name: 'username',
            fieldLabel: 'Username'
        }, {
            name: 'email',
            fieldLabel: 'Email'
        }, {
            itemId: 'password',
            inputType: 'password',
            name: 'password',
            fieldLabel: 'Password'
        }],
        buttons: [{
            xtype: 'button',
            ui: 'soft-red',
            text: 'Cancel',
            handler: 'onCancelClick'
        }, {
            xtype: 'button',
            ui: 'soft-green',
            text: 'Save',
            formBind: true,
            handler: 'onSaveClick'
        }]
    }],
    listeners: {
        show: 'onEditorShow'
    }
});
