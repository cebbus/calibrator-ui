Ext.define('Admin.view.data.editor.DataEditorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dataeditor',

    onEditorShow: function () {
        const win = this.getView();
        const form = win.down('form');
        const record = win.getDataRecord();

        form.loadRecord(record);
    },

    onCancelClick: function (btn) {
        btn.up('window').close();
    },

    onSaveClick: function () {
        const win = this.getView();
        const form = win.down('form');
        const record = win.getDataRecord();
        record.set(form.getValues());

        win.mask('Please wait');

        record.save({
            success() {
                win.fireEvent('editorsave', win);
            },
            failure() {
                win.unmask();
            }
        });
    }
});
