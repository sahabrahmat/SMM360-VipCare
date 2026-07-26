/* ==========================================================
   SMM360 VIP Care
   PREDICTION ENGINE
========================================================== */

const PredictionResults=[];

function addPrediction(result){

    PredictionResults.push(result);

}

function getPrediction(patientID){

    return PredictionResults.filter(

        item=>item.patientID===patientID

    );

}