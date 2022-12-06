Ext.define('Admin.model.Data', {
    extend: 'Admin.model.Base',

    identifier: 'negative',

    fields: [{
        type: 'int',
        name: 'id'
    }],

    proxy: {
        type: 'api',
        url: AdminProperties.ENDPOINT + '/data'
    }
});
