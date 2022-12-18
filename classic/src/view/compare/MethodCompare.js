Ext.define('Admin.view.compare.MethodCompare', {
    extend: 'Ext.grid.Panel',
    xtype: 'compare',

    requires: [
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],

    controller: 'compare',
    viewModel: {
        type: 'compare'
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
    routeId: 'compare',
    scrollable: false,
    bind: '{compare}',
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
        text: 'Start',
        iconCls: 'x-fa fa-play',
        bind: {disabled: '{!theStructure}'},
        handler: 'onStartClick'
    }],
    columns: [{
        xtype: 'gridcolumn',
        cls: 'content-column',
        dataIndex: 'method',
        text: 'Method',
        flex: 1
    }, {
        xtype: 'datecolumn',
        cls: 'content-column',
        dataIndex: 'trainingStart',
        text: 'Training Start',
        format:'d.m.Y H:i:s.u',
        flex: 1
    }, {
        xtype: 'datecolumn',
        cls: 'content-column',
        dataIndex: 'trainingEnd',
        text: 'Training End',
        format:'d.m.Y H:i:s.u',
        flex: 1
    }, {
        xtype: 'numbercolumn',
        cls: 'content-column',
        dataIndex: 'trainingSize',
        text: 'Training Size',
        flex: 1
    }, {
        xtype: 'datecolumn',
        cls: 'content-column',
        dataIndex: 'testStart',
        text: 'Test Start',
        format:'d.m.Y H:i:s.u',
        flex: 1
    }, {
        xtype: 'datecolumn',
        cls: 'content-column',
        dataIndex: 'testEnd',
        text: 'Test End',
        format:'d.m.Y H:i:s.u',
        flex: 1
    }, {
        xtype: 'numbercolumn',
        cls: 'content-column',
        dataIndex: 'testSize',
        text: 'Test Size',
        flex: 1
    }, {
        xtype: 'numbercolumn',
        cls: 'content-column',
        dataIndex: 'unclassifiedDataSize',
        text: 'Unclassified Data Size',
        flex: 1
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        itemId: 'dataPaginationToolbar',
        displayInfo: true,
        bind: '{compare}'
    }]
});
