Ext.define('Admin.view.structure.StructuresModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.structures',

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
        structures: {
            type: 'structure'
        }
    },

    formulas: {
        theStructure: {
            bind: {
                record: '{structureGrid.selection}'
            },
            get: function (data) {
                return data.record;
            }
        }
    }
});
