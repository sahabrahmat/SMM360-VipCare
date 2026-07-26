/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : reception-audit.js
   MODULE      : Reception Audit
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت ثبت، جستجو، فیلتر و مشاهده رویدادهای حسابرسی پذیرش

========================================================== */

"use strict";


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-001               */
/* فضای نام اصلی ماژول                               */
/* ================================================= */

const ReceptionAudit = {};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-002               */
/* تنظیمات اصلی ماژول                                */
/* ================================================= */

ReceptionAudit.config = {

    moduleName: "ReceptionAudit",

    version: "0.0.1",

    locale: "fa-IR",

    defaultPageSize: 50,

    maximumPageSize: 500

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-003               */
/* ثابت‌های حسابرسی                                 */
/* ================================================= */

ReceptionAudit.constants = {

    actions: {

        create: "CREATE",

        read: "READ",

        update: "UPDATE",

        delete: "DELETE",

        archive: "ARCHIVE",

        restore: "RESTORE",

        login: "LOGIN",

        logout: "LOGOUT",

        search: "SEARCH",

        export: "EXPORT"

    },

    entities: {

        healthSeeker: "HEALTH_SEEKER",

        visit: "VISIT",

        appointment: "APPOINTMENT",

        reception: "RECEPTION",

        payment: "PAYMENT",

        invoice: "INVOICE",

        healthRecord: "HEALTH_RECORD"

    },

    results: {

        success: "SUCCESS",

        failure: "FAILURE",

        denied: "DENIED"

    },

    severities: {

        information: "INFORMATION",

        warning: "WARNING",

        critical: "CRITICAL"

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-004               */
/* وضعیت اصلی ماژول                                  */
/* ================================================= */

ReceptionAudit.state = {

    initialized: false,

    current: null,

    list: [],

    filteredList: [],

    selectedAuditId: null,

    filters: {},

    loading: false,

    error: null,

    lastUpdatedAt: null

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-005               */
/* کش عناصر DOM                                      */
/* ================================================= */

ReceptionAudit.dom = {

    root: null,

    table: null,

    tableBody: null,

    searchInput: null,

    filterForm: null,

    pagination: null

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-006               */
/* انتخاب عناصر DOM                                  */
/* ================================================= */

ReceptionAudit.cacheDom = function () {

    ReceptionAudit.dom.root =

        document.querySelector(

            "#receptionAuditModule"

        );

    ReceptionAudit.dom.table =

        document.querySelector(

            "#auditTable"

        );

    ReceptionAudit.dom.tableBody =

        document.querySelector(

            "#auditTableBody"

        );

    ReceptionAudit.dom.searchInput =

        document.querySelector(

            "#auditSearch"

        );

    ReceptionAudit.dom.filterForm =

        document.querySelector(

            "#auditFilterForm"

        );

    ReceptionAudit.dom.pagination =

        document.querySelector(

            "#auditPagination"

        );

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-007               */
/* تولید شناسه رویداد حسابرسی                        */
/* ================================================= */

ReceptionAudit.generateId = function () {

    return crypto.randomUUID();

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-008               */
/* ایجاد رویداد حسابرسی                              */
/* ================================================= */

ReceptionAudit.create = function (

    data = {}

) {

    const auditRecord = {

        auditId:

            data.auditId ||

            ReceptionAudit.generateId(),

        action:

            data.action || "",

        entity:

            data.entity || "",

        entityId:

            data.entityId || "",

        healthSeekerId:

            data.healthSeekerId || "",

        visitId:

            data.visitId || "",

        actorId:

            data.actorId || "",

        actorRole:

            data.actorRole || "",

        result:

            data.result ||

            ReceptionAudit.constants.results

                .success,

        severity:

            data.severity ||

            ReceptionAudit.constants.severities

                .information,

        description:

            data.description || "",

        metadata:

            data.metadata || {},

        timestamp:

            data.timestamp ||

            new Date().toISOString()

    };

    ReceptionAudit.state.list.push(

        auditRecord

    );

    ReceptionAudit.state.current =

        auditRecord;

    ReceptionAudit.state.lastUpdatedAt =

        new Date().toISOString();

    return auditRecord;

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-009               */
/* ثبت رویداد تغییر اطلاعات                          */
/* ================================================= */

ReceptionAudit.recordChange = function (

    data = {}

) {

    return ReceptionAudit.create({

        ...data,

        action:

            data.action ||

            ReceptionAudit.constants.actions

                .update,

        metadata: {

            before: data.before || null,

            after: data.after || null,

            changedFields:

                data.changedFields || []

        }

    });

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-010               */
/* دریافت رویداد بر اساس شناسه                      */
/* ================================================= */

ReceptionAudit.getById = function (

    auditId

) {

    return ReceptionAudit.state.list.find(

        function (record) {

            return (

                record.auditId ===

                auditId

            );

        }

    ) || null;

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-011               */
/* انتخاب رویداد حسابرسی                             */
/* ================================================= */

ReceptionAudit.select = function (

    auditId

) {

    const record =

        ReceptionAudit.getById(

            auditId

        );

    ReceptionAudit.state.current =

        record;

    ReceptionAudit.state.selectedAuditId =

        record

            ? record.auditId

            : null;

    return record;

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-012               */
/* جستجوی رویدادهای حسابرسی                          */
/* ================================================= */

ReceptionAudit.search = function (

    keyword

) {

    if (

        !keyword ||

        !String(keyword).trim()

    ) {

        ReceptionAudit.state.filteredList =

            [

                ...ReceptionAudit.state.list

            ];

        return ReceptionAudit.state.filteredList;

    }

    const value =

        String(keyword)

            .trim()

            .toLowerCase();

    const results =

        ReceptionAudit.state.list.filter(

            function (record) {

                return [

                    record.auditId,

                    record.action,

                    record.entity,

                    record.entityId,

                    record.healthSeekerId,

                    record.visitId,

                    record.actorId,

                    record.actorRole,

                    record.description

                ]

                    .join(" ")

                    .toLowerCase()

                    .includes(value);

            }

        );

    ReceptionAudit.state.filteredList =

        results;

    return results;

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-013               */
/* فیلتر رویدادهای حسابرسی                           */
/* ================================================= */

ReceptionAudit.filter = function (

    filters = {}

) {

    const results =

        ReceptionAudit.state.list.filter(

            function (record) {

                if (

                    filters.action &&

                    record.action !==

                        filters.action

                ) {

                    return false;

                }

                if (

                    filters.entity &&

                    record.entity !==

                        filters.entity

                ) {

                    return false;

                }

                if (

                    filters.entityId &&

                    record.entityId !==

                        filters.entityId

                ) {

                    return false;

                }

                if (

                    filters.healthSeekerId &&

                    record.healthSeekerId !==

                        filters.healthSeekerId

                ) {

                    return false;

                }

                if (

                    filters.visitId &&

                    record.visitId !==

                        filters.visitId

                ) {

                    return false;

                }

                if (

                    filters.actorId &&

                    record.actorId !==

                        filters.actorId

                ) {

                    return false;

                }

                if (

                    filters.result &&

                    record.result !==

                        filters.result

                ) {

                    return false;

                }

                if (

                    filters.severity &&

                    record.severity !==

                        filters.severity

                ) {

                    return false;

                }

                return true;

            }

        );

    ReceptionAudit.state.filters =

        {

            ...filters

        };

    ReceptionAudit.state.filteredList =

        results;

    return results;

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-014               */
/* دریافت رویدادهای سلامتجو                          */
/* ================================================= */

ReceptionAudit.getByHealthSeeker = function (

    healthSeekerId

) {

    return ReceptionAudit.state.list.filter(

        function (record) {

            return (

                record.healthSeekerId ===

                healthSeekerId

            );

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-015               */
/* دریافت رویدادهای ویزیت                            */
/* ================================================= */

ReceptionAudit.getByVisit = function (

    visitId

) {

    return ReceptionAudit.state.list.filter(

        function (record) {

            return (

                record.visitId ===

                visitId

            );

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-016               */
/* دریافت رویدادهای یک موجودیت                       */
/* ================================================= */

ReceptionAudit.getByEntity = function (

    entity,

    entityId

) {

    return ReceptionAudit.state.list.filter(

        function (record) {

            return (

                record.entity ===

                    entity &&

                record.entityId ===

                    entityId

            );

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-017               */
/* دریافت آخرین رویدادهای حسابرسی                    */
/* ================================================= */

ReceptionAudit.getLatest = function (

    limit = 20

) {

    return ReceptionAudit.state.list

        .slice(-limit)

        .reverse();

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-018               */
/* دریافت رویدادهای حساس                             */
/* ================================================= */

ReceptionAudit.getCritical = function () {

    return ReceptionAudit.state.list.filter(

        function (record) {

            return (

                record.severity ===

                ReceptionAudit.constants

                    .severities.critical

            );

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-019               */
/* پاکسازی فیلترها                                   */
/* ================================================= */

ReceptionAudit.clearFilters = function () {

    ReceptionAudit.state.filters = {};

    ReceptionAudit.state.filteredList =

        [

            ...ReceptionAudit.state.list

        ];

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-020               */
/* نمایش رویدادهای حسابرسی                           */
/* ================================================= */

ReceptionAudit.render = function (

    records =

        ReceptionAudit.state.filteredList

) {

    if (

        !ReceptionAudit.dom.tableBody

    ) {

        return;

    }

    ReceptionAudit.dom.tableBody

        .replaceChildren();

    records.forEach(

        function (record) {

            const row =

                document.createElement(

                    "tr"

                );

            row.dataset.auditId =

                record.auditId;

            const values = [

                record.timestamp,

                record.action,

                record.entity,

                record.entityId,

                record.actorId,

                record.result,

                record.severity,

                record.description

            ];

            values.forEach(

                function (value) {

                    const cell =

                        document.createElement(

                            "td"

                        );

                    cell.textContent =

                        value ?? "";

                    row.appendChild(

                        cell

                    );

                }

            );

            ReceptionAudit.dom.tableBody

                .appendChild(

                    row

                );

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-021               */
/* مدیریت Dialog                                     */
/* ================================================= */

ReceptionAudit.dialog = {

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
/* SECTION ID : RECEPTION-AUDIT-JS-022               */
/* مدیریت Modal و Drawer                             */
/* ================================================= */

ReceptionAudit.overlay = {

    open: function (selector) {

        const element =

            document.querySelector(

                selector

            );

        if (!element) {

            return false;

        }

        element.classList.add(

            "active"

        );

        element.setAttribute(

            "aria-hidden",

            "false"

        );

        return true;

    },

    close: function (selector) {

        const element =

            document.querySelector(

                selector

            );

        if (!element) {

            return false;

        }

        element.classList.remove(

            "active"

        );

        element.setAttribute(

            "aria-hidden",

            "true"

        );

        return true;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-023               */
/* توابع کمکی                                        */
/* ================================================= */

ReceptionAudit.helpers = {

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

    getValue: function (selector) {

        const element =

            this.select(

                selector

            );

        return element

            ? element.value

            : "";

    },

    setValue: function (

        selector,

        value

    ) {

        const element =

            this.select(

                selector

            );

        if (!element) {

            return false;

        }

        element.value =

            value ?? "";

        return true;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-024               */
/* اتصال رویداد جستجو                                */
/* ================================================= */

ReceptionAudit.bindSearchEvents =

    function () {

        if (

            !ReceptionAudit.dom.searchInput

        ) {

            return;

        }

        ReceptionAudit.dom.searchInput

            .addEventListener(

                "input",

                function (event) {

                    ReceptionAudit.search(

                        event.target.value

                    );

                    ReceptionAudit.render();

                }

            );

    };


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-025               */
/* اتصال رویداد فیلتر                               */
/* ================================================= */

ReceptionAudit.bindFilterEvents =

    function () {

        if (

            !ReceptionAudit.dom.filterForm

        ) {

            return;

        }

        ReceptionAudit.dom.filterForm

            .addEventListener(

                "change",

                function () {

                    const formData =

                        new FormData(

                            ReceptionAudit

                                .dom

                                .filterForm

                        );

                    const filters =

                        Object.fromEntries(

                            formData.entries()

                        );

                    ReceptionAudit.filter(

                        filters

                    );

                    ReceptionAudit.render();

                }

            );

    };


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-026               */
/* اتصال رویدادهای عمومی                             */
/* ================================================= */

ReceptionAudit.bindGlobalEvents =

    function () {

        document.addEventListener(

            "keydown",

            function (event) {

                if (

                    event.key ===

                    "Escape"

                ) {

                    ReceptionAudit.overlay

                        .close(

                            ".modal.active"

                        );

                }

            }

        );

    };


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-027               */
/* اتصال تمام رویدادها                               */
/* ================================================= */

ReceptionAudit.bindEvents =

    function () {

        ReceptionAudit.bindSearchEvents();

        ReceptionAudit.bindFilterEvents();

        ReceptionAudit.bindGlobalEvents();

    };


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-028               */
/* راه‌اندازی ماژول                                  */
/* ================================================= */

ReceptionAudit.initialize = function () {

    if (

        ReceptionAudit.state.initialized

    ) {

        return;

    }

    ReceptionAudit.cacheDom();

    ReceptionAudit.state.filteredList =

        [

            ...ReceptionAudit.state.list

        ];

    ReceptionAudit.bindEvents();

    ReceptionAudit.state.initialized =

        true;

    ReceptionAudit.state.lastUpdatedAt =

        new Date().toISOString();

};


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-029               */
/* اجرای خودکار ماژول                               */
/* ================================================= */

document.addEventListener(

    "DOMContentLoaded",

    function () {

        ReceptionAudit.initialize();

    }

);


/* ================================================= */
/* SECTION ID : RECEPTION-AUDIT-JS-999               */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */