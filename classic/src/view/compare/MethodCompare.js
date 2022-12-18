Ext.define('Admin.view.compare.MethodCompare', {
    extend: 'Ext.panel.Panel',
    xtype: 'compare',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar',
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
    cls: 'shadow user-grid',
    activeTab: 0,
    margin: 20,
    routeId: 'compare',
    layout: 'vbox',
    width: '100%',
    height: '100%',
    bodyStyle: {
        background: 'none'
    },
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
    items: [{
        xtype: 'grid',
        reference: 'dataGrid',
        bind: '{compare}',
        flex: 1,
        width: '100%',
        border: true,
        plugins: {
            gridfilters: true
        },
        columns: [{
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'method',
            text: 'Method',
            flex: 1,
            renderer: 'methodRenderer'
        }, {
            xtype: 'datecolumn',
            cls: 'content-column',
            dataIndex: 'trainingStart',
            text: 'Training Start',
            format: 'd.m.Y H:i:s.u',
            flex: 1
        }, {
            xtype: 'datecolumn',
            cls: 'content-column',
            dataIndex: 'trainingEnd',
            text: 'Training End',
            format: 'd.m.Y H:i:s.u',
            flex: 1
        }, {
            xtype: 'numbercolumn',
            cls: 'content-column',
            dataIndex: 'trainingTime',
            text: 'Training Time (in ms)',
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
            format: 'd.m.Y H:i:s.u',
            flex: 1
        }, {
            xtype: 'datecolumn',
            cls: 'content-column',
            dataIndex: 'testEnd',
            text: 'Test End',
            format: 'd.m.Y H:i:s.u',
            flex: 1
        }, {
            xtype: 'numbercolumn',
            cls: 'content-column',
            dataIndex: 'testTime',
            text: 'Test Time (in ms)',
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
    }, {
        xtype: 'panel',
        height: 300,
        width: '100%',
        border: true,
        collapsible: true,
        split: true,
        layout: 'fit',
        bind: {title: '{theStructure.className}'},
        items: [{
            xtype: 'cartesian',
            bind: '{compare}',
            flipXY: true,
            background: 'rgba(255, 255, 255, 1)',
            colors: [
                '#6aa5dc',
                '#fdbf00',
                '#ee929d'
            ],
            legend: {
                type: 'dom',
                docked: 'right'
            },
            axes: [{
                type: 'numeric',
                position: 'bottom',
                fields: ['trainingTime', 'testTime'],
                hidden: true
            }, {
                type: 'category',
                position: 'left',
                fields: 'method',
                renderer: 'chartMethodRenderer',
                label: {
                    color: '#555',
                    strokeOpacity: 0.3
                }
            }],
            series: [{
                type: 'bar',
                xField: 'method',
                yField: ['trainingTime', 'testTime'],
                title: [ 'Training Time', 'Test Time'],
                label: {
                    field: ['trainingTime', 'testTime'],
                    display: 'insideEnd',
                    color: '#555',
                    renderer: 'chartTimeRenderer'
                }
            }]
        }]
    }]

});
