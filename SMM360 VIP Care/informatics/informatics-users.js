/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : informatics-users.js
   MODULE      : Informatics
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت کاربران واحد انفورماتیک

========================================================== */


/* ================================================= */
/* SECTION ID : INFORMATICS-USERS-001                */
/* USERS LIST                                        */
/* لیست کاربران                                      */
/* ================================================= */

const INFORMATICS_USERS = [

    {
        id: 1,
        personnelCode: "INF-0001",
        fullName: "دکتر سید مهدی محمدی",
        username: "admin",
        role: "ADMIN",
        status: "ACTIVE"
    },

    {
        id: 2,
        personnelCode: "INF-0002",
        fullName: "",
        username: "",
        role: "SUPERVISOR",
        status: "ACTIVE"
    },

    {
        id: 3,
        personnelCode: "INF-0003",
        fullName: "",
        username: "",
        role: "SYSTEM_ENGINEER",
        status: "ACTIVE"
    }

];


/* ================================================= */
/* SECTION ID : INFORMATICS-USERS-002                */
/* GET USER                                          */
/* دریافت کاربر                                      */
/* ================================================= */

function getInformaticsUser(id){

    return INFORMATICS_USERS.find(user => user.id === id) || null;

}


/* ================================================= */
/* SECTION ID : INFORMATICS-USERS-003                */
/* GET USERNAME                                      */
/* جستجو بر اساس نام کاربری                          */
/* ================================================= */

function getUserByUsername(username){

    return INFORMATICS_USERS.find(
        user => user.username === username
    ) || null;

}


/* ================================================= */
/* SECTION ID : INFORMATICS-USERS-004                */
/* GET ALL USERS                                     */
/* دریافت تمام کاربران                               */
/* ================================================= */

function getAllInformaticsUsers(){

    return INFORMATICS_USERS;

}


/* ================================================= */
/* SECTION ID : INFORMATICS-USERS-005                */
/* ADD USER                                          */
/* افزودن کاربر                                      */
/* ================================================= */

function addInformaticsUser(user){

    INFORMATICS_USERS.push(user);

}


/* ================================================= */
/* SECTION ID : INFORMATICS-USERS-006                */
/* REMOVE USER                                       */
/* حذف کاربر                                         */
/* ================================================= */

function removeInformaticsUser(id){

    const index = INFORMATICS_USERS.findIndex(
        user => user.id === id
    );

    if(index !== -1){

        INFORMATICS_USERS.splice(index,1);

        return true;

    }

    return false;

}


/* ================================================= */
/* SECTION ID : INFORMATICS-USERS-007                */
/* EXPORT                                            */
/* خروجی ماژول                                       */
/* ================================================= */

if(typeof module !== "undefined"){

    module.exports = {

        INFORMATICS_USERS,

        getInformaticsUser,

        getUserByUsername,

        getAllInformaticsUsers,

        addInformaticsUser,

        removeInformaticsUser

    };

}