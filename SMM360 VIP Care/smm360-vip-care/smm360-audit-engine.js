/* ==========================================================
   SMM360 VIP Care
   AUDIT ENGINE
   Version : 0.0.1
========================================================== */

/* ==========================================================
   AUDIT LOG STORAGE
========================================================== */

const AuditLogs = [];

/* ==========================================================
   CREATE AUDIT LOG
========================================================== */

function addAuditLog({

    tableName,

    recordID,

    fieldName,

    oldValue,

    newValue,

    action,

    reason,

    userID,

    userName,

    userRole,

    date,

    time

}){

    const log={

        id:AuditLogs.length+1,

        tableName,

        recordID,

        fieldName,

        oldValue,

        newValue,

        action,

        reason,

        userID,

        userName,

        userRole,

        date,

        time

    };

    AuditLogs.push(log);

    return log;

}

/* ==========================================================
   GET ALL LOGS
========================================================== */

function getAuditLogs(){

    return AuditLogs;

}

/* ==========================================================
   GET LOGS BY TABLE
========================================================== */

function getAuditLogsByTable(tableName){

    return AuditLogs.filter(

        log=>log.tableName===tableName

    );

}

/* ==========================================================
   GET LOGS BY RECORD
========================================================== */

function getAuditLogsByRecord(recordID){

    return AuditLogs.filter(

        log=>log.recordID===recordID

    );

}

/* ==========================================================
   GET LOGS BY USER
========================================================== */

function getAuditLogsByUser(userID){

    return AuditLogs.filter(

        log=>log.userID===userID

    );

}

/* ==========================================================
   END OF FILE
========================================================== */