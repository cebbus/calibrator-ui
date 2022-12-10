Ext.define('Admin.enums.MethodType', {
    //extend: 'Admin.enums.Store',
    singleton: true,

    ID_3: {
        name: 'ID_3',
        label: 'ID3'
    },

    C4_5: {
        name: 'C4_5',
        label: 'C4.5'
    },

    GINI: {
        name: 'GINI',
        label: 'Gini'
    },

    TWO_ING: {
        name: 'TWO_ING',
        label: 'Twoing'
    },

    values() {
        return [
            this.ID_3,
            this.C4_5,
            this.GINI,
            this.TWO_ING
        ];
    }
});