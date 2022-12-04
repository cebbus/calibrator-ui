Ext.define('Admin.view.structure.editor.StructureEditor', {
    extend: 'Ext.window.Window',
    alias: 'widget.structureeditor',
    autoShow: true,
    modal: true,

    layout: 'fit',
    width: '50%',
    height: '50%',
    controller: 'structureeditor',
    viewModel: {
        type: 'structureeditor'
    },
    config: {
        structureRecord: undefined
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
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            name: 'className',
            itemId: 'className',
            fieldLabel: 'Class Name'
        }, {
            name: 'tableName',
            itemId: 'tableName',
            fieldLabel: 'Table Name'
        }, {
            flex: 1,
            xtype: 'grid',
            itemId: 'fieldGrid',
            reference: 'fieldGrid',
            scrollable: 'y',
            border: true,
            bind: '{fields}',
            minHeight: 200,
            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1
            },
            columns: {
                defaults: {
                    flex: 1,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                items: [{
                    dataIndex: 'fieldName',
                    text: 'Field Name'
                }, {
                    dataIndex: 'columnName',
                    text: 'Column Name'
                }, {
                    dataIndex: 'type',
                    text: 'Type',
                    renderer: 'renderType',
                    editor: {
                        xtype: 'combo',
                        allowBlank: false,
                        bind: {store: '{dataTypes}'},
                        queryMode: 'local',
                        displayField: 'label',
                        valueField: 'name'
                    }
                }]
            },
            tbar: {
                items: [{
                    text: 'Add',
                    iconCls: 'x-fa fa-plus',
                    handler: 'onAddFieldClick'
                }, {
                    text: 'Delete',
                    iconCls: 'x-fa fa-times',
                    bind: {disabled: '{!theField}'},
                    handler: 'onDeleteFieldClick'
                }]
            },
        }],
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
