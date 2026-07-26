/* ===========================================================
   SMM360 VIP Care
   Artificial Intelligence Engine
=========================================================== */

class AIEngine {

    constructor() {

        this.version = "0.0.1";

        this.status = "Ready";

        this.rootCause = [];

        this.predictions = [];

        this.recommendations = [];

    }

    //========================================================
    // Analyze Patient
    //========================================================

    analyze(patient, visit){

        console.log("AI Analysis Started...");

        return {

            score: 0,

            riskLevel: "Unknown",

            rootCause: [],

            suggestions: [],

            nextStep: ""

        };

    }

    //========================================================
    // Root Cause
    //========================================================

    addRootCause(title, confidence){

        this.rootCause.push({

            title,

            confidence

        });

    }

    //========================================================
    // Recommendation
    //========================================================

    addRecommendation(text){

        this.recommendations.push(text);

    }

    //========================================================
    // Prediction
    //========================================================

    addPrediction(text){

        this.predictions.push(text);

    }

    //========================================================
    // Reset
    //========================================================

    clear(){

        this.rootCause=[];

        this.predictions=[];

        this.recommendations=[];

    }

}

const AI = new AIEngine();