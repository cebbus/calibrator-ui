Ext.define('Admin.view.user.Users', {
    extend: 'Ext.grid.Panel',
    xtype: 'users',

    requires: [
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],

    controller: 'users',
    viewModel: {
        type: 'users'
    },

    cls: 'shadow user-grid',
    activeTab: 0,
    margin: 20,
    reference: 'userGrid',
    routeId: 'user',
    bind: '{users}',
    scrollable: false,
    tbar: [{
        text: 'Add',
        iconCls: 'x-fa fa-plus',
        handler: 'onAddUserClick'
    }, {
        text: 'Edit',
        iconCls: 'x-fa fa-pencil-alt',
        bind: {disabled: '{!theUser}'},
        handler: 'onEditUserClick'
    }, {
        text: 'Delete',
        iconCls: 'x-fa fa-times',
        bind: {disabled: '{!theUser}'},
        handler: 'onDeleteUserClick'
    }],
    columns: [{
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'name',
        text: 'Name',
        flex: 1
    }, {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'surname',
        text: 'Surname',
        flex: 1
    }, {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'username',
        text: 'Username',
        flex: 1
    }, {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'email',
        text: 'Email',
        flex: 1
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        itemId: 'userPaginationToolbar',
        displayInfo: true,
        bind: '{users}'
    }]
});
