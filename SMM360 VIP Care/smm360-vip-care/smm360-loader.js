/* ==========================================================
   SMM360 VIP Care
   CORE LOADER
   Version : 0.0.1
========================================================== */

(function(){

    const isRoot=

        window.location.pathname.endsWith("index.html") ||

        window.location.pathname.endsWith("login.html") ||

        window.location.pathname.endsWith("dashboard.html");

    const base=isRoot

        ?"Core/"

        :"../../Core/";

    const scripts=[

        base+"Config/config.js",

        base+"core-engine.js",

        base+"patient-engine.js",

        base+"visit-engine.js",

        base+"user-engine.js",

        base+"permission-engine.js",

        base+"audit-engine.js",

        base+"backup-engine.js",

        base+"AI/root-cause-engine.js",

        base+"AI/diagnosis/diagnosis-engine.js",

        base+"AI/knowledge/knowledge-base.js",

        base+"AI/learning/learning-engine.js",

        base+"AI/prediction/prediction-engine.js",

        base+"AI/summary/summary-engine.js",

        base+"AI/treatment/treatment-engine.js"

    ];

    scripts.forEach(function(file){

        const script=document.createElement("script");

        script.src=file;

        script.defer=true;

        script.onerror=function(){

            console.error("Module Not Found :",file);

        };

        document.body.appendChild(script);

    });

})();