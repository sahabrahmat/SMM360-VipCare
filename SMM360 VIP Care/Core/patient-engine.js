/* ===========================================================
   SMM360 VIP Care
   Patient Engine
=========================================================== */

class PatientEngine {

    constructor() {

        this.currentPatient = null;

    }

    //========================================================
    // Create Patient
    //========================================================

    create(patientData) {

        this.currentPatient = {

            id: patientData.id,

            nationalCode: patientData.nationalCode,

            fullname: patientData.fullname,

            gender: patientData.gender,

            age: patientData.age,

            phone: patientData.phone,

            address: patientData.address,

            visitCount: 1,

            registerDate: new Date(),

            status: "Waiting",

            doctorRoom: 1,

            treatmentRoom: "روشنک",

            discountType: null,

            vip: false,

            charity: false,

            sayed: false,

            martyrFamily: false,

            smartAnalysis: null,

            assistantAnalysis: null,

            doctorAnalysis: null,

            treatmentAnalysis: null,

            prescriptions: [],

            reports: []

        };

        return this.currentPatient;

    }

    //========================================================
    // Load Patient
    //========================================================

    load(patientObject){

        this.currentPatient = patientObject;

    }

    //========================================================
    // Update Status
    //========================================================

    setStatus(status){

        if(this.currentPatient){

            this.currentPatient.status = status;

        }

    }

    //========================================================
    // Current Patient
    //========================================================

    get(){

        return this.currentPatient;

    }

    //========================================================
    // Add Prescription
    //========================================================

    addPrescription(item){

        this.currentPatient.prescriptions.push(item);

    }

    //========================================================
    // Add Report
    //========================================================

    addReport(report){

        this.currentPatient.reports.push(report);

    }

}

const PATIENT = new PatientEngine();