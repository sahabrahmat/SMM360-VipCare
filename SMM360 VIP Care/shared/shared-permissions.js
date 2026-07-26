/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : shared-permissions.js
   MODULE      : Shared
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت مجوزهای سراسری سیستم

========================================================== */


/* ================================================= */
/* SECTION ID : SHARED-PERMISSIONS-001               */
/* PERMISSION STORAGE                                */
/* لیست مجوزهای کاربر                                */
/* ================================================= */

let USER_PERMISSIONS = [];


/* ================================================= */
/* SECTION ID : SHARED-PERMISSIONS-002               */
/* SET PERMISSIONS                                   */
/* ثبت مجوزهای کاربر                                 */
/* ================================================= */

function setPermissions(permissions){

    USER_PERMISSIONS = permissions;

}


/* ================================================= */
/* SECTION ID : SHARED-PERMISSIONS-003               */
/* GET PERMISSIONS                                   */
/* دریافت مجوزهای کاربر                              */
/* ================================================= */

function getPermissions(){

    return USER_PERMISSIONS;

}


/* ================================================= */
/* SECTION ID : SHARED-PERMISSIONS-004               */
/* CHECK PERMISSION                                  */
/* بررسی وجود مجوز                                   */
/* ================================================= */

function hasPermission(permission){

    return USER_PERMISSIONS.includes(permission);

}


/* ================================================= */
/* SECTION ID : SHARED-PERMISSIONS-005               */
/* ADD PERMISSION                                    */
/* افزودن مجوز                                       */
/* ================================================= */

function addPermission(permission){

    if(!hasPermission(permission)){

        USER_PERMISSIONS.push(permission);

    }

}


/* ================================================= */
/* SECTION ID : SHARED-PERMISSIONS-006               */
/* REMOVE PERMISSION                                 */
/* حذف مجوز                                          */
/* ================================================= */

function removePermission(permission){

    USER_PERMISSIONS = USER_PERMISSIONS.filter(

        item => item !== permission

    );

}


/* ================================================= */
/* SECTION ID : SHARED-PERMISSIONS-007               */
/* CLEAR PERMISSIONS                                 */
/* حذف تمام مجوزها                                   */
/* ================================================= */

function clearPermissions(){

    USER_PERMISSIONS = [];

}


/* ================================================= */
/* SECTION ID : SHARED-PERMISSIONS-008               */
/* EXPORT                                            */
/* دسترسی عمومی                                      */
/* ================================================= */

window.USER_PERMISSIONS = USER_PERMISSIONS;

window.setPermissions = setPermissions;

window.getPermissions = getPermissions;

window.hasPermission = hasPermission;

window.addPermission = addPermission;

window.removePermission = removePermission;

window.clearPermissions = clearPermissions;


/* ================================================= */
/* SECTION ID : SHARED-PERMISSIONS-999               */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */