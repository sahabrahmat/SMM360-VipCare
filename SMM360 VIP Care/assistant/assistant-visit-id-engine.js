/* ==========================================================
   SMM360 VIP Care
   VISIT ID ENGINE
   Version : 0.0.1
========================================================== */

/* ==========================================================
   VISIT COUNTERS
========================================================== */

const VisitCounters={

};

/* ==========================================================
   CREATE VISIT ID
========================================================== */

function generateVisitID(patientID){

    if(!VisitCounters[patientID]){

        VisitCounters[patientID]=1;

    }

    const visit=

        "V"+

        String(

            VisitCounters[patientID]

        ).padStart(2,"0");

    VisitCounters[patientID]++;

    return visit;

}

/* ==========================================================
   END OF FILE
========================================================== */