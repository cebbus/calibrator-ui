Ext.define('Admin.model.Structure', {
    extend: 'Admin.model.Base',

    identifier: 'negative',

    fields: [{
        type: 'int',
        name: 'id'
    }, {
        type: 'string',
        name: 'className'
    }, {
        type: 'string',
        name: 'tableName'
    }, {
        type: 'bool',
        name: 'created'
    }, {
        name: 'fields'
    }],

    proxy: {
        type: 'api',
        url: AdminProperties.ENDPOINT + "/structures"
    }
});
