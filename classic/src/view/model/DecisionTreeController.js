Ext.define('Admin.view.model.DecisionTreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.forest',

    onMethodChange: function (combo, value) {
        this.loadTreeStore(false);
    },

    onStructureChange: function (combo, value) {
        this.loadTreeStore(false);
    },

    onTrainingClick: function () {
        this.loadTreeStore(true);
    },

    onTestClick: function () {

    },

    loadTreeStore: function (training) {
        const me = this;
        const view = me.getView();
        const method = view.down('#methodCombo').getSelection();
        const structure = view.down('#structureCombo').getSelection();

        if (Ext.isEmpty(method) || Ext.isEmpty(structure)) {
            return;
        }

        view.mask('Please wait...');

        Ext.Ajax.request({
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            url: AdminProperties.ENDPOINT + "/forest" + (training ? "/training" : "/load"),
            params: Ext.JSON.encode({
                methodType: method.get('name'),
                structureId: structure.get('id')
            }),
            success(response) {
                if (Ext.isEmpty(response.responseText)) {
                    me.getTreeStore().setRoot({
                        id: 0,
                        name: null,
                        children: []
                    });
                } else {
                    const data = Ext.JSON.decode(response.responseText);
                    me.getTreeStore().setRoot(data);
                }
            },
            callback() {
                view.unmask();
            }
        });
    },

    getTreeStore: function () {
        return this.getStore('decisionTree');
    }
});
