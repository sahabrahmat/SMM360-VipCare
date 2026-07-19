/* ===========================================================
    SMM360 VIP Care
    Core Engine
=========================================================== */

class SMM360Core {

    constructor() {

        this.system = SYSTEM_CONFIG;

        this.roles = USER_ROLES;

        this.modules = SYSTEM_MODULES;

        this.currentUser = null;

    }

    //----------------------------------------------------------
    // Boot System
    //----------------------------------------------------------

    boot() {

        console.log("===================================");

        console.log(this.system.systemName);

        console.log("Version : " + this.system.version);

        console.log("System Started Successfully");

        console.log("===================================");

        this.loadModules();

        this.loadDashboard();

    }

    //----------------------------------------------------------
    // Load Modules
    //----------------------------------------------------------

    loadModules() {

        Object.keys(this.modules).forEach(module => {

            if (this.modules[module].enabled) {

                console.log("✔ Module Loaded : " + this.modules[module].title);

            }

        });

    }

    //----------------------------------------------------------
    // Login User
    //----------------------------------------------------------

    login(userObject){

        this.currentUser = userObject;

        console.log("Welcome : " + userObject.fullname);

    }

    //----------------------------------------------------------
    // Check Permission
    //----------------------------------------------------------

    hasPermission(moduleName){

        if(!this.currentUser){

            return false;

        }

        const role=this.roles[this.currentUser.role];

        return role[moduleName]===true;

    }

    //----------------------------------------------------------
    // Dashboard
    //----------------------------------------------------------

    loadDashboard(){

        console.log("Dashboard Ready");

    }

    //----------------------------------------------------------
    // Patient Code
    //----------------------------------------------------------

    generatePatientCode(){

        const now=new Date();

        const year=String(now.getFullYear()).slice(-2);

        const month=String(now.getMonth()+1).padStart(2,"0");

        const random=String(Math.floor(Math.random()*999)+1).padStart(3,"0");

        return `${this.system.patientCode.prefix}-${year}-${month}-${random}`;

    }

}

const SMM360 = new SMM360Core();

window.onload=()=>{

    SMM360.boot();

};