/* ==========================================================
   SMM360 VIP Care
   ID GENERATOR ENGINE
   Version : 0.0.1
========================================================== */

/* ==========================================================
   PATIENT ID
========================================================== */

function generatePatientID(year, month, number){

    const yy = String(year).slice(-2);

    const mm = String(month).padStart(2,"0");

    const no = String(number).padStart(3,"0");

    return `SMM360-${yy}-${mm}-${no}`;

}

/* ==========================================================
   VISIT ID
========================================================== */

function generateVisitID(visitNumber){

    return "V" + String(visitNumber).padStart(2,"0");

}

/* ==========================================================
   FULL VISIT CODE
========================================================== */

function generateFullVisitCode(patientID, visitNumber){

    return patientID + "-" + generateVisitID(visitNumber);

}

/* ==========================================================
   EXAMPLES

   SMM360-05-04-001

   SMM360-05-04-001-V01

========================================================== */

/* ==========================================================
   END OF FILE
========================================================== */