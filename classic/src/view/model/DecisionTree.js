Ext.define('Admin.view.model.DecisionTree', {
    extend: 'Ext.panel.Panel',
    xtype: 'forest',

    requires: [
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],

    controller: 'forest',
    viewModel: {
        type: 'forest'
    },

    cls: 'shadow user-grid',
    activeTab: 0,
    margin: 20,
    reference: 'structureGrid',
    routeId: 'forest',
    scrollable: false,
    layout: 'fit',
    tbar: [{
        xtype: 'combo',
        allowBlank: false,
        fieldLabel: 'Structure',
        itemId: 'structureCombo',
        reference: 'structureCombo',
        bind: {store: '{structures}'},
        queryMode: 'local',
        displayField: 'className',
        valueField: 'className',
        listeners: {change: 'onStructureChange'}
    }, {
        xtype: 'combo',
        allowBlank: false,
        fieldLabel: 'Method',
        itemId: 'methodCombo',
        reference: 'methodCombo',
        bind: {store: '{methodTypes}'},
        queryMode: 'local',
        displayField: 'label',
        valueField: 'name',
        listeners: {change: 'onMethodChange'}
    }, '|', {
        text: 'Training',
        iconCls: 'x-fa fa-graduation-cap',
        bind: {disabled: '{!theStructure || !theMethod}'},
        handler: 'onTrainingClick'
    }, '|', {
        text: 'Test',
        iconCls: 'x-fa fa-check-square',
        bind: {disabled: '{!theStructure || !theMethod}'},
        handler: 'onTestClick'
    }],
    items: [{
        xtype: 'panel',
        layout: 'hbox',
        width: '100%',
        height: '100%',
        items: [{
            xtype: 'treepanel',
            rootVisible: false,
            minWidth: 100,
            width: 500,
            height: '100%',
            border: true,
            bind: {store: '{decisionTree}'},
            margin: '0 8 0 0',
            columns: [{
                xtype: 'treecolumn',
                text: 'Name',
                dataIndex: 'fieldValue',
                flex: 1
            }, {
                text: 'Class',
                dataIndex: 'classification',
                width: 100
            }]
        }, {
            xtype: 'panel',
            flex: 1,
            height: '100%',
            border: true,
            items: [{
                xtype: 'd3-tree',
                height: '100%',
                rootVisible: false,
                bind: {store: '{decisionTree}'},
                colorAxis: {
                    field: 'id'
                },
                nodeText: function (tree, node) {
                    let text = node.data.get('fieldValue');
                    let classification = node.data.get('classification');

                    if (!Ext.isEmpty(classification)) {
                        text += ' (' + classification + ')';
                    }

                    return text;
                },
                interactions: {
                    type: 'panzoom'
                }
            }]
        }]
    }]

});
