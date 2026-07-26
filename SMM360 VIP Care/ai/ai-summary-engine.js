/* ==========================================================
   SMM360 VIP Care
   SUMMARY ENGINE
   Version : 0.0.1
========================================================== */

/* ==========================================================
   SUMMARY STORAGE
========================================================== */

const SummaryResults=[];

/* ==========================================================
   CREATE SUMMARY
========================================================== */

function createSummary(summary){

    SummaryResults.push(summary);

    return summary;

}

/* ==========================================================
   GET SUMMARY
========================================================== */

function getSummary(patientID){

    return SummaryResults.filter(

        item=>item.patientID===patientID

    );

}

/* ==========================================================
   CLEAR SUMMARY
========================================================== */

function clearSummary(patientID){

    return SummaryResults.filter(

        item=>item.patientID!==patientID

    );

}

/* ==========================================================
   END OF FILE
========================================================== */