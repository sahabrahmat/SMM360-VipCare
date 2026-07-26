/* ==========================================================
   SMM360 VIP Care
   DIAGNOSIS ENGINE
========================================================== */

const DiagnosisResults=[];

function addDiagnosis(data){

    DiagnosisResults.push(data);

    return data;

}

function getDiagnosis(patientID){

    return DiagnosisResults.filter(

        item=>item.patientID===patientID

    );

}

function removeDiagnosis(patientID){

    return DiagnosisResults.filter(

        item=>item.patientID!==patientID

    );

}