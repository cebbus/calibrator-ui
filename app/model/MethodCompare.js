Ext.define('Admin.model.MethodCompare', {
    extend: 'Admin.model.Base',

    identifier: 'negative',

    fields: [{
        type: 'int',
        name: 'id'
    }, {
        type: 'date',
        name: 'trainingStart'
    }, {
        type: 'date',
        name: 'trainingEnd'
    }, {
        type: 'int',
        name: 'trainingSize'
    }, {
        type: 'date',
        name: 'testStart'
    }, {
        type: 'date',
        name: 'testEnd'
    }, {
        type: 'int',
        name: 'testSize'
    }, {
        type: 'int',
        name: 'unclassifiedDataSize'
    }, {
        type: 'string',
        name: 'method'
    }, {
        name: 'structure'
    }],

    proxy: {
        type: 'api',
        url: AdminProperties.ENDPOINT + '/compare'
    }
});
