Ext.define('Admin.view.compare.MethodCompareController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.compare',

    methodRenderer: function (value) {
        if (Ext.isEmpty(value)) {
            return value;
        }

        return Admin.enums.MethodType[value].label;
    },

    chartMethodRenderer: function (axis, label) {
        return this.methodRenderer(label);
    },

    chartTimeRenderer: function (v) {
        return Ext.util.Format.number(v, '0,000') + ' ms';
    },

    chartNodeWalkRenderer: function (v) {
        return Ext.util.Format.number(v, '0,000.00');
    },

    onDataViewActivate: function () {
        const store = this.getStore('structures');
        store.load();
    },

    onStartClick: function () {
        const me = this;
        const view = me.getView();
        const structure = view.down('combo').getSelection();

        if (Ext.isEmpty(structure)) {
            return;
        }

        view.mask('Please wait...');

        Ext.Ajax.request({
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            url: AdminProperties.ENDPOINT + "/compare/start",
            params: Ext.JSON.encode({
                methodType: null,
                structureId: structure.get('id')
            }),
            success(response) {
                //Ext.isEmpty(response.responseText)
                me.reloadDataGrid(structure);
            },
            callback() {
                view.unmask();
            }
        });
    },

    onStructureSelect: function (combo, record) {
        this.reloadDataGrid(record);
    },

    reloadDataGrid(structure) {
        const store = this.getStore('compare');
        store.setFilters([{
            operator: '=',
            property: 'structure.id',
            value: structure.get('id')
        }]);

        store.load();
    }
});
