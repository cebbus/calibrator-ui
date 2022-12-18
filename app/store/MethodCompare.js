Ext.define('Admin.store.MethodCompare', {
    extend: 'Ext.data.Store',
    alias: 'store.methodcompare',
    model: 'Admin.model.MethodCompare',
    autoLoad: false,
    remoteSort: true,
    remoteFilter: true
});
