/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : reception-appointment.js
   MODULE      : Reception Appointment
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت نوبت‌های سلامتجو، برنامه‌ریزی، وضعیت نوبت و تخصیص منابع پذیرش

========================================================== */

"use strict";


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-001         */
/* فضای نام اصلی ماژول                               */
/* ================================================= */

const ReceptionAppointment = {};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-002         */
/* تنظیمات اصلی ماژول                                */
/* ================================================= */

ReceptionAppointment.config = {

    moduleName: "ReceptionAppointment",

    version: "0.0.1",

    locale: "fa-IR",

    defaultDuration: 30

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-003         */
/* ثابت‌های نوبت                                     */
/* ================================================= */

ReceptionAppointment.constants = {

    statuses: {

        scheduled: "SCHEDULED",

        confirmed: "CONFIRMED",

        waiting: "WAITING",

        inProgress: "IN_PROGRESS",

        completed: "COMPLETED",

        cancelled: "CANCELLED",

        noShow: "NO_SHOW"

    },

    priorities: {

        normal: "NORMAL",

        urgent: "URGENT",

        emergency: "EMERGENCY"

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-004         */
/* وضعیت اصلی ماژول                                  */
/* ================================================= */

ReceptionAppointment.state = {

    initialized: false,

    current: null,

    list: [],

    filteredList: [],

    selectedAppointmentId: null,

    loading: false,

    error: null

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-005         */
/* کش عناصر DOM                                      */
/* ================================================= */

ReceptionAppointment.dom = {

    root: null,

    form: null,

    searchInput: null,

    appointmentList: null,

    appointmentTableBody: null

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-006         */
/* انتخاب عناصر DOM                                  */
/* ================================================= */

ReceptionAppointment.cacheDom = function () {

    ReceptionAppointment.dom.root =

        document.querySelector(

            "#receptionAppointmentModule"

        );

    ReceptionAppointment.dom.form =

        document.querySelector(

            "#appointmentForm"

        );

    ReceptionAppointment.dom.searchInput =

        document.querySelector(

            "#appointmentSearch"

        );

    ReceptionAppointment.dom.appointmentList =

        document.querySelector(

            "#appointmentList"

        );

    ReceptionAppointment.dom.appointmentTableBody =

        document.querySelector(

            "#appointmentTableBody"

        );

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-007         */
/* تولید شناسه نوبت                                  */
/* ================================================= */

ReceptionAppointment.generateId = function () {

    return crypto.randomUUID();

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-008         */
/* ایجاد نوبت                                        */
/* ================================================= */

ReceptionAppointment.create = function (

    data = {}

) {

    const appointment = {

        appointmentId:

            data.appointmentId ||

            ReceptionAppointment.generateId(),

        healthSeekerId:

            data.healthSeekerId || "",

        visitId:

            data.visitId || "",

        doctorId:

            data.doctorId || "",

        departmentId:

            data.departmentId || "",

        roomId:

            data.roomId || "",

        appointmentDate:

            data.appointmentDate || "",

        startTime:

            data.startTime || "",

        endTime:

            data.endTime || "",

        duration:

            data.duration ||

            ReceptionAppointment.config

                .defaultDuration,

        priority:

            data.priority ||

            ReceptionAppointment.constants

                .priorities.normal,

        status:

            data.status ||

            ReceptionAppointment.constants

                .statuses.scheduled,

        notes:

            data.notes || "",

        createdAt:

            data.createdAt ||

            new Date().toISOString(),

        updatedAt:

            new Date().toISOString()

    };

    ReceptionAppointment.state.list.push(

        appointment

    );

    ReceptionAppointment.state.current =

        appointment;

    return appointment;

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-009         */
/* دریافت نوبت بر اساس شناسه                         */
/* ================================================= */

ReceptionAppointment.getById = function (

    appointmentId

) {

    return ReceptionAppointment.state.list.find(

        function (appointment) {

            return (

                appointment.appointmentId ===

                appointmentId

            );

        }

    ) || null;

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-010         */
/* انتخاب نوبت                                       */
/* ================================================= */

ReceptionAppointment.select = function (

    appointmentId

) {

    const appointment =

        ReceptionAppointment.getById(

            appointmentId

        );

    ReceptionAppointment.state.current =

        appointment;

    ReceptionAppointment.state

        .selectedAppointmentId =

        appointment

            ? appointment.appointmentId

            : null;

    return appointment;

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-011         */
/* بروزرسانی نوبت                                    */
/* ================================================= */

ReceptionAppointment.update = function (

    appointmentId,

    data = {}

) {

    const appointment =

        ReceptionAppointment.getById(

            appointmentId

        );

    if (!appointment) {

        return null;

    }

    Object.assign(

        appointment,

        data,

        {

            appointmentId:

                appointment.appointmentId,

            updatedAt:

                new Date().toISOString()

        }

    );

    return appointment;

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-012         */
/* تغییر وضعیت نوبت                                  */
/* ================================================= */

ReceptionAppointment.updateStatus = function (

    appointmentId,

    status

) {

    const appointment =

        ReceptionAppointment.getById(

            appointmentId

        );

    if (!appointment) {

        return false;

    }

    appointment.status = status;

    appointment.updatedAt =

        new Date().toISOString();

    return true;

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-013         */
/* لغو نوبت                                          */
/* ================================================= */

ReceptionAppointment.cancel = function (

    appointmentId

) {

    return ReceptionAppointment.updateStatus(

        appointmentId,

        ReceptionAppointment.constants

            .statuses.cancelled

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-014         */
/* جستجوی نوبت                                       */
/* ================================================= */

ReceptionAppointment.search = function (

    keyword

) {

    if (

        !keyword ||

        !String(keyword).trim()

    ) {

        ReceptionAppointment.state.filteredList =

            [];

        return [];

    }

    const value =

        String(keyword)

            .trim()

            .toLowerCase();

    const results =

        ReceptionAppointment.state.list.filter(

            function (appointment) {

                return [

                    appointment.appointmentId,

                    appointment.healthSeekerId,

                    appointment.visitId,

                    appointment.doctorId,

                    appointment.departmentId

                ]

                    .join(" ")

                    .toLowerCase()

                    .includes(value);

            }

        );

    ReceptionAppointment.state.filteredList =

        results;

    return results;

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-015         */
/* فیلتر نوبت‌ها                                     */
/* ================================================= */

ReceptionAppointment.filter = function (

    filters = {}

) {

    const results =

        ReceptionAppointment.state.list.filter(

            function (appointment) {

                if (

                    filters.status &&

                    appointment.status !==

                        filters.status

                ) {

                    return false;

                }

                if (

                    filters.doctorId &&

                    appointment.doctorId !==

                        filters.doctorId

                ) {

                    return false;

                }

                if (

                    filters.departmentId &&

                    appointment.departmentId !==

                        filters.departmentId

                ) {

                    return false;

                }

                if (

                    filters.healthSeekerId &&

                    appointment.healthSeekerId !==

                        filters.healthSeekerId

                ) {

                    return false;

                }

                if (

                    filters.appointmentDate &&

                    appointment.appointmentDate !==

                        filters.appointmentDate

                ) {

                    return false;

                }

                return true;

            }

        );

    ReceptionAppointment.state.filteredList =

        results;

    return results;

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-016         */
/* بررسی تداخل زمانی نوبت                            */
/* ================================================= */

ReceptionAppointment.hasConflict = function (

    data

) {

    return ReceptionAppointment.state.list.some(

        function (appointment) {

            return (

                appointment.appointmentDate ===

                    data.appointmentDate &&

                appointment.startTime ===

                    data.startTime &&

                appointment.doctorId ===

                    data.doctorId &&

                appointment.status !==

                    ReceptionAppointment.constants

                        .statuses.cancelled

            );

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-017         */
/* دریافت نوبت‌های سلامتجو                           */
/* ================================================= */

ReceptionAppointment.getByHealthSeeker = function (

    healthSeekerId

) {

    return ReceptionAppointment.state.list.filter(

        function (appointment) {

            return (

                appointment.healthSeekerId ===

                healthSeekerId

            );

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-018         */
/* دریافت نوبت‌های پزشک                              */
/* ================================================= */

ReceptionAppointment.getByDoctor = function (

    doctorId

) {

    return ReceptionAppointment.state.list.filter(

        function (appointment) {

            return (

                appointment.doctorId ===

                doctorId

            );

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-019         */
/* تغییر نوبت به وضعیت انتظار                         */
/* ================================================= */

ReceptionAppointment.markAsWaiting = function (

    appointmentId

) {

    return ReceptionAppointment.updateStatus(

        appointmentId,

        ReceptionAppointment.constants

            .statuses.waiting

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-020         */
/* تغییر نوبت به وضعیت تکمیل                         */
/* ================================================= */

ReceptionAppointment.complete = function (

    appointmentId

) {

    return ReceptionAppointment.updateStatus(

        appointmentId,

        ReceptionAppointment.constants

            .statuses.completed

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-021         */
/* مدیریت Dialog                                     */
/* ================================================= */

ReceptionAppointment.dialog = {

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
/* SECTION ID : RECEPTION-APPOINTMENT-JS-022         */
/* مدیریت Modal و Drawer                             */
/* ================================================= */

ReceptionAppointment.overlay = {

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
/* SECTION ID : RECEPTION-APPOINTMENT-JS-023         */
/* ابزارهای کمکی                                    */
/* ================================================= */

ReceptionAppointment.helpers = {

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
/* SECTION ID : RECEPTION-APPOINTMENT-JS-024         */
/* اتصال رویدادهای جستجو                             */
/* ================================================= */

ReceptionAppointment.bindSearchEvents =

    function () {

        if (

            !ReceptionAppointment.dom

                .searchInput

        ) {

            return;

        }

        ReceptionAppointment.dom

            .searchInput

            .addEventListener(

                "input",

                function (event) {

                    ReceptionAppointment.search(

                        event.target.value

                    );

                }

            );

    };


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-025         */
/* اتصال رویدادهای فرم                               */
/* ================================================= */

ReceptionAppointment.bindFormEvents =

    function () {

        if (

            !ReceptionAppointment.dom.form

        ) {

            return;

        }

        ReceptionAppointment.dom.form

            .addEventListener(

                "submit",

                function (event) {

                    event.preventDefault();

                    const formData =

                        new FormData(

                            ReceptionAppointment

                                .dom

                                .form

                        );

                    const data =

                        Object.fromEntries(

                            formData.entries()

                        );

                    if (

                        !ReceptionAppointment

                            .hasConflict(

                                data

                            )

                    ) {

                        ReceptionAppointment.create(

                            data

                        );

                    }

                }

            );

    };


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-026         */
/* اتصال رویدادهای عمومی                             */
/* ================================================= */

ReceptionAppointment.bindGlobalEvents =

    function () {

        document.addEventListener(

            "keydown",

            function (event) {

                if (

                    event.key ===

                    "Escape"

                ) {

                    ReceptionAppointment

                        .overlay

                        .close(

                            ".modal.active"

                        );

                }

            }

        );

    };


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-027         */
/* اتصال تمام رویدادها                               */
/* ================================================= */

ReceptionAppointment.bindEvents =

    function () {

        ReceptionAppointment.bindSearchEvents();

        ReceptionAppointment.bindFormEvents();

        ReceptionAppointment.bindGlobalEvents();

    };


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-028         */
/* راه‌اندازی ماژول                                  */
/* ================================================= */

ReceptionAppointment.initialize = function () {

    if (

        ReceptionAppointment.state.initialized

    ) {

        return;

    }

    ReceptionAppointment.cacheDom();

    ReceptionAppointment.bindEvents();

    ReceptionAppointment.state.initialized =

        true;

};


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-029         */
/* اجرای خودکار ماژول                               */
/* ================================================= */

document.addEventListener(

    "DOMContentLoaded",

    function () {

        ReceptionAppointment.initialize();

    }

);


/* ================================================= */
/* SECTION ID : RECEPTION-APPOINTMENT-JS-999         */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */