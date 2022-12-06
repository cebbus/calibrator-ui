Ext.define('Admin.view.data.editor.DataEditor', {
    extend: 'Ext.window.Window',
    alias: 'widget.dataeditor',
    autoShow: true,
    modal: true,

    layout: 'fit',
    width: '30%',
    controller: 'dataeditor',
    config: {
        dataRecord: undefined,
        structureRecord: undefined
    },

    initComponent() {
        const me = this;
        const record = me.getStructureRecord();
        const fields = record.get('fields');

        const items = [];
        if (!Ext.isEmpty(fields)) {
            Ext.Array.each(fields, field => {

                const dataType = Admin.enums.DataType[field.type];

                items.push(Ext.Object.merge({
                    name: field.fieldName,
                    fieldLabel: field.fieldName
                }, dataType.formFieldConfig));
            });
        }

        Ext.apply(me.items[0], {
            items: items
        });

        me.callParent();
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
        buttons: [{
            xtype: 'button',
            ui: 'soft-red',
            text: 'Cancel',
            iconCls: 'x-fa fa-times',
            handler: 'onCancelClick'
        }, {
            formBind: true,
            xtype: 'button',
            ui: 'soft-green',
            text: 'Save',
            iconCls: 'x-fa fa-check',
            handler: 'onSaveClick'
        }]
    }],
    listeners: {
        show: 'onEditorShow'
    }
});
