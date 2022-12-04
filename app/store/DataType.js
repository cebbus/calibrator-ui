Ext.define('Admin.store.DataType', {
    extend: 'Ext.data.Store',
    alias: 'store.datatype',
    data: [{
        name: 'STRING',
        label: 'String'
    }, {
        name: 'INTEGER',
        label: 'Integer'
    }, {
        name: 'DOUBLE',
        label: 'Double'
    }, {
        name: 'DATE',
        label: 'Date'
    }, {
        name: 'BOOLEAN',
        label: 'Boolean'
    }]
});
