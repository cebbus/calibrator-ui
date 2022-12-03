Ext.define('Admin.store.User', {
    extend: 'Ext.data.Store',
    alias: 'store.user',
    model: 'Admin.model.User',
    autoLoad: true
});
