/* ===========================================================
   SMM360 VIP Care
   Global System Configuration
   Version : 1.0
=========================================================== */

const SYSTEM_CONFIG = {

    // -------------------------------------------------------
    // SYSTEM
    // -------------------------------------------------------

    systemName: "SMM360 VIP Care",

    version: "1.0",

    language: "fa",

    direction: "rtl",

    developer: "Seyed Mehdi Mohammadi",

    // -------------------------------------------------------
    // PATIENT ID
    // -------------------------------------------------------

    patientCode: {

        prefix: "SMM360",

        format: "SMM360-YY-MM-NNN",

        resetEveryMonth: true

    },

    // -------------------------------------------------------
    // DOCTOR ROOM
    // -------------------------------------------------------

    doctorRooms: [

        {

            id: 1,

            name: "اتاق پزشک ۱",

            active: true

        },

        {

            id: 2,

            name: "اتاق پزشک ۲",

            active: false

        },

        {

            id: 3,

            name: "اتاق پزشک ۳",

            active: false

        }

    ],

    // -------------------------------------------------------
    // TREATMENT ROOM
    // -------------------------------------------------------

    treatmentRooms: [

        {

            id: 1,

            name: "اتاق روشنک",

            active: true

        }

    ],

    // -------------------------------------------------------
    // Dawakhaneh
    // -------------------------------------------------------

    pharmacy: {

    id: 1,

    name: "دواخانه ریحانة المهدی",

    englishName: "Rayhanat Al-Mahdi Dawakhaneh",

    active: true,

    code: "PH-01",

    manager: "",

    phone: "",

    autoReceivePrescription: true,

    autoUpdateInventory: true

    },

    // -------------------------------------------------------
    // SMART ANALYSIS
    // -------------------------------------------------------

    smartAnalysis: {

        enabled: true,

        autoSave: true,

        aiEnabled: true,

        bodySystemCount: 12

    },

    // -------------------------------------------------------
    // DASHBOARD
    // -------------------------------------------------------

    dashboard: {

        refreshTime: 5,

        chartAnimation: true,

        showFinancial: true,

        showAIStatus: true

    },

    // -------------------------------------------------------
    // RECEPTION
    // -------------------------------------------------------

    reception: {

        autoPrintCard: true,

        autoPrintReceipt: false,

        createVisitAutomatically: true

    }

};

Object.freeze(SYSTEM_CONFIG);