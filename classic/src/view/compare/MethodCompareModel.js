Ext.define('Admin.view.compare.MethodCompareModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.compare',

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
        compare: {
            type: 'methodcompare'
        },

        structures: {
            type: 'structure'
        }
    },

    formulas: {
        theData: {
            bind: {
                record: '{dataGrid.selection}'
            },
            get: function (data) {
                return data.record;
            }
        },

        theStructure: {
            bind: {
                record: '{structureCombo.selection}'
            },
            get: function (data) {
                return data.record;
            }
        }
    }
});
