/* ==========================================================
   SMM360 VIP Care
   ACCESS CONTROL ENGINE
   Version : 0.0.1
========================================================== */

/* ==========================================================
   ACCESS CONTROL
========================================================== */

const AccessControl={

    currentUser:null,

    setUser(user){

        this.currentUser=user;

    },

    getUser(){

        return this.currentUser;

    },

    hasPermission(permission){

        if(!this.currentUser){

            return false;

        }

        if(!this.currentUser.permissions){

            return false;

        }

        return this.currentUser.permissions.includes(permission);

    },

    hasRole(role){

        if(!this.currentUser){

            return false;

        }

        return this.currentUser.role===role;

    }

};

/* ==========================================================
   END OF FILE
========================================================== */