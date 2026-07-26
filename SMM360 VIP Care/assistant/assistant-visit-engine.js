/* ===========================================================
   SMM360 VIP Care
   Visit Engine
=========================================================== */

class VisitEngine {

    constructor() {

        this.currentVisit = null;

    }

    //========================================================
    // Create New Visit
    //========================================================

    create(patientID) {

        const now = new Date();

        this.currentVisit = {

            visitID: Date.now(),

            patientID: patientID,

            visitDate: now,

            visitNumber: 1,

            reception: {},

            assistant: {},

            doctor: {},

            treatment: {},

            pharmacy: {},

            finance: {},

            report: {},

            ai: {}

        };

        return this.currentVisit;

    }

    //========================================================
    // Load Visit
    //========================================================

    load(visitObject){

        this.currentVisit = visitObject;

    }

    //========================================================
    // Save Reception
    //========================================================

    saveReception(data){

        this.currentVisit.reception=data;

    }

    //========================================================
    // Save Assistant
    //========================================================

    saveAssistant(data){

        this.currentVisit.assistant=data;

    }

    //========================================================
    // Save Doctor
    //========================================================

    saveDoctor(data){

        this.currentVisit.doctor=data;

    }

    //========================================================
    // Save Treatment
    //========================================================

    saveTreatment(data){

        this.currentVisit.treatment=data;

    }

    //========================================================
    // Save Pharmacy
    //========================================================

    savePharmacy(data){

        this.currentVisit.pharmacy=data;

    }

    //========================================================
    // Save Finance
    //========================================================

    saveFinance(data){

        this.currentVisit.finance=data;

    }

    //========================================================
    // Save AI
    //========================================================

    saveAI(data){

        this.currentVisit.ai=data;

    }

    //========================================================
    // Current Visit
    //========================================================

    get(){

        return this.currentVisit;

    }

}

const VISIT = new VisitEngine();

/* ==========================================================
   VISIT ENGINE
========================================================== */

const Visits=[];

function addVisit(visit){

    Visits.push(visit);

    return visit;

}

function getVisits(){

    return Visits;

}

function getVisitByID(id){

    return Visits.find(

        visit=>visit.id===id

    );

}

/* ==========================================================
   END OF FILE
========================================================== */