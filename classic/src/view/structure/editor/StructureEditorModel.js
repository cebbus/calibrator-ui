Ext.define('Admin.view.structure.editor.StructureEditorModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.structureeditor',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Memory',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Date',
        'Ext.data.field.Boolean',
        'Ext.data.reader.Json'
    ],

    stores: {
        fields: {
            model: 'Admin.model.StructureField'
        },

        dataTypes: {
            type: 'datatype'
        }
    },

    formulas: {
        theField: {
            bind: {
                record: '{fieldGrid.selection}'
            },
            get: function (data) {
                return data.record;
            }
        }
    }
});
