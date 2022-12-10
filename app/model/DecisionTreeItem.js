Ext.define('Admin.model.DecisionTreeItem', {
    extend: 'Ext.data.TreeModel',

    requires: [
        'Ext.data.identifier.Negative'
    ],

    identifier: 'negative',

    fields: [{
        name: 'id',
        type: 'auto'
    }, {
        name: 'fieldName',
        type: 'string'
    }, {
        name: 'fieldValue',
        type: 'string'
    }, {
        name: 'classification',
        type: 'string'
    }, {
        name: 'children'
    }, {
        name: 'parent',
        reference: {
            type: 'Admin.model.DecisionTreeItem'
        }
    }, {
        name: 'decisionTree',
        reference: {
            type: 'Admin.model.DecisionTree'
        }
    }]
});