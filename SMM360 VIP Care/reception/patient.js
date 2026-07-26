/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : patient.js
   MODULE      : Patient
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت ساختار اصلی، تنظیمات، وضعیت و راه‌اندازی ماژول سلامتجو

========================================================== */

"use strict";


/* ================================================= */
/* SECTION ID : PATIENT-JS-001                       */
/* فضای نام اصلی ماژول                               */
/* ================================================= */

const Patient = {};


/* ================================================= */
/* SECTION ID : PATIENT-JS-002                       */
/* تنظیمات اصلی ماژول                                */
/* ================================================= */

Patient.config = {

    moduleName: "Patient",

    version: "0.0.1",

    locale: "fa-IR",

    calendar: "persian",

    identifierPrefix: "SMM360",

    sequenceLength: 3

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-003                       */
/* ثابت‌های ماژول                                    */
/* ================================================= */

Patient.constants = {

    defaultSequence: 1,

    identifierSeparator: "-",

    selectors: {

        root: "#patientModule",

        form: "#patientForm",

        searchInput: "#patientSearch",

        searchButton: "#patientSearchButton",

        patientList: "#patientList",

        patientTable: "#patientTable",

        patientTableBody: "#patientTableBody",

        profile: "#patientProfile",

        activity: "#patientActivity",

        timeline: "#patientTimeline"

    },

    statuses: {

        active: "ACTIVE",

        inactive: "INACTIVE",

        archived: "ARCHIVED"

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-004                       */
/* وضعیت اصلی ماژول                                  */
/* ================================================= */

Patient.state = {

    initialized: false,

    current: null,

    list: [],

    searchResults: [],

    selectedId: null,

    loading: false,

    error: null,

    lastUpdatedAt: null

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-005                       */
/* کش عناصر DOM                                      */
/* ================================================= */

Patient.dom = {

    root: null,

    form: null,

    searchInput: null,

    searchButton: null,

    patientList: null,

    patientTable: null,

    patientTableBody: null,

    profile: null,

    activity: null,

    timeline: null

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-006                       */
/* کش عناصر اصلی DOM                                 */
/* ================================================= */

Patient.cacheDom = function () {

    const selectors =

        Patient.constants.selectors;

    Patient.dom.root =

        document.querySelector(

            selectors.root

        );

    Patient.dom.form =

        document.querySelector(

            selectors.form

        );

    Patient.dom.searchInput =

        document.querySelector(

            selectors.searchInput

        );

    Patient.dom.searchButton =

        document.querySelector(

            selectors.searchButton

        );

    Patient.dom.patientList =

        document.querySelector(

            selectors.patientList

        );

    Patient.dom.patientTable =

        document.querySelector(

            selectors.patientTable

        );

    Patient.dom.patientTableBody =

        document.querySelector(

            selectors.patientTableBody

        );

    Patient.dom.profile =

        document.querySelector(

            selectors.profile

        );

    Patient.dom.activity =

        document.querySelector(

            selectors.activity

        );

    Patient.dom.timeline =

        document.querySelector(

            selectors.timeline

        );

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-007                       */
/* مقداردهی وضعیت اولیه                              */
/* ================================================= */

Patient.initializeState = function () {

    Patient.state.initialized = false;

    Patient.state.current = null;

    Patient.state.selectedId = null;

    Patient.state.loading = false;

    Patient.state.error = null;

    Patient.state.lastUpdatedAt = null;

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-008                       */
/* پاکسازی خطای ماژول                                */
/* ================================================= */

Patient.clearError = function () {

    Patient.state.error = null;

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-009                       */
/* مقداردهی اولیه ماژول                              */
/* ================================================= */

Patient.bootstrap = function () {

    Patient.initializeState();

    Patient.cacheDom();

    Patient.clearError();

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-010                       */
/* راه‌اندازی ماژول                                  */
/* ================================================= */

Patient.initialize = function () {

    if (

        Patient.state.initialized

    ) {

        return;

    }

    Patient.bootstrap();

    Patient.state.initialized = true;

    Patient.state.lastUpdatedAt =

        new Date().toISOString();

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-011                       */
/* اجرای خودکار ماژول                               */
/* ================================================= */

document.addEventListener(

    "DOMContentLoaded",

    function () {

        Patient.initialize();

    }

);


/* ================================================= */
/* SECTION ID : PATIENT-JS-012                       */
/* پایان بخش اول                                     */
/* ================================================= */

/* ================================================= */
/* SECTION ID : PATIENT-JS-013                       */
/* مدیریت سلامتجو                                    */
/* ================================================= */

Patient.healthSeeker = {

    getCurrent: function () {

        return Patient.state.current;

    },

    setCurrent: function (healthSeeker) {

        Patient.state.current =

            healthSeeker || null;

        Patient.state.selectedId =

            healthSeeker

                ? healthSeeker.healthSeekerId

                : null;

        return Patient.state.current;

    },

    clearCurrent: function () {

        Patient.state.current = null;

        Patient.state.selectedId = null;

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-014                       */
/* تولید شناسه سلامتجو                              */
/* ================================================= */

Patient.generateHealthSeekerId = function (

    monthlySequence

) {

    const date = new Date();

    const parts = new Intl.DateTimeFormat(

        "en-US-u-ca-persian",

        {

            year: "2-digit",

            month: "2-digit"

        }

    ).formatToParts(date);

    const year =

        parts.find(

            function (part) {

                return part.type === "year";

            }

        )?.value || "";

    const month =

        parts.find(

            function (part) {

                return part.type === "month";

            }

        )?.value || "";

    const sequence = String(

        monthlySequence ||

        Patient.constants.defaultSequence

    ).padStart(

        Patient.config.sequenceLength,

        "0"

    );

    return [

        Patient.config.identifierPrefix,

        year,

        month,

        sequence

    ].join(

        Patient.constants.identifierSeparator

    );

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-015                       */
/* اعتبارسنجی ساختار شناسه سلامتجو                   */
/* ================================================= */

Patient.validateHealthSeekerId = function (

    healthSeekerId

) {

    if (

        typeof healthSeekerId !==

        "string"

    ) {

        return false;

    }

    const pattern =

        /^SMM360-\d{2}-\d{2}-\d{3}$/;

    return pattern.test(

        healthSeekerId.trim()

    );

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-016                       */
/* بررسی یکتایی شناسه سلامتجو                        */
/* ================================================= */

Patient.isHealthSeekerIdUnique = function (

    healthSeekerId

) {

    return !Patient.state.list.some(

        function (healthSeeker) {

            return (

                healthSeeker.healthSeekerId ===

                healthSeekerId

            );

        }

    );

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-017                       */
/* دریافت سلامتجو بر اساس شناسه                      */
/* ================================================= */

Patient.getByHealthSeekerId = function (

    healthSeekerId

) {

    return Patient.state.list.find(

        function (healthSeeker) {

            return (

                healthSeeker.healthSeekerId ===

                healthSeekerId

            );

        }

    ) || null;

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-018                       */
/* ثبت سلامتجو در هویت جاری                          */
/* ================================================= */

Patient.selectHealthSeeker = function (

    healthSeekerId

) {

    const healthSeeker =

        Patient.getByHealthSeekerId(

            healthSeekerId

        );

    if (!healthSeeker) {

        return null;

    }

    return Patient.healthSeeker.setCurrent(

        healthSeeker

    );

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-019                       */
/* پاکسازی هویت سلامتجو                              */
/* ================================================= */

Patient.clearHealthSeekerIdentity = function () {

    Patient.healthSeeker.clearCurrent();

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-020                       */
/* پایان مدیریت هویت سلامتجو                         */
/* ================================================= */

/* ================================================= */
/* SECTION ID : PATIENT-JS-021                       */
/* ایجاد سلامتجو                                     */
/* ================================================= */

Patient.createHealthSeeker = function (

    data = {},

    monthlySequence

) {

    const healthSeeker = {

        healthSeekerId:

            data.healthSeekerId ||

            Patient.generateHealthSeekerId(

                monthlySequence

            ),

        profile: {

            ...(data.profile || {})

        },

        contact: {

            ...(data.contact || {})

        },

        status:

            data.status ||

            Patient.constants.statuses.active,

        createdAt:

            data.createdAt ||

            new Date().toISOString(),

        updatedAt:

            new Date().toISOString()

    };

    if (

        !Patient.validateHealthSeekerId(

            healthSeeker.healthSeekerId

        )

    ) {

        return null;

    }

    if (

        !Patient.isHealthSeekerIdUnique(

            healthSeeker.healthSeekerId

        )

    ) {

        return null;

    }

    Patient.state.list.push(

        healthSeeker

    );

    Patient.healthSeeker.setCurrent(

        healthSeeker

    );

    return healthSeeker;

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-022                       */
/* بروزرسانی اطلاعات سلامتجو                         */
/* ================================================= */

Patient.updateHealthSeeker = function (

    healthSeekerId,

    data = {}

) {

    const healthSeeker =

        Patient.getByHealthSeekerId(

            healthSeekerId

        );

    if (!healthSeeker) {

        return null;

    }

    if (

        data.healthSeekerId &&

        data.healthSeekerId !==

            healthSeeker.healthSeekerId

    ) {

        return null;

    }

    if (data.profile) {

        healthSeeker.profile = {

            ...healthSeeker.profile,

            ...data.profile

        };

    }

    if (data.contact) {

        healthSeeker.contact = {

            ...healthSeeker.contact,

            ...data.contact

        };

    }

    if (data.status) {

        healthSeeker.status =

            data.status;

    }

    healthSeeker.updatedAt =

        new Date().toISOString();

    if (

        Patient.state.selectedId ===

        healthSeekerId

    ) {

        Patient.healthSeeker.setCurrent(

            healthSeeker

        );

    }

    return healthSeeker;

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-023                       */
/* حذف منطقی سلامتجو                                */
/* ================================================= */

Patient.archiveHealthSeeker = function (

    healthSeekerId

) {

    const healthSeeker =

        Patient.getByHealthSeekerId(

            healthSeekerId

        );

    if (!healthSeeker) {

        return false;

    }

    healthSeeker.status =

        Patient.constants.statuses.archived;

    healthSeeker.updatedAt =

        new Date().toISOString();

    return true;

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-024                       */
/* جستجوی سلامتجو                                    */
/* ================================================= */

Patient.searchHealthSeekers = function (

    keyword

) {

    if (

        !keyword ||

        !String(keyword).trim()

    ) {

        Patient.state.searchResults = [];

        return [];

    }

    const value =

        String(keyword)

            .trim()

            .toLowerCase();

    const results =

        Patient.state.list.filter(

            function (healthSeeker) {

                const identifier =

                    String(

                        healthSeeker.healthSeekerId

                    ).toLowerCase();

                const profile =

                    JSON.stringify(

                        healthSeeker.profile

                    ).toLowerCase();

                const contact =

                    JSON.stringify(

                        healthSeeker.contact

                    ).toLowerCase();

                return (

                    identifier.includes(value) ||

                    profile.includes(value) ||

                    contact.includes(value)

                );

            }

        );

    Patient.state.searchResults =

        results;

    return results;

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-025                       */
/* فیلتر سلامتجویان                                  */
/* ================================================= */

Patient.filterHealthSeekers = function (

    filters = {}

) {

    const results =

        Patient.state.list.filter(

            function (healthSeeker) {

                if (

                    filters.status &&

                    healthSeeker.status !==

                        filters.status

                ) {

                    return false;

                }

                if (

                    filters.healthSeekerId &&

                    healthSeeker.healthSeekerId !==

                        filters.healthSeekerId

                ) {

                    return false;

                }

                return true;

            }

        );

    Patient.state.searchResults =

        results;

    return results;

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-026                       */
/* دریافت فهرست سلامتجویان                          */
/* ================================================= */

Patient.getHealthSeekers = function (

    filters = {}

) {

    if (

        Object.keys(filters).length

    ) {

        return Patient.filterHealthSeekers(

            filters

        );

    }

    return [

        ...Patient.state.list

    ];

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-027                       */
/* پاکسازی نتایج جستجو                               */
/* ================================================= */

Patient.clearSearchResults = function () {

    Patient.state.searchResults = [];

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-028                       */
/* پایان مدیریت اطلاعات سلامتجو                      */
/* ================================================= */

/* ================================================= */
/* SECTION ID : PATIENT-JS-029                       */
/* وضعیت سلامتجو                                    */
/* ================================================= */

Patient.status = {

    get: function (healthSeekerId) {

        const healthSeeker =

            Patient.getByHealthSeekerId(

                healthSeekerId

            );

        return healthSeeker

            ? healthSeeker.status

            : null;

    },

    set: function (

        healthSeekerId,

        status

    ) {

        const healthSeeker =

            Patient.getByHealthSeekerId(

                healthSeekerId

            );

        if (!healthSeeker) {

            return false;

        }

        healthSeeker.status = status;

        healthSeeker.updatedAt =

            new Date().toISOString();

        return true;

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-030                       */
/* مدیریت پرونده سلامت                              */
/* ================================================= */

Patient.healthRecord = {

    list: [],

    current: null,

    get: function (healthSeekerId) {

        return this.list.find(

            function (record) {

                return (

                    record.healthSeekerId ===

                    healthSeekerId

                );

            }

        ) || null;

    },

    setCurrent: function (record) {

        this.current = record || null;

        return this.current;

    },

    create: function (

        healthSeekerId,

        data = {}

    ) {

        const record = {

            healthRecordId:

                data.healthRecordId ||

                crypto.randomUUID(),

            healthSeekerId,

            data: {

                ...(data.data || {})

            },

            createdAt:

                new Date().toISOString(),

            updatedAt:

                new Date().toISOString()

        };

        this.list.push(record);

        this.current = record;

        return record;

    },

    update: function (

        healthRecordId,

        data = {}

    ) {

        const record = this.list.find(

            function (item) {

                return (

                    item.healthRecordId ===

                    healthRecordId

                );

            }

        );

        if (!record) {

            return null;

        }

        record.data = {

            ...record.data,

            ...(data.data || {})

        };

        record.updatedAt =

            new Date().toISOString();

        return record;

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-031                       */
/* مدیریت سوابق مراجعات                             */
/* ================================================= */

Patient.visitHistory = {

    list: [],

    add: function (

        healthSeekerId,

        visit

    ) {

        const item = {

            visitHistoryId:

                visit.visitHistoryId ||

                crypto.randomUUID(),

            healthSeekerId,

            visitId:

                visit.visitId || "",

            visitDate:

                visit.visitDate ||

                new Date().toISOString(),

            data: {

                ...visit

            }

        };

        this.list.push(item);

        return item;

    },

    getByHealthSeekerId: function (

        healthSeekerId

    ) {

        return this.list.filter(

            function (visit) {

                return (

                    visit.healthSeekerId ===

                    healthSeekerId

                );

            }

        );

    },

    getLatest: function (

        healthSeekerId

    ) {

        const visits =

            this.getByHealthSeekerId(

                healthSeekerId

            );

        return visits.at(-1) || null;

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-032                       */
/* مدیریت Activity                                  */
/* ================================================= */

Patient.activity = {

    list: [],

    add: function (

        healthSeekerId,

        activity

    ) {

        const item = {

            activityId:

                activity.activityId ||

                crypto.randomUUID(),

            healthSeekerId,

            type:

                activity.type || "",

            title:

                activity.title || "",

            description:

                activity.description || "",

            timestamp:

                activity.timestamp ||

                new Date().toISOString()

        };

        this.list.push(item);

        return item;

    },

    getByHealthSeekerId: function (

        healthSeekerId

    ) {

        return this.list.filter(

            function (activity) {

                return (

                    activity.healthSeekerId ===

                    healthSeekerId

                );

            }

        );

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-033                       */
/* مدیریت Timeline                                  */
/* ================================================= */

Patient.timeline = {

    list: [],

    add: function (

        healthSeekerId,

        event

    ) {

        const item = {

            timelineId:

                event.timelineId ||

                crypto.randomUUID(),

            healthSeekerId,

            type:

                event.type || "",

            title:

                event.title || "",

            description:

                event.description || "",

            timestamp:

                event.timestamp ||

                new Date().toISOString()

        };

        this.list.push(item);

        return item;

    },

    getByHealthSeekerId: function (

        healthSeekerId

    ) {

        return this.list.filter(

            function (event) {

                return (

                    event.healthSeekerId ===

                    healthSeekerId

                );

            }

        );

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-034                       */
/* دریافت خلاصه سلامتجو                             */
/* ================================================= */

Patient.getHealthSeekerSummary = function (

    healthSeekerId

) {

    const healthSeeker =

        Patient.getByHealthSeekerId(

            healthSeekerId

        );

    if (!healthSeeker) {

        return null;

    }

    return {

        healthSeeker,

        healthRecord:

            Patient.healthRecord.get(

                healthSeekerId

            ),

        visits:

            Patient.visitHistory

                .getByHealthSeekerId(

                    healthSeekerId

                ),

        activities:

            Patient.activity

                .getByHealthSeekerId(

                    healthSeekerId

                ),

        timeline:

            Patient.timeline

                .getByHealthSeekerId(

                    healthSeekerId

                )

    };

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-035                       */
/* پایان مدیریت پرونده و سوابق                       */
/* ================================================= */

/* ================================================= */
/* SECTION ID : PATIENT-JS-036                       */
/* مدیریت Dialog                                     */
/* ================================================= */

Patient.dialog = {

    open: function (dialogId) {

        const dialog =

            document.querySelector(

                dialogId

            );

        if (

            !dialog ||

            typeof dialog.showModal !==

                "function"

        ) {

            return false;

        }

        dialog.showModal();

        return true;

    },

    close: function (dialogId) {

        const dialog =

            document.querySelector(

                dialogId

            );

        if (

            !dialog ||

            typeof dialog.close !==

                "function"

        ) {

            return false;

        }

        dialog.close();

        return true;

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-037                       */
/* مدیریت Modal                                      */
/* ================================================= */

Patient.modal = {

    open: function (modalId) {

        const modal =

            document.querySelector(

                modalId

            );

        if (!modal) {

            return false;

        }

        modal.classList.add(

            "active"

        );

        modal.setAttribute(

            "aria-hidden",

            "false"

        );

        return true;

    },

    close: function (modalId) {

        const modal =

            document.querySelector(

                modalId

            );

        if (!modal) {

            return false;

        }

        modal.classList.remove(

            "active"

        );

        modal.setAttribute(

            "aria-hidden",

            "true"

        );

        return true;

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-038                       */
/* مدیریت Drawer                                     */
/* ================================================= */

Patient.drawer = {

    open: function (drawerId) {

        const drawer =

            document.querySelector(

                drawerId

            );

        if (!drawer) {

            return false;

        }

        drawer.classList.add(

            "active"

        );

        drawer.setAttribute(

            "aria-hidden",

            "false"

        );

        return true;

    },

    close: function (drawerId) {

        const drawer =

            document.querySelector(

                drawerId

            );

        if (!drawer) {

            return false;

        }

        drawer.classList.remove(

            "active"

        );

        drawer.setAttribute(

            "aria-hidden",

            "true"

        );

        return true;

    },

    closeAll: function () {

        document

            .querySelectorAll(

                ".drawer.active"

            )

            .forEach(

                function (drawer) {

                    drawer.classList.remove(

                        "active"

                    );

                    drawer.setAttribute(

                        "aria-hidden",

                        "true"

                    );

                }

            );

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-039                       */
/* مدیریت Template                                   */
/* ================================================= */

Patient.template = {

    render: function (

        templateId,

        data = {}

    ) {

        const template =

            document.querySelector(

                templateId

            );

        if (

            !template ||

            template.tagName !==

                "TEMPLATE"

        ) {

            return null;

        }

        const fragment =

            template.content.cloneNode(

                true

            );

        const container =

            document.createElement(

                "div"

            );

        container.appendChild(

            fragment

        );

        Object.keys(data).forEach(

            function (key) {

                container

                    .querySelectorAll(

                        `[data-template-field="${key}"]`

                    )

                    .forEach(

                        function (element) {

                            element.textContent =

                                data[key] ?? "";

                        }

                    );

            }

        );

        return container.firstElementChild;

    },

    insert: function (

        templateId,

        containerId,

        data = {}

    ) {

        const container =

            document.querySelector(

                containerId

            );

        const element =

            Patient.template.render(

                templateId,

                data

            );

        if (

            !container ||

            !element

        ) {

            return false;

        }

        container.appendChild(

            element

        );

        return true;

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-040                       */
/* مدیریت Context Menu                               */
/* ================================================= */

Patient.contextMenu = {

    current: null,

    open: function (

        menuId,

        position

    ) {

        const menu =

            document.querySelector(

                menuId

            );

        if (

            !menu ||

            !position

        ) {

            return false;

        }

        menu.style.top =

            `${position.y}px`;

        menu.style.left =

            `${position.x}px`;

        menu.classList.add(

            "active"

        );

        this.current = menu;

        return true;

    },

    close: function () {

        if (!this.current) {

            return;

        }

        this.current.classList.remove(

            "active"

        );

        this.current = null;

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-041                       */
/* اتصال رویداد جستجو                                */
/* ================================================= */

Patient.bindSearchEvents = function () {

    if (

        Patient.dom.searchInput

    ) {

        Patient.dom.searchInput.addEventListener(

            "input",

            function (event) {

                Patient.searchHealthSeekers(

                    event.target.value

                );

            }

        );

    }

    if (

        Patient.dom.searchButton

    ) {

        Patient.dom.searchButton.addEventListener(

            "click",

            function () {

                Patient.searchHealthSeekers(

                    Patient.dom.searchInput

                        ?.value || ""

                );

            }

        );

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-042                       */
/* اتصال رویداد فرم سلامتجو                          */
/* ================================================= */

Patient.bindFormEvents = function () {

    if (

        !Patient.dom.form

    ) {

        return;

    }

    Patient.dom.form.addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            const formData =

                new FormData(

                    Patient.dom.form

                );

            const data =

                Object.fromEntries(

                    formData.entries()

                );

            Patient.createHealthSeeker(

                data

            );

        }

    );

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-043                       */
/* اتصال رویدادهای عمومی                             */
/* ================================================= */

Patient.bindGlobalEvents = function () {

    document.addEventListener(

        "keydown",

        function (event) {

            if (

                event.key ===

                "Escape"

            ) {

                Patient.closeOverlays();

            }

        }

    );

    document.addEventListener(

        "click",

        function (event) {

            if (

                Patient.contextMenu.current &&

                !Patient.contextMenu.current

                    .contains(

                        event.target

                    )

            ) {

                Patient.contextMenu.close();

            }

        }

    );

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-044                       */
/* اتصال تمام رویدادهای ماژول                        */
/* ================================================= */

Patient.bindEvents = function () {

    Patient.bindSearchEvents();

    Patient.bindFormEvents();

    Patient.bindGlobalEvents();

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-045                       */
/* توابع کمکی انتخاب عناصر                           */
/* ================================================= */

Patient.helpers = {

    select: function (selector) {

        return document.querySelector(

            selector

        );

    },

    selectAll: function (selector) {

        return Array.from(

            document.querySelectorAll(

                selector

            )

        );

    },

    createElement: function (

        tagName,

        className

    ) {

        const element =

            document.createElement(

                tagName

            );

        if (className) {

            element.className =

                className;

        }

        return element;

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-046                       */
/* مدیریت مقدار عناصر                               */
/* ================================================= */

Patient.helpers.getValue = function (

    selector

) {

    const element =

        Patient.helpers.select(

            selector

        );

    return element

        ? element.value

        : "";

};


Patient.helpers.setValue = function (

    selector,

    value

) {

    const element =

        Patient.helpers.select(

            selector

        );

    if (!element) {

        return false;

    }

    element.value =

        value ?? "";

    return true;

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-047                       */
/* ابزارهای قالب‌بندی                                */
/* ================================================= */

Patient.utils = {

    formatNumber: function (

        value

    ) {

        return new Intl.NumberFormat(

            Patient.config.locale

        ).format(

            Number(value) || 0

        );

    },

    formatDate: function (

        value

    ) {

        if (!value) {

            return "";

        }

        return new Intl.DateTimeFormat(

            Patient.config.locale

        ).format(

            new Date(value)

        );

    },

    formatDateTime: function (

        value

    ) {

        if (!value) {

            return "";

        }

        return new Intl.DateTimeFormat(

            Patient.config.locale,

            {

                dateStyle: "short",

                timeStyle: "short"

            }

        ).format(

            new Date(value)

        );

    }

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-048                       */
/* اعتبارسنجی مقدارها                                */
/* ================================================= */

Patient.utils.isEmpty = function (

    value

) {

    return (

        value === null ||

        value === undefined ||

        String(value).trim() === ""

    );

};


Patient.utils.isValidObject = function (

    value

) {

    return (

        value !== null &&

        typeof value === "object" &&

        !Array.isArray(value)

    );

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-049                       */
/* بستن تمام لایه‌های باز                            */
/* ================================================= */

Patient.closeOverlays = function () {

    Patient.drawer.closeAll();

    document

        .querySelectorAll(

            ".modal.active"

        )

        .forEach(

            function (modal) {

                modal.classList.remove(

                    "active"

                );

                modal.setAttribute(

                    "aria-hidden",

                    "true"

                );

            }

        );

    Patient.contextMenu.close();

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-050                       */
/* راه‌اندازی نهایی ماژول                            */
/* ================================================= */

Patient.start = function () {

    if (

        !Patient.state.initialized

    ) {

        Patient.initialize();

    }

    Patient.bindEvents();

};


/* ================================================= */
/* SECTION ID : PATIENT-JS-999                       */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */