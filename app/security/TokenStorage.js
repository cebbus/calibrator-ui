Ext.define('Admin.security.TokenStorage', {
    singleton: true,
    storageKey: 'json-web-token',

    clear() {
        localStorage.removeItem(this.storageKey);
        sessionStorage.removeItem(this.storageKey);
    },

    retrieve(key) {
        if (!key) {
            key = this.storageKey;
        }

        let localToken = localStorage.getItem(key),
            sessionToken = sessionStorage.getItem(key);

        return localToken || sessionToken;
    },

    checkSessions() {
        try {
            return !!this.decodeToken(this.storageKey);
        } catch (e) {
            return false;
        }
    },

    save(token, rememberMe) {
        this.getStorage(rememberMe).setItem(this.storageKey, token);
    },

    getStorage(rememberMe) {
        if (rememberMe === null) {
            rememberMe = !!localStorage.getItem(this.storageKey);
        }

        return rememberMe ? localStorage : sessionStorage;
    },

    decodeToken(key) {
        let token = this.retrieve(key);
        if (!token) {
            return null;
        }

        //return JSON.parse(window.atob(token.split('.')[1]));
        return JSON.parse(b64DecodeUnicode(token.split('.')[1]));

        function b64DecodeUnicode(str) {
            return decodeURIComponent(atob(str.replace(/-/g, '+').replace(/_/g, '/')).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        }
    },

    getUser() {
        let token = this.decodeToken();
        if (!token) {
            return null;
        }

        return token['sub'];
    }

});