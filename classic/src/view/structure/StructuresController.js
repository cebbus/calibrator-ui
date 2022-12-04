Ext.define('Admin.view.structure.StructuresController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.structures',

    onAddStructureClick: function () {
        const store = this.getStore('structures');
        const record = store.getModel().create();

        this.openEditor('Add Structure', record);
    },

    onEditStructureClick: function () {
        const record = this.getViewModel().get('theStructure');
        this.openEditor('Edit Structure', record);
    },

    onDeleteStructureClick: function () {
        const record = this.getViewModel().get('theStructure');
        record.erase();
    },

    onCreateStructureClick: function () {
        const me = this;
        const view = me.getView();
        const store = me.getStore('structures');
        const record = me.getViewModel().get('theStructure');
        if (record == null) {
            return;
        }

        let confirm;
        let confirmMsg;
        if (record.get('created')) {
            confirm = 'Regenerate Structure';
            confirmMsg = 'Are you sure you want to regenerate the structure?';
        } else {
            confirm = 'Generate Structure';
            confirmMsg = 'Are you sure you want to generate the structure?';
        }

        Ext.Msg.confirm(
            confirm,
            confirmMsg,
            btn => {
                if (btn !== 'yes') return;

                view.mask('Please wait');

                const id = record.get('id');

                Ext.Ajax.request({
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    url: AdminProperties.ENDPOINT + "/structures/generate/" + id,
                    callback() {
                        store.reload();
                        view.unmask();
                    }
                });
            }
        );
    },

    openEditor: function (title, record) {
        const store = this.getStore('structures');

        Ext.create({
            xtype: 'structureeditor',
            title: title,
            structureRecord: record,
            listeners: {
                editorsave: function (win) {
                    store.reload();
                    win.close();
                }
            }
        });
    }
});
