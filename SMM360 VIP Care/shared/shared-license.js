/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-license.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت مجوز (License) سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-LICENSE-001                   */
/* LICENSE INFORMATION                               */
/* اطلاعات مجوز سیستم                                */
/* ================================================= */

const LICENSE = {

    key : "",

    edition : "ENTERPRISE EDITION",

    status : "INACTIVE",

    expireDate : "",

    registeredTo : ""

};


/* ================================================= */
/* SECTION ID : SHARED-LICENSE-002                   */
/* SET LICENSE                                       */
/* ثبت اطلاعات مجوز                                 */
/* ================================================= */

function setLicense(data){

    LICENSE.key = data.key || "";

    LICENSE.edition = data.edition || LICENSE.edition;

    LICENSE.status = data.status || LICENSE.status;

    LICENSE.expireDate = data.expireDate || "";

    LICENSE.registeredTo = data.registeredTo || "";

}


/* ================================================= */
/* SECTION ID : SHARED-LICENSE-003                   */
/* GET LICENSE                                       */
/* دریافت اطلاعات مجوز                              */
/* ================================================= */

function getLicense(){

    return LICENSE;

}


/* ================================================= */
/* SECTION ID : SHARED-LICENSE-004                   */
/* LICENSE STATUS                                    */
/* وضعیت مجوز                                        */
/* ================================================= */

function getLicenseStatus(){

    return LICENSE.status;

}


/* ================================================= */
/* SECTION ID : SHARED-LICENSE-005                   */
/* CHECK LICENSE                                     */
/* بررسی معتبر بودن مجوز                             */
/* ================================================= */

function isLicenseValid(){

    return LICENSE.status === "ACTIVE";

}


/* ================================================= */
/* SECTION ID : SHARED-LICENSE-006                   */
/* RESET LICENSE                                     */
/* بازنشانی اطلاعات مجوز                             */
/* ================================================= */

function resetLicense(){

    LICENSE.key = "";

    LICENSE.status = "INACTIVE";

    LICENSE.expireDate = "";

    LICENSE.registeredTo = "";

}


/* ================================================= */
/* SECTION ID : SHARED-LICENSE-007                   */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.LICENSE = LICENSE;

window.setLicense = setLicense;

window.getLicense = getLicense;

window.getLicenseStatus = getLicenseStatus;

window.isLicenseValid = isLicenseValid;

window.resetLicense = resetLicense;


/* ================================================= */
/* SECTION ID : SHARED-LICENSE-999                   */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */