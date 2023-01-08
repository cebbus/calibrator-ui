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
        type: 'int',
        name: 'wrongClassifiedDataSize'
    }, {
        type: 'number',
        name: 'accuracy',
        calculate: function (data) {
            const testSize = data['testSize'];
            if (testSize === 0) {
                return 0;
            }

            const unclassifiedDataSize = data['unclassifiedDataSize'];
            const wrongClassifiedDataSize = data['wrongClassifiedDataSize'];

            return 1 - ((unclassifiedDataSize + wrongClassifiedDataSize) / testSize);
        }
    }, {
        type: 'string',
        name: 'method'
    }, {
        type: 'number',
        name: 'nodeWalk'
    }, {
        name: 'structure'
    }],

    proxy: {
        type: 'api',
        url: AdminProperties.ENDPOINT + '/compare'
    }
});
