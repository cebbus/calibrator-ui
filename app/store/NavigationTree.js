Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [{
            text: 'Dashboard',
            iconCls: 'x-fa fa-desktop',
            rowCls: 'nav-tree-badge nav-tree-badge-new',
            viewType: 'admindashboard',
            routeId: 'dashboard', // routeId defaults to viewType
            leaf: true
        }, {
            text: 'Structure',
            iconCls: 'x-fa fa-building',
            viewType: 'structures',
            leaf: true
        }, {
            text: 'Data',
            iconCls: 'x-fa fa-database',
            viewType: 'data',
            leaf: true
        }, {
            text: 'Model',
            iconCls: 'x-fa fa-calculator',
            viewType: 'forest',
            leaf: true
        }, {
            text: 'User',
            iconCls: 'x-fa fa-user',
            viewType: 'users',
            leaf: true
        }]
    }
});
