Ext.define('Admin.view.data.DataController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.data',

    onDataViewActivate: function () {
        const store = this.getStore('structures');
        store.load();
    },

    onAddDataClick: function () {
        const store = this.getStore('data');
        const record = store.getModel().create();

        this.openEditor('Add Data', record);
    },

    onEditDataClick: function () {
        const record = this.getViewModel().get('theData');
        this.openEditor('Edit Data', record);
    },

    onDeleteDataClick: function () {
        const record = this.getViewModel().get('theData');
        record.erase();
    },

    onStructureSelect: function (combo, record) {
        this.clearView();
        this.reconfigureDataGrid(record);
        this.reloadDataGrid(record);
    },

    openEditor: function (title, record) {
        const store = this.getStore('data');
        const structure = this.getViewModel().get('theStructure');

        Ext.create({
            xtype: 'dataeditor',
            title: title,
            dataRecord: record,
            structureRecord: structure,
            listeners: {
                editorsave: function (win) {
                    store.reload();
                    win.close();
                }
            }
        });
    },

    clearView() {
        const store = this.getStore('data');
        store.removeAll();
        store.clearFilter();
        store.getSorters().clear();

        const grid = this.getView();
        grid.findPlugin('gridfilters').clearFilters();
        grid.getView().refresh();
    },

    reconfigureDataGrid(structure) {
        const me = this;
        const grid = me.getView();
        const columns = [];
        const modelFields = [];

        const fields = structure.get('fields');

        if (!Ext.isEmpty(fields)) {
            Ext.Array.each(fields, field => {

                const dataType = Admin.enums.DataType[field.type];

                modelFields.push(Ext.Object.merge({
                    name: field.fieldName,
                    allowNull: false
                }, dataType.modelFieldConfig));

                columns.push(Ext.Object.merge({
                    flex: 1,
                    text: field.fieldName,
                    dataIndex: field.fieldName,
                }, dataType.gridColumnConfig));
            });
        }

        grid.reconfigure(columns);
    },

    reloadDataGrid(structure) {
        const store = this.getStore('data');
        store.getModel().getProxy().setUrl(AdminProperties.ENDPOINT + '/data/' + structure.get('className'));
        store.load();
    }
});
