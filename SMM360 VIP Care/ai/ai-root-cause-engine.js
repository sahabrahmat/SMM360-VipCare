/* ==========================================================
   SMM360 VIP Care
   ROOT CAUSE ENGINE
   Version : 0.0.1
========================================================== */

/* ==========================================================
   ROOT CAUSE STORAGE
========================================================== */

const RootCauseResults=[];

/* ==========================================================
   REGISTER ROOT CAUSE
========================================================== */

function registerRootCause(result){

    RootCauseResults.push(result);

    return result;

}

/* ==========================================================
   GET ROOT CAUSE
========================================================== */

function getRootCause(patientID){

    return RootCauseResults.filter(

        item=>item.patientID===patientID

    );

}

/* ==========================================================
   CLEAR ROOT CAUSE
========================================================== */

function clearRootCause(patientID){

    return RootCauseResults.filter(

        item=>item.patientID!==patientID

    );

}

/* ==========================================================
   END OF FILE
========================================================== */