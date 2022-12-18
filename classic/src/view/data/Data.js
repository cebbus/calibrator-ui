Ext.define('Admin.view.data.Data', {
    extend: 'Ext.grid.Panel',
    xtype: 'data',

    requires: [
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],

    controller: 'data',
    viewModel: {
        type: 'data'
    },
    listeners: {
        activate: 'onDataViewActivate'
    },
    plugins: {
        gridfilters: true
    },
    cls: 'shadow user-grid',
    activeTab: 0,
    margin: 20,
    reference: 'dataGrid',
    routeId: 'data',
    scrollable: true,
    layout: 'fit',
    bind: '{data}',
    tbar: [{
        xtype: 'combo',
        allowBlank: false,
        fieldLabel: 'Structure',
        reference: 'structureCombo',
        bind: {store: '{structures}'},
        queryMode: 'local',
        displayField: 'className',
        valueField: 'className',
        listeners: {
            select: 'onStructureSelect'
        }
    }, '|', {
        text: 'Add',
        iconCls: 'x-fa fa-plus',
        bind: {disabled: '{!theStructure}'},
        handler: 'onAddDataClick'
    }, {
        text: 'Edit',
        iconCls: 'x-fa fa-pencil-alt',
        bind: {disabled: '{!theStructure || !theData}'},
        handler: 'onEditDataClick'
    }, {
        text: 'Delete',
        iconCls: 'x-fa fa-times',
        bind: {disabled: '{!theStructure || !theData}'},
        handler: 'onDeleteDataClick'
    }],
    columns: [],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        itemId: 'dataPaginationToolbar',
        displayInfo: true,
        bind: '{data}'
    }]
});
