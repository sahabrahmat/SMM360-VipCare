/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-api.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت ارتباط با API و Backend

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-API-001                       */
/* API CONFIGURATION                                 */
/* تنظیمات API                                       */
/* ================================================= */

const API = {

    baseURL : "",

    timeout : 30000,

    headers : {

        "Content-Type" : "application/json"

    }

};


/* ================================================= */
/* SECTION ID : SHARED-API-002                       */
/* CHANGE BASE URL                                   */
/* تغییر آدرس سرور                                   */
/* ================================================= */

function setApiBaseURL(url){

    API.baseURL = url;

}


/* ================================================= */
/* SECTION ID : SHARED-API-003                       */
/* GET REQUEST                                       */
/* درخواست GET                                       */
/* ================================================= */

async function apiGET(endpoint){

    const response = await fetch(

        API.baseURL + endpoint,

        {

            method : "GET",

            headers : API.headers

        }

    );

    return await response.json();

}


/* ================================================= */
/* SECTION ID : SHARED-API-004                       */
/* POST REQUEST                                      */
/* درخواست POST                                      */
/* ================================================= */

async function apiPOST(endpoint,data){

    const response = await fetch(

        API.baseURL + endpoint,

        {

            method : "POST",

            headers : API.headers,

            body : JSON.stringify(data)

        }

    );

    return await response.json();

}


/* ================================================= */
/* SECTION ID : SHARED-API-005                       */
/* PUT REQUEST                                       */
/* درخواست PUT                                       */
/* ================================================= */

async function apiPUT(endpoint,data){

    const response = await fetch(

        API.baseURL + endpoint,

        {

            method : "PUT",

            headers : API.headers,

            body : JSON.stringify(data)

        }

    );

    return await response.json();

}


/* ================================================= */
/* SECTION ID : SHARED-API-006                       */
/* DELETE REQUEST                                    */
/* درخواست DELETE                                    */
/* ================================================= */

async function apiDELETE(endpoint){

    const response = await fetch(

        API.baseURL + endpoint,

        {

            method : "DELETE",

            headers : API.headers

        }

    );

    return await response.json();

}


/* ================================================= */
/* SECTION ID : SHARED-API-007                       */
/* DEFAULT ERROR                                     */
/* مدیریت خطاهای API                                 */
/* ================================================= */

function apiError(error){

    console.error(

        "[SMM360 API]",

        error

    );

}


/* ================================================= */
/* SECTION ID : SHARED-API-008                       */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.API = API;

window.setApiBaseURL = setApiBaseURL;

window.apiGET = apiGET;

window.apiPOST = apiPOST;

window.apiPUT = apiPUT;

window.apiDELETE = apiDELETE;

window.apiError = apiError;


/* ================================================= */
/* SECTION ID : SHARED-API-999                       */
/* END VERSION : 0.0.1                              */
/* پایان ماژول                                       */
/* ================================================= */