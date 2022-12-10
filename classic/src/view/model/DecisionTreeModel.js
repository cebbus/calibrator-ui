Ext.define('Admin.view.model.DecisionTreeModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.forest',

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
        },
        decisionTree: {
            type: 'decisiontreeitem',
            root: {
                id: 0,
                name: null,
                children: []
            }
        },
        methodTypes: {
            fields: ['name', 'label'],
            data: Admin.enums.MethodType.values()
        }
    },

    formulas: {
        theStructure: {
            bind: {
                record: '{structureCombo.selection}'
            },
            get: function (data) {
                return data.record;
            }
        },

        theMethod: {
            bind: {
                record: '{methodCombo.selection}'
            },
            get: function (data) {
                return data.record;
            }
        }
    }
});
