/* ===========================================================
   SMM360 VIP Care
   Roles & Permissions
=========================================================== */

const USER_ROLES = {

    //========================================================
    // MANAGEMENT
    //========================================================

    management: {

        id: 1,

        title: "مدیریت",

        dashboard: true,

        reception: true,

        assistant: true,

        doctor: true,

        treatment: true,

        finance: true,

        reports: true,

        warehouse: true,

        settings: true,

        ai: true

    },

    //========================================================
    // DOCTOR
    //========================================================

    doctor: {

        id: 2,

        title: "پزشک",

        dashboard: true,

        reception: false,

        assistant: false,

        doctor: true,

        treatment: true,

        finance: false,

        reports: true,

        warehouse: false,

        settings: false,

        ai: true

    },

    //========================================================
    // ASSISTANT
    //========================================================

    assistant: {

        id: 3,

        title: "دستیار",

        dashboard: true,

        reception: false,

        assistant: true,

        doctor: false,

        treatment: true,

        finance: false,

        reports: false,

        warehouse: false,

        settings: false,

        ai: false

    },

    //========================================================
    // RECEPTION
    //========================================================

    reception: {

        id: 4,

        title: "منشی",

        dashboard: true,

        reception: true,

        assistant: false,

        doctor: false,

        treatment: false,

        finance: false,

        reports: false,

        warehouse: false,

        settings: false,

        ai: false

    },

    //========================================================
    // FINANCE
    //========================================================

    finance: {

        id: 5,

        title: "مالی",

        dashboard: true,

        reception: false,

        assistant: false,

        doctor: false,

        treatment: false,

        finance: true,

        reports: true,

        warehouse: false,

        settings: false,

        ai: false

    },

    //========================================================
    // WAREHOUSE
    //========================================================

    warehouse: {

        id: 6,

        title: "انبار",

        dashboard: true,

        reception: false,

        assistant: false,

        doctor: false,

        treatment: false,

        finance: false,

        reports: false,

        warehouse: true,

        settings: false,

        ai: false

    }

};

Object.freeze(USER_ROLES);