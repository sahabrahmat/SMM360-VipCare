/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION
   SYSTEM ARCHITECTURE
   File:
   js/app.js
   Version : 0.0.1
========================================================== */

"use strict";

/* ==========================================================
   APPLICATION INFORMATION
========================================================== */

const APP_INFO = Object.freeze({

    name: "SMM360 VIP Care",

    shortName: "SMM360",

    version: "0.0.1",

    codename: "Foundation",

    releaseDate: "2026",

    language: "fa-IR",

    direction: "rtl",

    author: "SMM360 Development Team",

    architecture: "Enterprise",

    environment: "Development"

});

/* ==========================================================
   GLOBAL CONFIGURATION
========================================================== */

const APP_CONFIG = {

    debug: true,

    autoSave: true,

    autoLogoutMinutes: 30,

    notificationDuration: 5000,

    animationSpeed: 300,

    language: "fa",

    theme: "default",

    rtl: true,

    timezone: "Asia/Tehran",

    currency: "IRR",

    dateFormat: "YYYY/MM/DD",

    timeFormat: "HH:mm:ss",

    decimalDigits: 2

};

/* ==========================================================
   APPLICATION STATUS
========================================================== */

const APP_STATE = {

    initialized: false,

    loading: false,

    authenticated: false,

    online: navigator.onLine,

    currentPage: null,

    currentModule: null,

    currentPatient: null,

    currentVisit: null,

    currentDoctor: null,

    startupTime: null,

    lastActivity: null,

    errors: 0

};

/* ==========================================================
   GLOBAL STORAGE
========================================================== */

const APP_STORAGE = {

    session: {},

    cache: {},

    temporary: {},

    settings: {},

    notifications: [],

    openedPages: [],

    loadedModules: [],

    permissions: [],

    roles: [],

    languages: [],

    themes: []

};

/* ==========================================================
   GLOBAL REFERENCES
========================================================== */

const DOM = {

    body: document.body,

    html: document.documentElement,

    header: null,

    sidebar: null,

    content: null,

    footer: null,

    loader: null,

    notificationArea: null

};

/* ==========================================================
   GLOBAL EVENTS
========================================================== */

const APP_EVENTS = {

    INIT: "app:init",

    READY: "app:ready",

    LOGIN: "user:login",

    LOGOUT: "user:logout",

    MODULE_LOADED: "module:loaded",

    MODULE_CHANGED: "module:changed",

    PAGE_CHANGED: "page:changed",

    SESSION_EXPIRED: "session:expired",

    ONLINE: "system:online",

    OFFLINE: "system:offline",

    ERROR: "system:error"

};

/* ==========================================================
   APPLICATION ROUTES
========================================================== */

const ROUTES = {

    login: "login.html",

    dashboard: "dashboard.html",

    patient: "pages/patient/index.html",

    doctor: "pages/doctor/index.html",

    visit: "pages/visit/index.html",

    settings: "pages/settings/index.html",

    reports: "pages/reports/index.html"

};

/* ==========================================================
   APPLICATION PATHS
========================================================== */

const PATHS = {

    core: "Core/",

    config: "Config/",

    assets: "Assets/",

    pages: "Pages/",

    modules: "Modules/",

    database: "Database/",

    documents: "Documents/"

};

/* ==========================================================
   GLOBAL ICONS
========================================================== */

const ICONS = {

    success: "✔",

    warning: "⚠",

    error: "✖",

    info: "ℹ",

    loading: "⏳"

};

/* ==========================================================
   GLOBAL REGISTRY
========================================================== */

const APP = {

    config: APP_CONFIG,

    info: APP_INFO,

    state: APP_STATE,

    storage: APP_STORAGE,

    dom: DOM,

    routes: ROUTES,

    paths: PATHS,

    events: APP_EVENTS,

    icons: ICONS

};

/* ==========================================================
   END OF HEADER
========================================================== */

/* ==========================================================
   APP CONFIGURATION
========================================================== */

/**
 * Load Application Configuration
 */

 async function loadApplicationConfiguration(){

    try{

        console.log("Loading Application Configuration...");

        if(typeof SystemConfig!=="undefined"){

            APP.config.system=SystemConfig;

        }

        if(typeof Roles!=="undefined"){

            APP.storage.roles=Roles;

        }

        if(typeof Modules!=="undefined"){

            APP.storage.modules=Modules;

        }

        if(typeof Languages!=="undefined"){

            APP.storage.languages=Languages;

        }

        if(typeof Theme!=="undefined"){

            APP.storage.theme=Theme;

        }

        console.log("Configuration Loaded.");

        return true;

    }

    catch(error){

        console.error(error);

        return false;

    }

}

/* ==========================================================
   INITIALIZE DOM REFERENCES
========================================================== */

function initializeDOM(){

    DOM.header=document.querySelector("header");

    DOM.sidebar=document.querySelector(".sidebar");

    DOM.content=document.querySelector(".content");

    DOM.footer=document.querySelector("footer");

    DOM.loader=document.querySelector("#globalLoader");

    DOM.notificationArea=document.querySelector("#notificationArea");

}

/* ==========================================================
   START APPLICATION TIMER
========================================================== */

function initializeApplicationClock(){

    APP.state.startupTime=new Date();

    APP.state.lastActivity=new Date();

}

/* ==========================================================
   INITIALIZE STORAGE
========================================================== */

function initializeStorage(){

    APP.storage.session={};

    APP.storage.cache={};

    APP.storage.temporary={};

    APP.storage.notifications=[];

    APP.storage.loadedModules=[];

    APP.storage.openedPages=[];

}

/* ==========================================================
   REGISTER GLOBAL EVENTS
========================================================== */

function registerGlobalEvents(){

    window.addEventListener("online",()=>{

        APP.state.online=true;

        document.dispatchEvent(

            new CustomEvent(APP.events.ONLINE)

        );

    });

    window.addEventListener("offline",()=>{

        APP.state.online=false;

        document.dispatchEvent(

            new CustomEvent(APP.events.OFFLINE)

        );

    });

    document.addEventListener("click",()=>{

        APP.state.lastActivity=new Date();

    });

    document.addEventListener("keydown",()=>{

        APP.state.lastActivity=new Date();

    });

}

/* ==========================================================
   LOAD USER SETTINGS
========================================================== */

function loadUserSettings(){

    const theme=

        localStorage.getItem("theme");

    const language=

        localStorage.getItem("language");

    if(theme){

        APP.config.theme=theme;

    }

    if(language){

        APP.config.language=language;

    }

}

/* ==========================================================
   CHECK BROWSER SUPPORT
========================================================== */

function checkBrowserSupport(){

    if(!window.localStorage){

        throw new Error(

            "Local Storage Not Supported"

        );

    }

    if(!window.Promise){

        throw new Error(

            "Promise Not Supported"

        );

    }

}

/* ==========================================================
   INITIALIZE APPLICATION
========================================================== */

async function initializeApplication(){

    try{

        APP.state.loading=true;

        console.log(

            "Initializing " +

            APP.info.name +

            "..."

        );

        checkBrowserSupport();

        initializeDOM();

        initializeApplicationClock();

        initializeStorage();

        loadUserSettings();

        registerGlobalEvents();

        await loadApplicationConfiguration();

        APP.state.initialized=true;

        APP.state.loading=false;

        document.dispatchEvent(

            new CustomEvent(APP.events.INIT)

        );

        console.log(

            APP.info.name+

            " Initialized Successfully."

        );

        return true;

    }

    catch(error){

        APP.state.loading=false;

        APP.state.errors++;

        console.error(error);

        document.dispatchEvent(

            new CustomEvent(

                APP.events.ERROR,

                {

                    detail:error

                }

            )

        );

        return false;

    }

}

/* ==========================================================
   APPLICATION STARTUP
========================================================== */

window.addEventListener(

    "DOMContentLoaded",

    async()=>{

        await initializeApplication();

    }

);

/* ==========================================================
   CURRENT USER
========================================================== */

APP.currentUser = null;

/* ==========================================================
   LOGIN
========================================================== */

async function login(username,password){

    try{

        APP.state.loading=true;

        if(typeof authenticateUser!=="function"){

            throw new Error(

                "Authentication Engine Not Loaded."

            );

        }

        const user=

            await authenticateUser(

                username,

                password

            );

        if(!user){

            return false;

        }

        APP.currentUser=user;

        APP.state.authenticated=true;

        APP.storage.session.user=user;

        APP.storage.session.loginTime=new Date();

        APP.storage.session.token=

            crypto.randomUUID();

        sessionStorage.setItem(

            "SMM360_SESSION",

            JSON.stringify(

                APP.storage.session

            )

        );

        if(typeof addAuditLog==="function"){

            addAuditLog({

                tableName:"Users",

                recordID:user.id,

                fieldName:"Login",

                oldValue:null,

                newValue:"Success",

                action:"LOGIN",

                reason:"User Login",

                userID:user.id,

                userName:user.fullName,

                userRole:user.role,

                date:new Date().toLocaleDateString(),

                time:new Date().toLocaleTimeString()

            });

        }

        document.dispatchEvent(

            new CustomEvent(

                APP.events.LOGIN,

                {

                    detail:user

                }

            )

        );

        return true;

    }

    catch(error){

        console.error(error);

        return false;

    }

    finally{

        APP.state.loading=false;

    }

}

/* ==========================================================
   LOGOUT
========================================================== */

function logout(){

    if(APP.currentUser){

        if(typeof addAuditLog==="function"){

            addAuditLog({

                tableName:"Users",

                recordID:APP.currentUser.id,

                fieldName:"Logout",

                oldValue:null,

                newValue:"Success",

                action:"LOGOUT",

                reason:"User Logout",

                userID:APP.currentUser.id,

                userName:APP.currentUser.fullName,

                userRole:APP.currentUser.role,

                date:new Date().toLocaleDateString(),

                time:new Date().toLocaleTimeString()

            });

        }

    }

    sessionStorage.removeItem(

        "SMM360_SESSION"

    );

    APP.currentUser=null;

    APP.storage.session={};

    APP.state.authenticated=false;

    document.dispatchEvent(

        new CustomEvent(

            APP.events.LOGOUT

        )

    );

    window.location.href=

        APP.routes.login;

}

/* ==========================================================
   RESTORE SESSION
========================================================== */

function restoreSession(){

    const session=

        sessionStorage.getItem(

            "SMM360_SESSION"

        );

    if(!session){

        return false;

    }

    try{

        APP.storage.session=

            JSON.parse(session);

        APP.currentUser=

            APP.storage.session.user;

        APP.state.authenticated=true;

        return true;

    }

    catch(error){

        console.error(error);

        return false;

    }

}

/* ==========================================================
   SESSION TIMEOUT
========================================================== */

function checkSessionTimeout(){

    if(!APP.state.authenticated){

        return;

    }

    const now=new Date();

    const lastActivity=

        APP.state.lastActivity;

    const minutes=

        (now-lastActivity)/60000;

    if(

        minutes>

        APP.config.autoLogoutMinutes

    ){

        document.dispatchEvent(

            new CustomEvent(

                APP.events.SESSION_EXPIRED

            )

        );

        logout();

    }

}

/* ==========================================================
   SESSION WATCHER
========================================================== */

setInterval(

    checkSessionTimeout,

    60000

);

/* ==========================================================
   REFRESH LAST ACTIVITY
========================================================== */

function refreshSession(){

    APP.state.lastActivity=

        new Date();

}

/* ==========================================================
   GET CURRENT USER
========================================================== */

function getCurrentUser(){

    return APP.currentUser;

}

/* ==========================================================
   CHECK LOGIN
========================================================== */

function isAuthenticated(){

    return APP.state.authenticated===true;

}

/* ==========================================================
   GET TOKEN
========================================================== */

function getSessionToken(){

    if(

        APP.storage.session

    ){

        return APP.storage.session.token;

    }

    return null;

}

/* ==========================================================
   CLEAR SESSION
========================================================== */

function clearSession(){

    APP.currentUser=null;

    APP.storage.session={};

    APP.state.authenticated=false;

    sessionStorage.clear();

}

/* ==========================================================
   AUTO RESTORE
========================================================== */

document.addEventListener(

    APP.events.INIT,

    ()=>{

        restoreSession();

    }

);

/* ==========================================================
LOAD APPLICATION SETTINGS
========================================================== */

function loadApplicationSettings(){

 try{

     const settings=

         localStorage.getItem(

             "SMM360_SETTINGS"

         );

     if(settings){

         APP.storage.settings=

             JSON.parse(settings);

     }

     else{

         APP.storage.settings={

             theme:"default",

             language:"fa",

             fontSize:"16px",

             direction:"rtl",

             animation:true,

             timezone:"Asia/Tehran",

             currency:"IRR",

             dateFormat:"YYYY/MM/DD",

             timeFormat:"HH:mm:ss"

         };

     }

 }

 catch(error){

     console.error(error);

 }

}

/* ==========================================================
SAVE SETTINGS
========================================================== */

function saveApplicationSettings(){

 localStorage.setItem(

     "SMM360_SETTINGS",

     JSON.stringify(

         APP.storage.settings

     )

 );

}

/* ==========================================================
LOAD THEME
========================================================== */

function loadTheme(){

 const theme=

     APP.storage.settings.theme||

     "default";

 document.documentElement

     .setAttribute(

         "data-theme",

         theme

     );

}

/* ==========================================================
CHANGE THEME
========================================================== */

function changeTheme(theme){

 APP.storage.settings.theme=theme;

 loadTheme();

 saveApplicationSettings();

}

/* ==========================================================
LOAD LANGUAGE
========================================================== */

function loadLanguage(){

 const language=

     APP.storage.settings.language||

     "fa";

 document.documentElement.lang=

     language;

}

/* ==========================================================
CHANGE LANGUAGE
========================================================== */

function changeLanguage(language){

 APP.storage.settings.language=

     language;

 loadLanguage();

 saveApplicationSettings();

}

/* ==========================================================
LOAD FONT SIZE
========================================================== */

function loadFontSize(){

 document.documentElement.style.fontSize=

     APP.storage.settings.fontSize;

}

/* ==========================================================
CHANGE FONT SIZE
========================================================== */

function changeFontSize(size){

 APP.storage.settings.fontSize=size;

 loadFontSize();

 saveApplicationSettings();

}

/* ==========================================================
LOAD DIRECTION
========================================================== */

function loadDirection(){

 document.documentElement.dir=

     APP.storage.settings.direction;

}

/* ==========================================================
LOAD DATE FORMAT
========================================================== */

function loadDateFormat(){

 APP.config.dateFormat=

     APP.storage.settings.dateFormat;

}

/* ==========================================================
LOAD TIME FORMAT
========================================================== */

function loadTimeFormat(){

 APP.config.timeFormat=

     APP.storage.settings.timeFormat;

}

/* ==========================================================
LOAD TIMEZONE
========================================================== */

function loadTimezone(){

 APP.config.timezone=

     APP.storage.settings.timezone;

}

/* ==========================================================
LOAD CURRENCY
========================================================== */

function loadCurrency(){

 APP.config.currency=

     APP.storage.settings.currency;

}

/* ==========================================================
LOAD ANIMATION
========================================================== */

function loadAnimation(){

 if(

     APP.storage.settings.animation

 ){

     document.body.classList.remove(

         "no-animation"

     );

 }

 else{

     document.body.classList.add(

         "no-animation"

     );

 }

}

/* ==========================================================
RESET SETTINGS
========================================================== */

function resetApplicationSettings(){

 localStorage.removeItem(

     "SMM360_SETTINGS"

 );

 loadApplicationSettings();

 applyApplicationSettings();

}

/* ==========================================================
APPLY SETTINGS
========================================================== */

function applyApplicationSettings(){

 loadTheme();

 loadLanguage();

 loadDirection();

 loadFontSize();

 loadDateFormat();

 loadTimeFormat();

 loadTimezone();

 loadCurrency();

 loadAnimation();

}

/* ==========================================================
INITIALIZE SETTINGS
========================================================== */

document.addEventListener(

 APP.events.INIT,

 ()=>{

     loadApplicationSettings();

     applyApplicationSettings();

 }

);

/* ==========================================================
   CURRENT ROUTE
========================================================== */

APP.router={

    current:null,

    previous:null,

    history:[]

};

/* ==========================================================
   PAGE TITLES
========================================================== */

const PAGE_TITLES={

    dashboard:"داشبورد",

    patient:"سلامتجویان",

    visit:"ویزیت",

    doctor:"پزشکان",

    reports:"گزارش‌ها",

    settings:"تنظیمات",

    login:"ورود"

};

/* ==========================================================
   CHANGE PAGE
========================================================== */

async function navigate(page){

    try{

        if(!APP.routes[page]){

            throw new Error(

                "Route Not Found."

            );

        }

        if(

            page!=="login"

            &&

            !isAuthenticated()

        ){

            return navigate("login");

        }

        if(

            typeof hasPermission==="function"

        ){

            const allowed=

                hasPermission(page);

            if(!allowed){

                console.warn(

                    "Permission Denied"

                );

                return false;

            }

        }

        APP.router.previous=

            APP.router.current;

        APP.router.current=

            page;

        APP.router.history.push({

            page,

            date:new Date()

        });

        APP.state.currentPage=

            page;

        document.title=

            PAGE_TITLES[page]

            +" | "

            +APP.info.shortName;

        if(

            typeof loadModule==="function"

        ){

            loadModule(page);

        }

        window.location.href=

            APP.routes[page];

        document.dispatchEvent(

            new CustomEvent(

                APP.events.PAGE_CHANGED,

                {

                    detail:page

                }

            )

        );

        if(

            typeof addAuditLog==="function"

            &&

            APP.currentUser

        ){

            addAuditLog({

                tableName:"Navigation",

                recordID:page,

                fieldName:"Page",

                oldValue:

                    APP.router.previous,

                newValue:

                    page,

                action:"NAVIGATION",

                reason:"Page Change",

                userID:

                    APP.currentUser.id,

                userName:

                    APP.currentUser.fullName,

                userRole:

                    APP.currentUser.role,

                date:

                    new Date()

                    .toLocaleDateString(),

                time:

                    new Date()

                    .toLocaleTimeString()

            });

        }

        return true;

    }

    catch(error){

        console.error(error);

        return false;

    }

}

/* ==========================================================
   BACK
========================================================== */

function goBack(){

    history.back();

}

/* ==========================================================
   FORWARD
========================================================== */

function goForward(){

    history.forward();

}

/* ==========================================================
   HOME
========================================================== */

function goHome(){

    navigate("dashboard");

}

/* ==========================================================
   CURRENT PAGE
========================================================== */

function getCurrentPage(){

    return APP.router.current;

}

/* ==========================================================
   PAGE HISTORY
========================================================== */

function getNavigationHistory(){

    return APP.router.history;

}

/* ==========================================================
   CLEAR HISTORY
========================================================== */

function clearNavigationHistory(){

    APP.router.history=[];

}

/* ==========================================================
   UPDATE BREADCRUMB
========================================================== */

function updateBreadcrumb(){

    const element=

        document.querySelector(

            "#breadcrumb"

        );

    if(!element){

        return;

    }

    element.innerHTML=

        PAGE_TITLES[

            APP.router.current

        ]||"";

}

/* ==========================================================
   ROUTER STARTUP
========================================================== */

document.addEventListener(

    APP.events.PAGE_CHANGED,

    ()=>{

        updateBreadcrumb();

    }

);

/* ==========================================================
   NOTIFICATION STORAGE
========================================================== */

APP.notifications=[];

/* ==========================================================
   DEFAULT CONFIGURATION
========================================================== */

const NotificationConfig={

    duration:5000,

    maxVisible:5,

    animation:true,

    sound:false,

    position:"top-right"

};

/* ==========================================================
   CREATE CONTAINER
========================================================== */

function initializeNotificationSystem(){

    let container=

        document.getElementById(

            "notification-container"

        );

    if(container){

        return;

    }

    container=document.createElement("div");

    container.id="notification-container";

    container.className="notification-container";

    document.body.appendChild(container);

}

/* ==========================================================
   CREATE TOAST
========================================================== */

function createToast(

    message,

    type="info",

    duration=

        NotificationConfig.duration

){

    initializeNotificationSystem();

    const toast=

        document.createElement("div");

    toast.className=

        "toast toast-"+type;

    toast.innerHTML=`

        <div class="toast-message">

            ${message}

        </div>

    `;

    document

        .getElementById(

            "notification-container"

        )

        .appendChild(toast);

    APP.notifications.push({

        message,

        type,

        date:new Date()

    });

    setTimeout(()=>{

        toast.remove();

    },duration);

}

/* ==========================================================
   SUCCESS
========================================================== */

function notifySuccess(message){

    createToast(

        message,

        "success"

    );

}

/* ==========================================================
   ERROR
========================================================== */

function notifyError(message){

    createToast(

        message,

        "danger",

        8000

    );

}

/* ==========================================================
   WARNING
========================================================== */

function notifyWarning(message){

    createToast(

        message,

        "warning",

        7000

    );

}

/* ==========================================================
   INFO
========================================================== */

function notifyInfo(message){

    createToast(

        message,

        "info"

    );

}

/* ==========================================================
   LOADING
========================================================== */

function showLoading(message="در حال پردازش ..."){

    const loading=

        document.createElement("div");

    loading.id="global-loading";

    loading.className="loading-dialog";

    loading.innerHTML=

        `<div>${message}</div>`;

    document.body.appendChild(

        loading

    );

}

/* ==========================================================
   HIDE LOADING
========================================================== */

function hideLoading(){

    const loading=

        document.getElementById(

            "global-loading"

        );

    if(loading){

        loading.remove();

    }

}

/* ==========================================================
   CONFIRM DIALOG
========================================================== */

function showConfirm(

    title,

    message,

    callback

){

    const result=

        confirm(

            title+

            "\n\n"+

            message

        );

    if(result){

        callback();

    }

}

/* ==========================================================
   ALERT
========================================================== */

function showAlert(

    title,

    message

){

    alert(

        title+

        "\n\n"+

        message

    );

}

/* ==========================================================
   PROMPT
========================================================== */

function showPrompt(

    title,

    value=""

){

    return prompt(

        title,

        value

    );

}

/* ==========================================================
   QUESTION
========================================================== */

function askQuestion(

    message

){

    return confirm(message);

}

/* ==========================================================
   CLEAR ALL
========================================================== */

function clearNotifications(){

    APP.notifications=[];

    const container=

        document.getElementById(

            "notification-container"

        );

    if(container){

        container.innerHTML="";

    }

}

/* ==========================================================
   GET HISTORY
========================================================== */

function getNotifications(){

    return APP.notifications;

}

/* ==========================================================
   CURRENT PERMISSIONS
========================================================== */

APP.permissions=[];

/* ==========================================================
   LOAD USER PERMISSIONS
========================================================== */

function loadUserPermissions(){

    if(!APP.currentUser){

        return;

    }

    if(typeof getPermissionsByRole==="function"){

        APP.permissions=

            getPermissionsByRole(

                APP.currentUser.role

            );

    }

}

/* ==========================================================
   HAS PERMISSION
========================================================== */

function hasPermission(permission){

    if(!APP.currentUser){

        return false;

    }

    if(APP.currentUser.role==="SuperAdmin"){

        return true;

    }

    return APP.permissions.includes(

        permission

    );

}

/* ==========================================================
   REQUIRE PERMISSION
========================================================== */

function requirePermission(permission){

    if(

        !hasPermission(permission)

    ){

        notifyError(

            "شما مجوز انجام این عملیات را ندارید."

        );

        return false;

    }

    return true;

}

/* ==========================================================
   REQUIRE ANY PERMISSION
========================================================== */

function requireAnyPermission(list){

    for(const permission of list){

        if(hasPermission(permission)){

            return true;

        }

    }

    return false;

}

/* ==========================================================
   REQUIRE ALL PERMISSIONS
========================================================== */

function requireAllPermissions(list){

    for(const permission of list){

        if(!hasPermission(permission)){

            return false;

        }

    }

    return true;

}

/* ==========================================================
   ENABLE BUTTONS
========================================================== */

function updatePermissionButtons(){

    document

    .querySelectorAll(

        "[data-permission]"

    )

    .forEach(element=>{

        const permission=

            element.dataset.permission;

        if(

            hasPermission(permission)

        ){

            element.style.display="";

        }

        else{

            element.style.display="none";

        }

    });

}

/* ==========================================================
   READ ONLY CONTROLS
========================================================== */

function updateReadOnlyControls(){

    document

    .querySelectorAll(

        "[data-readonly]"

    )

    .forEach(control=>{

        const permission=

            control.dataset.readonly;

        control.disabled=

            !hasPermission(permission);

    });

}

/* ==========================================================
   HIDE MENU
========================================================== */

function updateMenuPermissions(){

    document

    .querySelectorAll(

        "[data-menu]"

    )

    .forEach(menu=>{

        const permission=

            menu.dataset.menu;

        menu.hidden=

            !hasPermission(permission);

    });

}

/* ==========================================================
   LOCK PAGE
========================================================== */

function lockCurrentPage(){

    document.body.classList.add(

        "page-locked"

    );

}

/* ==========================================================
   UNLOCK PAGE
========================================================== */

function unlockCurrentPage(){

    document.body.classList.remove(

        "page-locked"

    );

}

/* ==========================================================
   CHECK PAGE ACCESS
========================================================== */

function validateCurrentPage(){

    const page=

        APP.state.currentPage;

    if(!page){

        return;

    }

    if(

        !hasPermission(page)

    ){

        notifyWarning(

            "دسترسی به این صفحه مجاز نیست."

        );

        navigate("dashboard");

    }

}

/* ==========================================================
   REFRESH
========================================================== */

function refreshPermissions(){

    loadUserPermissions();

    updatePermissionButtons();

    updateReadOnlyControls();

    updateMenuPermissions();

}

/* ==========================================================
   STARTUP
========================================================== */

document.addEventListener(

    APP.events.LOGIN,

    ()=>{

        refreshPermissions();

    }

);

document.addEventListener(

    APP.events.PAGE_CHANGED,

    ()=>{

        validateCurrentPage();

    }

);

/* ==========================================================
   MODULE STORAGE
========================================================== */

APP.modules={

    loaded:{},

    loading:{},

    failed:{}

};

/* ==========================================================
   LOAD MODULE
========================================================== */

async function loadModule(moduleName){

    try{

        if(APP.modules.loaded[moduleName]){

            return true;

        }

        APP.modules.loading[moduleName]=true;

        console.log(

            "Loading Module :",

            moduleName

        );

        if(

            typeof Modules==="undefined"

        ){

            throw new Error(

                "Modules Configuration Missing."

            );

        }

        const module=

            Modules.find(

                item=>item.name===moduleName

            );

        if(!module){

            throw new Error(

                "Module Not Found."

            );

        }

        if(module.dependencies){

            await loadDependencies(

                module.dependencies

            );

        }

        APP.modules.loaded[moduleName]=module;

        APP.storage.loadedModules.push(

            moduleName

        );

        delete

        APP.modules.loading[moduleName];

        document.dispatchEvent(

            new CustomEvent(

                APP.events.MODULE_LOADED,

                {

                    detail:moduleName

                }

            )

        );

        console.log(

            moduleName,

            "Loaded"

        );

        return true;

    }

    catch(error){

        console.error(error);

        APP.modules.failed[moduleName]=

            error.message;

        return false;

    }

}

/* ==========================================================
   LOAD DEPENDENCIES
========================================================== */

async function loadDependencies(list){

    if(!list){

        return;

    }

    for(const module of list){

        await loadModule(module);

    }

}

/* ==========================================================
   UNLOAD MODULE
========================================================== */

function unloadModule(moduleName){

    if(

        APP.modules.loaded[moduleName]

    ){

        delete

        APP.modules.loaded[moduleName];

    }

}

/* ==========================================================
   RELOAD MODULE
========================================================== */

async function reloadModule(moduleName){

    unloadModule(moduleName);

    return await loadModule(moduleName);

}

/* ==========================================================
   MODULE EXISTS
========================================================== */

function moduleLoaded(moduleName){

    return !!APP.modules.loaded[moduleName];

}

/* ==========================================================
   GET MODULE
========================================================== */

function getModule(moduleName){

    return APP.modules.loaded[moduleName];

}

/* ==========================================================
   GET LOADED MODULES
========================================================== */

function getLoadedModules(){

    return Object.keys(

        APP.modules.loaded

    );

}

/* ==========================================================
   LOAD STARTUP MODULES
========================================================== */

async function loadStartupModules(){

    if(

        typeof Modules==="undefined"

    ){

        return;

    }

    const startup=

        Modules.filter(

            module=>module.autoLoad

        );

    for(const module of startup){

        await loadModule(

            module.name

        );

    }

}

/* ==========================================================
   LOAD DASHBOARD MODULES
========================================================== */

async function loadDashboardModules(){

    const modules=[

        "dashboard",

        "patient",

        "visit"

    ];

    for(const module of modules){

        await loadModule(module);

    }

}

/* ==========================================================
   MODULE INFORMATION
========================================================== */

function getModuleStatistics(){

    return{

        loaded:

            Object.keys(

                APP.modules.loaded

            ).length,

        loading:

            Object.keys(

                APP.modules.loading

            ).length,

        failed:

            Object.keys(

                APP.modules.failed

            ).length

    };

}

/* ==========================================================
   CLEAR MODULE CACHE
========================================================== */

function clearModuleCache(){

    APP.modules.loaded={};

    APP.modules.loading={};

    APP.modules.failed={};

    APP.storage.loadedModules=[];

}

/* ==========================================================
   STARTUP
========================================================== */

document.addEventListener(

    APP.events.READY,

    ()=>{

        loadStartupModules();

    }

);

/* ==========================================================
   DASHBOARD STORAGE
========================================================== */

APP.dashboard={

    loaded:false,

    loading:false,

    widgets:[],

    shortcuts:[],

    statistics:{},

    notifications:[],

    recentActivities:[]

};

/* ==========================================================
   LOAD DASHBOARD
========================================================== */

async function loadDashboard(){

    try{

        APP.dashboard.loading=true;

        showLoading("در حال بارگذاری داشبورد ...");

        await loadDashboardStatistics();

        await loadDashboardWidgets();

        await loadDashboardShortcuts();

        await loadDashboardNotifications();

        await loadRecentActivities();

        APP.dashboard.loaded=true;

        APP.dashboard.loading=false;

        hideLoading();

        notifySuccess(

            "داشبورد آماده است."

        );

        return true;

    }

    catch(error){

        hideLoading();

        APP.dashboard.loading=false;

        console.error(error);

        notifyError(

            "خطا در بارگذاری داشبورد"

        );

        return false;

    }

}

/* ==========================================================
   LOAD STATISTICS
========================================================== */

async function loadDashboardStatistics(){

    APP.dashboard.statistics={

        patients:

            typeof Patients!=="undefined"

            ?Patients.length

            :0,

        visits:

            typeof Visits!=="undefined"

            ?Visits.length

            :0,

        doctors:

            typeof Doctors!=="undefined"

            ?Doctors.length

            :0,

        online:

            APP.state.online

    };

}

/* ==========================================================
   LOAD WIDGETS
========================================================== */

async function loadDashboardWidgets(){

    APP.dashboard.widgets=[

        "patient-counter",

        "visit-counter",

        "doctor-counter",

        "recent-activity",

        "notifications"

    ];

}

/* ==========================================================
   LOAD SHORTCUTS
========================================================== */

async function loadDashboardShortcuts(){

    APP.dashboard.shortcuts=[

        {

            title:"سلامتجوی جدید",

            page:"patient"

        },

        {

            title:"ویزیت جدید",

            page:"visit"

        },

        {

            title:"گزارش‌ها",

            page:"reports"

        },

        {

            title:"تنظیمات",

            page:"settings"

        }

    ];

}

/* ==========================================================
   LOAD NOTIFICATIONS
========================================================== */

async function loadDashboardNotifications(){

    APP.dashboard.notifications=

        getNotifications();

}

/* ==========================================================
   LOAD RECENT ACTIVITIES
========================================================== */

async function loadRecentActivities(){

    if(

        typeof getAuditLogs==="function"

    ){

        APP.dashboard.recentActivities=

            getAuditLogs()

            .slice(-20)

            .reverse();

    }

}

/* ==========================================================
   REFRESH DASHBOARD
========================================================== */

async function refreshDashboard(){

    APP.dashboard.loaded=false;

    await loadDashboard();

}

/* ==========================================================
   GET DASHBOARD DATA
========================================================== */

function getDashboardData(){

    return APP.dashboard;

}

/* ==========================================================
   CLEAR DASHBOARD CACHE
========================================================== */

function clearDashboard(){

    APP.dashboard={

        loaded:false,

        loading:false,

        widgets:[],

        shortcuts:[],

        statistics:{},

        notifications:[],

        recentActivities:[]

    };

}

/* ==========================================================
   AUTO LOAD
========================================================== */

document.addEventListener(

    APP.events.LOGIN,

    ()=>{

        if(

            APP.state.currentPage==="dashboard"

        ){

            loadDashboard();

        }

    }

);

/* ==========================================================
   ERROR STORAGE
========================================================== */

APP.errors=[];

/* ==========================================================
   REGISTER ERROR
========================================================== */

function registerError(error){

    const log={

        id:crypto.randomUUID(),

        message:error.message||String(error),

        stack:error.stack||"",

        date:new Date(),

        page:APP.state.currentPage,

        user:

            APP.currentUser

            ?APP.currentUser.id

            :null

    };

    APP.errors.push(log);

    console.error(log);

    if(typeof addAuditLog==="function"){

        addAuditLog({

            tableName:"System",

            recordID:log.id,

            fieldName:"Error",

            oldValue:null,

            newValue:log.message,

            action:"ERROR",

            reason:"Application Error",

            userID:

                APP.currentUser

                ?APP.currentUser.id

                :"System",

            userName:

                APP.currentUser

                ?APP.currentUser.fullName

                :"System",

            userRole:

                APP.currentUser

                ?APP.currentUser.role

                :"System",

            date:new Date().toLocaleDateString(),

            time:new Date().toLocaleTimeString()

        });

    }

}

/* ==========================================================
   GLOBAL JAVASCRIPT ERROR
========================================================== */

window.addEventListener(

    "error",

    function(event){

        registerError(event.error||event);

    }

);

/* ==========================================================
   PROMISE ERROR
========================================================== */

window.addEventListener(

    "unhandledrejection",

    function(event){

        registerError(event.reason);

    }

);

/* ==========================================================
   EVENT BUS
========================================================== */

APP.eventBus={};

/* ==========================================================
   ON
========================================================== */

function on(event,callback){

    if(!APP.eventBus[event]){

        APP.eventBus[event]=[];

    }

    APP.eventBus[event].push(callback);

}

/* ==========================================================
   OFF
========================================================== */

function off(event,callback){

    if(!APP.eventBus[event]){

        return;

    }

    APP.eventBus[event]=

        APP.eventBus[event]

        .filter(

            item=>item!==callback

        );

}

/* ==========================================================
   EMIT
========================================================== */

function emit(event,data={}){

    if(!APP.eventBus[event]){

        return;

    }

    APP.eventBus[event]

    .forEach(callback=>{

        try{

            callback(data);

        }

        catch(error){

            registerError(error);

        }

    });

}

/* ==========================================================
   CLEAR EVENTS
========================================================== */

function clearEvents(){

    APP.eventBus={};

}

/* ==========================================================
   SHUTDOWN
========================================================== */

async function shutdownApplication(){

    console.log(

        "Shutdown Started..."

    );

    try{

        saveApplicationSettings();

    }catch(e){

        registerError(e);

    }

    try{

        if(typeof backupNow==="function"){

            await backupNow();

        }

    }catch(e){

        registerError(e);

    }

    try{

        sessionStorage.setItem(

            "LAST_ACTIVITY",

            new Date()

        );

    }catch(e){

        registerError(e);

    }

    emit(

        "APPLICATION_SHUTDOWN"

    );

    console.log(

        "Shutdown Completed."

    );

}

/* ==========================================================
   WINDOW CLOSE
========================================================== */

window.addEventListener(

    "beforeunload",

    function(){

        shutdownApplication();

    }

);

/* ==========================================================
   APPLICATION READY
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    async function(){

        try{

            initializeApplication();

            emit(

                "APPLICATION_READY"

            );

        }

        catch(error){

            registerError(error);

        }

    }

);

/* ==========================================================
   APPLICATION STARTED
========================================================== */

console.log(

    "===================================="

);

console.log(

    APP.info.name

);

console.log(

    "Version :",

    APP.info.version

);

console.log(

    "Enterprise Medical Platform"

);

console.log(

    "===================================="

);

/* ==========================================================
   END OF APP.JS
========================================================== */
