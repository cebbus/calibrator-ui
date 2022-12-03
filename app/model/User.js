Ext.define('Admin.model.User', {
    extend: 'Admin.model.Base',

    identifier: 'negative',

    fields: [{
        type: 'int',
        name: 'id'
    }, {
        type: 'string',
        name: 'name'
    }, {
        type: 'string',
        name: 'surname'
    }, {
        type: 'string',
        name: 'username'
    }, {
        type: 'string',
        name: 'email'
    }],

    proxy: {
        type: 'api',
        url: AdminProperties.ENDPOINT + "/users"
    }
});
