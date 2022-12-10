Ext.define('Admin.model.DecisionTree', {
    extend: 'Admin.model.Base',

    fields: [{
        name: 'method',
        type: 'string'
    }, {
        name: 'structure',
        reference: {
            type: 'Admin.model.Structure'
        }
    }, {
        name: 'root',
        defaultValue: {
            id: 0,
            name: '',
            children: []
        },
        reference: {
            type: 'Admin.model.DecisionTreeItem'
        }
    }],

    proxy: {
        type: 'api',
        url: AdminProperties.ENDPOINT + "/forest"
    }
});