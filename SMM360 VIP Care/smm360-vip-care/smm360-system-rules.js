/* ==========================================================
   SMM360 VIP Care
   SYSTEM RULES
   Version : 0.0.1
========================================================== */

/* ==========================================================
   PROJECT INFORMATION
========================================================== */

const SYSTEM_INFO = {

    projectName: "SMM360 VIP Care",

    version: "0.0.1",

    edition: "Enterprise",

    language: "fa",

    calendar: "jalali"

};

/* ==========================================================
   GENERAL RULES
========================================================== */

const SYSTEM_RULES = {

    internetRequired: false,

    aiRequired: false,

    editableWithoutAudit: false,

    deleteAllowed: false,

    multiLanguage: true,

    offlineMode: true

};

/* ==========================================================
   PATIENT ID FORMAT
========================================================== */

const PATIENT_ID = {

    prefix: "SMM360",

    format: "SMM360-YY-MM-###"

};

/* ==========================================================
   VISIT ID FORMAT
========================================================== */

const VISIT_ID = {

    prefix: "V",

    format: "V01"

};

/* ==========================================================
   AUDIT RULES
========================================================== */

const AUDIT_RULES = {

    enabled: true,

    requiredReason: true,

    requiredUser: true,

    requiredDate: true,

    requiredTime: true,

    requiredOldValue: true,

    requiredNewValue: true

};

/* ==========================================================
   USER ACCESS
========================================================== */

const ACCESS_RULES = {

    permissionBased: true,

    multipleRoles: true,

    guestAllowed: false

};

/* ==========================================================
   MODULE STATUS
========================================================== */

const MODULE_STATUS = {

    reception: false,

    assistant: false,

    doctor: false,

    roshanak: false,

    dawakhaneh: false,

    reports: false,

    ai: false

};

/* ==========================================================
   END OF FILE
========================================================== */