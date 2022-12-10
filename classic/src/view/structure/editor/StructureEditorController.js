Ext.define('Admin.view.structure.editor.StructureEditorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.structureeditor',

    renderType: function (value) {
        const store = this.getStore('dataTypes');
        return value ? store.findRecord('name', value, 0, false, false, true).get('label') : value;
    },

    renderClassifier: function (value) {
        return value ? '<i class="x-fa fa-check"/>' : '<i class="x-fa fa-times"/>';
    },

    renderDifferentiator: function (value) {
        return value ? '<i class="x-fa fa-check"/>' : '<i class="x-fa fa-times"/>';
    },

    onEditorShow: function () {
        const win = this.getView();
        const form = win.down('form');
        const record = win.getStructureRecord();

        form.loadRecord(record);

        const store = this.getStore('fields');
        store.loadRawData(record.get('fields'));

        const className = form.down('#className');
        className.setDisabled(!record.isPhantom());
        className.setReadOnly(!record.isPhantom());

        const tableName = form.down('#tableName');
        tableName.setDisabled(!record.isPhantom());
        tableName.setReadOnly(!record.isPhantom());
    },

    onCancelClick: function (btn) {
        btn.up('window').close();
    },

    onSaveClick: function () {
        const win = this.getView();
        const form = win.down('form');
        const record = win.getStructureRecord();
        record.set(form.getValues());

        if (record.isPhantom()) {
            record.set('created', false);
        }

        const store = this.getStore('fields');
        const fieldList = [];
        store.each(function (field) {
            const data = field.getData();
            data['structure'] = {id: record.get('id')};

            fieldList.push(data);
        });

        record.set('fields', fieldList);

        win.mask('Please wait');

        record.save({
            success() {
                win.fireEvent('editorsave', win);
            },
            failure() {
                win.unmask();
            }
        });
    },

    onAddFieldClick: function () {
        const store = this.getStore('fields');
        const fieldRecord = store.getModel().create();

        store.insert(0, fieldRecord);
        this.openEditor();
    },

    onDeleteFieldClick: function () {
        const grid = this.getView().down('grid');
        const store = this.getStore('fields');

        store.remove(grid.getSelection());
    },

    openEditor() {
        const me = this;
        const grid = me.getView().down('grid');
        const editor = grid.findPlugin('cellediting');

        editor.startEditByPosition({
            row: 0,
            column: 0
        });
    },
});
