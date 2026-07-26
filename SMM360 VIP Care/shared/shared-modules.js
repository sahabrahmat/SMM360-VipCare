/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-modules.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi

   DESCRIPTION :
   Enterprise Module Manager

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-MODULES-001                   */
/* MODULE REGISTRY                                   */
/* ================================================= */

const MODULES={

    dashboard:{
    
    id:1,
    
    name:"Dashboard",
    
    title:"داشبورد",
    
    folder:"dashboard",
    
    page:"dashboard.html",
    
    icon:"📊",
    
    enabled:true
    
    },
    
    reception:{
    
    id:2,
    
    name:"Reception",
    
    title:"پذیرش",
    
    folder:"reception",
    
    page:"reception.html",
    
    icon:"📝",
    
    enabled:true
    
    },
    
    assistant:{
    
    id:3,
    
    name:"Assistant",
    
    title:"اتاق دستیار",
    
    folder:"assistant",
    
    page:"assistant.html",
    
    icon:"🩺",
    
    enabled:true
    
    },
    
    doctor:{
    
    id:4,
    
    name:"Doctor",
    
    title:"اتاق پزشک",
    
    folder:"doctor",
    
    page:"doctor-home.html",
    
    icon:"👨‍⚕️",
    
    enabled:true
    
    },
    
    treatment:{
    
    id:5,
    
    name:"Treatment",
    
    title:"اتاق درمان",
    
    folder:"treatment",
    
    page:"treatment.html",
    
    icon:"💡",
    
    enabled:true
    
    },
    
    roshanak:{
    
    id:6,
    
    name:"Roshanak",
    
    title:"روشنک",
    
    folder:"roshanak",
    
    page:"roshanak.html",
    
    icon:"🌈",
    
    enabled:true
    
    },
    
    pharmacy:{
    
    id:7,
    
    name:"Pharmacy",
    
    title:"داروخانه",
    
    folder:"pharmacy",
    
    page:"pharmacy.html",
    
    icon:"💊",
    
    enabled:true
    
    },
    
    informatics:{
    
    id:8,
    
    name:"Informatics",
    
    title:"انفورماتیک",
    
    folder:"informatics",
    
    page:"informatics.html",
    
    icon:"💻",
    
    enabled:true
    
    },
    
    finance:{
    
    id:9,
    
    name:"Finance",
    
    title:"مالی",
    
    folder:"finance",
    
    page:"finance.html",
    
    icon:"💰",
    
    enabled:true
    
    },
    
    reports:{
    
    id:10,
    
    name:"Reports",
    
    title:"گزارشات",
    
    folder:"reports",
    
    page:"reports.html",
    
    icon:"📑",
    
    enabled:true
    
    },
    
    settings:{
    
    id:99,
    
    name:"Settings",
    
    title:"تنظیمات",
    
    folder:"settings",
    
    page:"settings.html",
    
    icon:"⚙️",
    
    enabled:true
    
    }
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-MODULES-002                   */
    /* CURRENT MODULE                                    */
    /* ================================================= */
    
    let CURRENT_MODULE=null;
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-MODULES-003                   */
    /* SET MODULE                                        */
    /* ================================================= */
    
    function setCurrentModule(name){
    
    if(MODULES[name]){
    
    CURRENT_MODULE=MODULES[name];
    
    }
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-MODULES-004                   */
    /* GET MODULE                                        */
    /* ================================================= */
    
    function getCurrentModule(){
    
    return CURRENT_MODULE;
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-MODULES-005                   */
    /* GET MODULE BY NAME                                */
    /* ================================================= */
    
    function getModule(name){
    
    return MODULES[name]||null;
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-MODULES-006                   */
    /* GET ALL MODULES                                   */
    /* ================================================= */
    
    function getModules(){
    
    return MODULES;
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-MODULES-007                   */
    /* MODULE ENABLED                                    */
    /* ================================================= */
    
    function isModuleEnabled(name){
    
    return MODULES[name]?.enabled===true;
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-MODULES-008                   */
    /* EXPORT                                            */
    /* ================================================= */
    
    window.MODULES=MODULES;
    
    window.setCurrentModule=setCurrentModule;
    
    window.getCurrentModule=getCurrentModule;
    
    window.getModule=getModule;
    
    window.getModules=getModules;
    
    window.isModuleEnabled=isModuleEnabled;
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-MODULES-999                   */
    /* END VERSION : 0.0.1                               */
    /* ================================================= */