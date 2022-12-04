Ext.define('Admin.view.user.UsersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users',

    onAddUserClick: function () {
        const store = this.getStore('users');
        const record = store.getModel().create();

        this.openEditor('Add User', record);
    },

    onEditUserClick: function () {
        const record = this.getViewModel().get('theUser');
        this.openEditor('Edit User', record);
    },

    onDeleteUserClick: function () {
        const record = this.getViewModel().get('theUser');
        record.erase();
    },

    openEditor: function (title, record) {
        const store = this.getStore('users');

        Ext.create({
            xtype: 'usereditor',
            title: title,
            userRecord: record,
            listeners: {
                editorsave: function (win) {
                    store.reload();
                    win.close();
                }
            }
        });
    }
});
