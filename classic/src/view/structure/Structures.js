Ext.define('Admin.view.structure.Structures', {
    extend: 'Ext.grid.Panel',
    xtype: 'structures',

    requires: [
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],

    controller: 'structures',
    viewModel: {
        type: 'structures'
    },

    cls: 'shadow user-grid',
    activeTab: 0,
    margin: 20,
    reference: 'structureGrid',
    routeId: 'structure',
    bind: '{structures}',
    scrollable: false,
    tbar: [{
        text: 'Add',
        iconCls: 'x-fa fa-plus',
        handler: 'onAddStructureClick'
    }, {
        text: 'Edit',
        iconCls: 'x-fa fa-pencil-alt',
        bind: {disabled: '{!theStructure}'},
        handler: 'onEditStructureClick'
    }, {
        text: 'Delete',
        iconCls: 'x-fa fa-times',
        bind: {disabled: '{!theStructure}'},
        handler: 'onDeleteStructureClick'
    }, '|', {
        text: 'Create',
        iconCls: 'x-fa fa-building',
        bind: {disabled: '{!theStructure}'},
        handler: 'onCreateStructureClick'
    }],
    columns: [{
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'className',
        text: 'Class Name',
        flex: 1
    }, {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'tableName',
        text: 'Table Name',
        flex: 1
    }, {
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'created',
        text: 'Created',
        renderer: function (val) {
            return val ? '<i class="x-fa fa-check"/>' : '<i class="x-fa fa-times"/>';
        }
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        itemId: 'structurePaginationToolbar',
        displayInfo: true,
        bind: '{structures}'
    }]
});
