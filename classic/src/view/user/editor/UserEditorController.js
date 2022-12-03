Ext.define('Admin.view.user.editor.UserEditorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usereditorcontroller',

    onEditorShow: function () {
        const win = this.getView();
        const form = win.down('form');

        const record = win.getUserRecord();
        const passField = form.down('#password');
        passField.setHidden(!record.isPhantom());
        passField.setDisabled(!record.isPhantom());

        form.loadRecord(record);
    },

    onCancelClick: function (btn) {
        btn.up('window').close();
    },

    onSaveClick: function () {
        const win = this.getView();
        const form = win.down('form');
        const record = win.getUserRecord();
        record.set(form.getValues());

        if (record.isPhantom()) {
            record.set('enabled', true);
            record.set('roles', [{name: 'ROLE_ADMIN'}])
        }

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
