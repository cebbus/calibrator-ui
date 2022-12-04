Ext.define('Admin.proxy.API', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.api',

    writer: {
        writeAllFields: true
    }
});