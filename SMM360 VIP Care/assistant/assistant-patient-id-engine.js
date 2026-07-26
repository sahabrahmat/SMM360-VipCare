/* ==========================================================
   SMM360 VIP Care
   PATIENT ID ENGINE
   Version : 0.0.1
========================================================== */

/* ==========================================================
   LAST GENERATED IDS
========================================================== */

const PatientIDCounter={

};

/* ==========================================================
   CREATE PATIENT ID
========================================================== */

function generatePatientID(year,month){

    const yy=String(year).slice(-2);

    const mm=String(month).padStart(2,"0");

    const key=`${yy}-${mm}`;

    if(!PatientIDCounter[key]){

        PatientIDCounter[key]=1;

    }

    const number=String(

        PatientIDCounter[key]

    ).padStart(3,"0");

    PatientIDCounter[key]++;

    return `SMM360-${yy}-${mm}-${number}`;

}

/* ==========================================================
   RESET MONTH COUNTER
========================================================== */

function resetPatientIDCounter(year,month){

    const yy=String(year).slice(-2);

    const mm=String(month).padStart(2,"0");

    PatientIDCounter[`${yy}-${mm}`]=1;

}

/* ==========================================================
   GET CURRENT COUNTER
========================================================== */

function getPatientIDCounter(year,month){

    const yy=String(year).slice(-2);

    const mm=String(month).padStart(2,"0");

    return PatientIDCounter[`${yy}-${mm}`]||1;

}

/* ==========================================================
   END OF FILE
========================================================== */