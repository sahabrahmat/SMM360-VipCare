/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-print.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت چاپ اسناد و گزارش‌های سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-PRINT-001                     */
/* PRINT CURRENT PAGE                                */
/* چاپ صفحه جاری                                     */
/* ================================================= */

function printPage(){

    window.print();

}


/* ================================================= */
/* SECTION ID : SHARED-PRINT-002                     */
/* PRINT ELEMENT                                     */
/* چاپ یک بخش مشخص                                    */
/* ================================================= */

function printElement(elementId){

    const element = document.getElementById(elementId);

    if(!element){

        return;

    }

    const printWindow = window.open("","_blank");

    printWindow.document.write(element.outerHTML);

    printWindow.document.close();

    printWindow.focus();

    printWindow.print();

    printWindow.close();

}


/* ================================================= */
/* SECTION ID : SHARED-PRINT-003                     */
/* PRINT HTML                                        */
/* چاپ محتوای HTML                                   */
/* ================================================= */

function printHTML(html){

    const printWindow = window.open("","_blank");

    printWindow.document.write(html);

    printWindow.document.close();

    printWindow.focus();

    printWindow.print();

    printWindow.close();

}


/* ================================================= */
/* SECTION ID : SHARED-PRINT-004                     */
/* PRINT TEXT                                        */
/* چاپ متن                                           */
/* ================================================= */

function printText(text){

    printHTML("<pre>" + text + "</pre>");

}


/* ================================================= */
/* SECTION ID : SHARED-PRINT-005                     */
/* CHECK PRINT SUPPORT                               */
/* بررسی قابلیت چاپ                                  */
/* ================================================= */

function canPrint(){

    return typeof window.print === "function";

}


/* ================================================= */
/* SECTION ID : SHARED-PRINT-006                     */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.printPage = printPage;

window.printElement = printElement;

window.printHTML = printHTML;

window.printText = printText;

window.canPrint = canPrint;


/* ================================================= */
/* SECTION ID : SHARED-PRINT-999                     */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */