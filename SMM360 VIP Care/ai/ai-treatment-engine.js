/* ==========================================================
   SMM360 VIP Care
   AI TREATMENT ENGINE
   Version : 0.0.1
========================================================== */

/* ==========================================================
   TREATMENT STORAGE
========================================================== */

const TreatmentSuggestions=[];

/* ==========================================================
   ADD TREATMENT
========================================================== */

function addTreatmentSuggestion(data){

    TreatmentSuggestions.push(data);

    return data;

}

/* ==========================================================
   GET TREATMENT
========================================================== */

function getTreatmentSuggestion(patientID){

    return TreatmentSuggestions.filter(

        item=>item.patientID===patientID

    );

}

/* ==========================================================
   CLEAR TREATMENT
========================================================== */

function clearTreatmentSuggestion(patientID){

    return TreatmentSuggestions.filter(

        item=>item.patientID!==patientID

    );

}

/* ==========================================================
   END OF FILE
========================================================== */