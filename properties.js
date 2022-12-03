const AdminProperties = {
    APP_NAME:{
        SHORT:'CAL',
        LONG: 'Model Calibrator'
    },

    ENDPOINT: 'http://localhost:8080/api',

    SESSION: {
        TIME_OUT_PERIOD: 30,
        TIME_OUT_GRACE_PERIOD: 1
    },

    AJAX: {
        TIME_OUT: 5 * 60 * 1000, //5 minutes
        INTERVAL: {
            RARELY: 25 * 1000, //25 seconds
            FREQUENTLY: 10 * 1000 //10 seconds
        }
    }
};