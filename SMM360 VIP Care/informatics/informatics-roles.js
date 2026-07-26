/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : informatics-roles.js
   MODULE      : Informatics
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   نقش‌های واحد انفورماتیک

========================================================== */


/* ================================================= */
/* SECTION ID : INFORMATICS-ROLES-001                */
/* ROLE DEFINITIONS                                  */
/* تعریف نقش‌ها                                      */
/* ================================================= */

const INFORMATICS_ROLES = {

    ADMIN: {

        id: "INF-001",

        code: "ADMIN",

        title: "مدیر انفورماتیک",

        level: 100

    },

    SUPERVISOR: {

        id: "INF-002",

        code: "SUPERVISOR",

        title: "سرپرست انفورماتیک",

        level: 90

    },

    SYSTEM_ENGINEER: {

        id: "INF-003",

        code: "SYSTEM_ENGINEER",

        title: "کارشناس سیستم",

        level: 80

    },

    NETWORK_ENGINEER: {

        id: "INF-004",

        code: "NETWORK_ENGINEER",

        title: "کارشناس شبکه",

        level: 75

    },

    DATABASE_ENGINEER: {

        id: "INF-005",

        code: "DATABASE_ENGINEER",

        title: "کارشناس پایگاه داده",

        level: 75

    },

    SECURITY_ENGINEER: {

        id: "INF-006",

        code: "SECURITY_ENGINEER",

        title: "کارشناس امنیت",

        level: 80

    },

    SOFTWARE_ENGINEER: {

        id: "INF-007",

        code: "SOFTWARE_ENGINEER",

        title: "کارشناس نرم افزار",

        level: 70

    },

    TECHNICIAN: {

        id: "INF-008",

        code: "TECHNICIAN",

        title: "کارشناس پشتیبانی",

        level: 60

    },

    OPERATOR: {

        id: "INF-009",

        code: "OPERATOR",

        title: "اپراتور سیستم",

        level: 40

    },

    VIEWER: {

        id: "INF-010",

        code: "VIEWER",

        title: "مشاهده کننده",

        level: 10

    }

};


/* ================================================= */
/* SECTION ID : INFORMATICS-ROLES-002                */
/* GET ROLE                                          */
/* دریافت نقش                                        */
/* ================================================= */

function getInformaticsRole(code){

    return INFORMATICS_ROLES[code] || null;

}


/* ================================================= */
/* SECTION ID : INFORMATICS-ROLES-003                */
/* GET ALL ROLES                                     */
/* دریافت همه نقش‌ها                                 */
/* ================================================= */

function getAllInformaticsRoles(){

    return Object.values(INFORMATICS_ROLES);

}


/* ================================================= */
/* SECTION ID : INFORMATICS-ROLES-004                */
/* EXPORT                                            */
/* خروجی ماژول                                       */
/* ================================================= */

if(typeof module !== "undefined"){

    module.exports = {

        INFORMATICS_ROLES,

        getInformaticsRole,

        getAllInformaticsRoles

    };

}