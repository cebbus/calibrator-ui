Ext.define('Admin.enums.DataType', {
    //extend: 'Admin.enums.Store',
    singleton: true,

    STRING: {
        name: 'STRING',
        label: 'string',
        modelFieldConfig: {
            type: 'string'
        },
        formFieldConfig: {
            xtype: 'textfield'
        },
        gridColumnConfig: {
            xtype: 'gridcolumn',
            filter: {
                type: 'string'
            }
        }
    },

    INTEGER: {
        name: 'INTEGER',
        label: 'integer',
        modelFieldConfig: {
            type: 'int'
        },
        formFieldConfig: {
            xtype: 'numberfield',
            allowDecimals: false
        },
        gridColumnConfig: {
            xtype: 'numbercolumn',
            format: '0,000',
            filter: {
                type: 'number',
                itemDefaults:{
                    decimalPrecision: 0
                }
            }
        }
    },

    DOUBLE: {
        name: 'DOUBLE',
        label: 'double',
        modelFieldConfig: {
            type: 'number'
        },
        formFieldConfig: {
            xtype: 'numberfield',
            decimalPrecision: 8
        },
        gridColumnConfig: {
            xtype: 'numbercolumn',
            format: '0,000.00000000',
            filter: {
                type: 'number',
                itemDefaults:{
                    decimalPrecision: 8
                }
            }
        }
    },

    DATE: {
        name: 'DATE',
        label: 'date',
        modelFieldConfig: {
            type: 'date',
            dateFormat: 'Y-m-d'
        },
        formFieldConfig: {
            xtype: 'datefield',
            format: 'd.m.Y',
            submitFormat: 'Y-m-d'
        },
        gridColumnConfig: {
            xtype: 'datecolumn',
            format: 'd.m.Y',
            filter: {
                type: 'date',
                dateFormat: 'Y-m-d'
            }
        }
    },

    BOOLEAN: {
        name: 'BOOLEAN',
        label: 'boolean',
        modelFieldConfig: {
            type: 'boolean'
        },
        formFieldConfig: {
            xtype: 'checkboxfield',
            inputValue: true,
            uncheckedValue: false
        },
        gridColumnConfig: {
            xtype: 'checkcolumn',
            filter: {
                type: 'boolean'
            },
            listeners: {
                beforecheckchange() {
                    return false;
                }
            }
        }
    },

    getFormFieldFor(type) {
        return Ext.clone(this[type].formFieldConfig);
    },

    values() {
        return [
            this.STRING,
            this.INTEGER,
            this.DOUBLE,
            this.DATE,
            this.BOOLEAN
        ];
    }
});