Ext.define('Admin.security.Firewall', {
    singleton: true,

    requires: [
        'Ext.util.DelayedTask',
        'Ext.util.TaskRunner',
        'Admin.security.TokenStorage',
    ],

    isLoggedIn() {
        return !!Admin.security.TokenStorage.retrieve();
    },

    isRememberMe() {
        const storage = Admin.security.TokenStorage.getStorage(true);
        return storage.getItem(Admin.security.TokenStorage.storageKey) !== null;
    },

    isSessionsValid() {
        return Admin.security.TokenStorage.checkSessions();
    }
}, function () {
    Ext.Ajax.on('beforerequest', function (conn, options) {
        if (Admin.security.Firewall.isLoggedIn() && !options.permit) {
            if (Ext.isEmpty(options.headers)) {
                options.headers = {};
            }

            options.headers['Authorization'] = 'Bearer ' + Admin.security.TokenStorage.retrieve();
        }
    });

    Ext.Ajax.on('requestexception', function (conn, response, options) {

        let exception = null;
        try {
            const rt = response.responseText;
            const rb = response.responseBytes;

            if (!Ext.isEmpty(rt)) {
                exception = Ext.JSON.decode(rt);
            } else if (!Ext.isEmpty(rb)) {
                exception = Ext.JSON.decode(String.fromCharCode.apply(String, rb));
            }
        } catch (e) {
            console.log(e);
        }

        Ext.Msg.show({
            title: 'Error',
            message: 'An error occurred!',
            buttons: Ext.Msg.OK,
            icon: Ext.Msg.ERROR
        });
    });

});