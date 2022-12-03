Ext.define('Admin.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    onFaceBookLogin: function () {
        this.redirectTo('dashboard', true);
    },

    onLoginButton: function () {
        const me = this;
        const form = me.getView();
        const credential = form.getValues();

        Ext.Ajax.request({
            method: 'POST',
            url: AdminProperties.ENDPOINT + "/login",
            headers: {'Content-Type': 'application/json'},
            params: Ext.JSON.encode(credential),
            success(response) {
                const data = Ext.JSON.decode(response.responseText);
                const store = data['clientStore'] || data;

                Admin.security.TokenStorage.save(store.token);
                me.redirectTo('dashboard', true);
            },
            failure(response) {
                Admin.security.TokenStorage.clear();
            }
        });
    },

    onLoginAsButton: function () {
        this.redirectTo('login', true);
    },

    onNewAccount: function () {
        this.redirectTo('register', true);
    },

    onSignupClick: function () {
        this.redirectTo('dashboard', true);
    },

    onResetClick: function () {
        this.redirectTo('dashboard', true);
    }
});