/* ==========================================================
   PATIENT ENGINE
========================================================== */

const Patients=[];

function addPatient(patient){

    Patients.push(patient);

    return patient;

}

function getPatients(){

    return Patients;

}

function getPatientByID(id){

    return Patients.find(

        patient=>patient.id===id

    );

}

/* ==========================================================
   END OF FILE
========================================================== */