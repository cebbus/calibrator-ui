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
        type: 'number',
        name: 'trainingTime',
        calculate: function (data) {
            return data['trainingEnd'] - data['trainingStart'];
        }
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
        type: 'number',
        name: 'testTime',
        calculate: function (data) {
            return data['testEnd'] - data['testStart'];
        }
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
