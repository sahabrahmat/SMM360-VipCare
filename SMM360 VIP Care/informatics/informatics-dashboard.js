/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : informatics-dashboard.js
   MODULE      : Informatics
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   داشبورد مدیریتی واحد انفورماتیک

========================================================== */


/* ================================================= */
/* SECTION ID : INFORMATICS-DASHBOARD-001            */
/* DASHBOARD DATA                                    */
/* ================================================= */

const InformaticsDashboard={

    statistics:{
    
    users:0,
    
    roles:0,
    
    sessions:0,
    
    audits:0,
    
    backups:0
    
    }
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-DASHBOARD-002            */
    /* LOAD DASHBOARD                                    */
    /* ================================================= */
    
    InformaticsDashboard.load=function(){
    
    console.log("Informatics Dashboard Loaded");
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-DASHBOARD-003            */
    /* UPDATE STATISTICS                                 */
    /* ================================================= */
    
    InformaticsDashboard.update=function(data){
    
    this.statistics={
    
    ...this.statistics,
    
    ...data
    
    };
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-DASHBOARD-004            */
    /* GET STATISTICS                                    */
    /* ================================================= */
    
    InformaticsDashboard.getStatistics=function(){
    
    return this.statistics;
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-DASHBOARD-005            */
    /* RESET                                             */
    /* ================================================= */
    
    InformaticsDashboard.reset=function(){
    
    this.statistics={
    
    users:0,
    
    roles:0,
    
    sessions:0,
    
    audits:0,
    
    backups:0
    
    };
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-DASHBOARD-006            */
    /* EXPORT                                            */
    /* ================================================= */
    
    if(typeof module!=="undefined"){
    
    module.exports=InformaticsDashboard;
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-DASHBOARD-999            */
    /* END VERSION : 0.0.1                               */
    /* پایان ماژول                                       */
    /* ================================================= */