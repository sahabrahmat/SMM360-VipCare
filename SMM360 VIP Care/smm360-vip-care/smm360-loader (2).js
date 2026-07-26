/* ==========================================================
   SMM360 VIP Care
   CORE LOADER
   Version : 0.0.1
========================================================== */

/* ==========================================================
   BASE PATH
========================================================== */

const isRoot =
    window.location.pathname.split("/").pop() === "index.html" ||
    window.location.pathname.split("/").pop() === "login.html";

const base =
    isRoot ? "Core/" : "../Core/";

/* ==========================================================
   CORE ENGINES
========================================================== */

const scripts = [

    base + "config/system-config.js",

    base + "config/roles.js",

    base + "config/modules.js",

    base + "audit-engine.js",

    base + "permission-engine.js",

    base + "user-engine.js",

    base + "staff-engine.js",

    base + "patient-engine.js",

    base + "visit-engine.js",

    base + "backup-engine.js",

    base + "report-engine.js",

    base + "core-engine.js",

    (isRoot ? "AI/ai-engine.js" : "../AI/ai-engine.js")

];

/* ==========================================================
   LOAD SCRIPTS
========================================================== */

function loadScripts(index = 0){

    if(index >= scripts.length){

        console.log("SMM360 Core Loaded");

        return;

    }

    const script = document.createElement("script");

    script.src = scripts[index];

    script.onload = function(){

        loadScripts(index + 1);

    };

    script.onerror = function(){

        console.error("Load Error :", scripts[index]);

        loadScripts(index + 1);

    };

    document.head.appendChild(script);

}

/* ==========================================================
   START LOADER
========================================================== */

loadScripts();

/* ==========================================================
   END OF FILE
========================================================== */