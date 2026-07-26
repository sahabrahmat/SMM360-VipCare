/* ==========================================================
   SMM360 VIP Care
   PERMISSION ENGINE
   Version : 0.0.1
========================================================== */

/* ==========================================================
   SYSTEM PERMISSIONS
========================================================== */

const SystemPermissions = [

    /* ==========================
       پذیرش
    ========================== */

    {
        module:"پذیرش",
        permission:"ثبت سلامتجو"
    },

    {
        module:"پذیرش",
        permission:"ویرایش سلامتجو"
    },

    {
        module:"پذیرش",
        permission:"جستجوی سلامتجو"
    },

    {
        module:"پذیرش",
        permission:"ثبت مراجعه"
    },

    /* ==========================
       دستیار
    ========================== */

    {
        module:"دستیار",
        permission:"ثبت اطلاعات اولیه"
    },

    {
        module:"دستیار",
        permission:"ثبت مدارک"
    },

    {
        module:"دستیار",
        permission:"ثبت آزمایش"
    },

    /* ==========================
       پزشک
    ========================== */

    {
        module:"پزشک",
        permission:"ثبت تشخیص"
    },

    {
        module:"پزشک",
        permission:"ثبت نسخه"
    },

    {
        module:"پزشک",
        permission:"ثبت برنامه درمان"
    },

    /* ==========================
       روشنک
    ========================== */

    {
        module:"روشنک",
        permission:"ثبت درمان"
    },

    {
        module:"روشنک",
        permission:"ثبت سنسورها"
    },

    /* ==========================
       دواخانه
    ========================== */

    {
        module:"دواخانه",
        permission:"تحویل دارو"
    },

    {
        module:"دواخانه",
        permission:"ثبت دارو"
    },

    /* ==========================
       مالی
    ========================== */

    {
        module:"مالی",
        permission:"ثبت پرداخت"
    },

    {
        module:"مالی",
        permission:"ثبت هزینه"
    },

    /* ==========================
       گزارش
    ========================== */

    {
        module:"گزارش",
        permission:"مشاهده گزارش"
    },

    {
        module:"گزارش",
        permission:"چاپ گزارش"
    }

];

/* ==========================================================
   USER PERMISSIONS
========================================================== */

const UserPermissions = [];

/* ==========================================================
   ASSIGN PERMISSION
========================================================== */

function assignPermission(userID,permission){

    UserPermissions.push({

        userID,

        permission

    });

}

/* ==========================================================
   GET USER PERMISSIONS
========================================================== */

function getUserPermissions(userID){

    return UserPermissions.filter(

        item=>item.userID===userID

    );

}

/* ==========================================================
   CHECK PERMISSION
========================================================== */

function hasPermission(userID,permission){

    return UserPermissions.some(

        item=>

            item.userID===userID &&

            item.permission===permission

    );

}

/* ==========================================================
   ROLE PERMISSIONS
========================================================== */

const RolePermissions={

};

/* ==========================================================
   REGISTER ROLE
========================================================== */

function registerRole(roleName,permissions=[]){

    RolePermissions[roleName]=permissions;

}

/* ==========================================================
   GET ROLE PERMISSIONS
========================================================== */

function getRolePermissions(roleName){

    return RolePermissions[roleName] || [];

}

/* ==========================================================
   CHECK PERMISSION
========================================================== */

function hasPermission(roleName,permission){

    return getRolePermissions(roleName)

    .includes(permission);

}

/* ==========================================================
   END OF FILE
========================================================== */