Ext.define('Admin.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
        currentView: null,
        currentUser: null
    },

    formulas: {
        profileName: {
            bind: {
                user: '{currentUser}'
            },
            get: function (data) {
                let user = data.user;
                if (!user) {
                    return '';
                }

                return user.substring(0, 1).toUpperCase();
            }
        },
    }
});
