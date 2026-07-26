/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   موتور مشترک تمام ماژول‌های سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-001                           */
/* SYSTEM INFO                                       */
/* اطلاعات سیستم                                     */
/* ================================================= */

const SMM360 = {

    name : "SMM360 VIP Care",
    
    version : "0.0.1",
    
    edition : "Enterprise",
    
    author : "Dr. Seyed Mehdi Mohammadi"
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-002                           */
    /* CURRENT DATE & TIME                               */
    /* تاریخ و ساعت                                      */
    /* ================================================= */
    
    function updateClock(){
    
    const time=document.getElementById("dashboardTime");
    
    const date=document.getElementById("dashboardDate");
    
    if(!time) return;
    
    const now=new Date();
    
    time.innerHTML=now.toLocaleTimeString("fa-IR");
    
    if(date){
    
    date.innerHTML=now.toLocaleDateString("fa-IR");
    
    }
    
    }
    
    setInterval(updateClock,1000);
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-003                           */
    /* PAGE TITLE                                        */
    /* عنوان صفحه                                        */
    /* ================================================= */
    
    function setPageTitle(title){
    
    document.title="SMM360 VIP Care | "+title;
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-004                           */
    /* MESSAGE BOX                                       */
    /* پیام سیستم                                        */
    /* ================================================= */
    
    function showMessage(message){
    
    alert(message);
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-005                           */
    /* LOGOUT                                            */
    /* خروج از سیستم                                     */
    /* ================================================= */
    
    function logout(){
    
    if(confirm("آیا از خروج مطمئن هستید؟")){
    
    location.href="../../login/login.html";
    
    }
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-006                           */
    /* FORMAT NUMBER                                     */
    /* قالب اعداد                                        */
    /* ================================================= */
    
    function money(number){
    
    return Number(number).toLocaleString("fa-IR");
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-007                           */
    /* RANDOM ID                                         */
    /* تولید شناسه                                       */
    /* ================================================= */
    
    function randomID(){
    
    return Math.floor(Math.random()*100000000);
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-008                           */
    /* ONLINE STATUS                                     */
    /* وضعیت اتصال                                       */
    /* ================================================= */
    
    window.addEventListener("online",()=>{
    
    console.log("Internet Connected");
    
    });
    
    window.addEventListener("offline",()=>{
    
    console.log("Internet Disconnected");
    
    });
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-009                           */
    /* LOADING                                           */
    /* بارگذاری                                          */
    /* ================================================= */
    
    window.onload=function(){
    
    updateClock();
    
    console.log(
    
    "SMM360 VIP Care Loaded"
    
    );
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-010                           */
    /* EXPORT                                            */
    /* دسترسی عمومی                                      */
    /* ================================================= */
    
    window.SMM360=SMM360;
    
    window.money=money;
    
    window.logout=logout;
    
    window.showMessage=showMessage;
    
    window.randomID=randomID;
    
    window.setPageTitle=setPageTitle;
    
    
    /* ================================================= */
    /* SECTION ID : SHARED-999                           */
    /* END VERSION : 0.0.1                               */
    /* پایان ماژول                                       */
    /* ================================================= */