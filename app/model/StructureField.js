Ext.define('Admin.model.StructureField', {
    extend: 'Admin.model.Base',

    identifier: 'negative',

    fields: [{
        type: 'int',
        name: 'id'
    }, {
        type: 'string',
        name: 'fieldName'
    }, {
        type: 'string',
        name: 'columnName'
    }, {
        type: 'string',
        name: 'type'
    }]
});
