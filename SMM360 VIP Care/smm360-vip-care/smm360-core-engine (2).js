/* ==========================================================
   CORE ENGINE
========================================================== */

const CoreEngine={

    version:"0.0.1",

    initialized:false,

    init(){

        Database.connect();

        this.initialized=true;

        console.log("Core Engine Started");

    }

};

/* ==========================================================
   END OF FILE
========================================================== */