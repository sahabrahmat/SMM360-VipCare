/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : reception.js
   MODULE      : Reception
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   کنترل اصلی ماژول پذیرش سلامتجو

========================================================== */

"use strict";


/* ================================================= */
/* SECTION ID : RECEPTION-JS-001                     */
/* فضای نام اصلی ماژول                               */
/* ================================================= */

const Reception = {};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-002                     */
/* تنظیمات اصلی ماژول                                */
/* ================================================= */

Reception.config = {

    moduleName: "Reception",

    version: "0.0.1",

    autoRefreshInterval: 30000,

    dateFormat: "fa-IR",

    timeFormat: "24",

    queueRefreshInterval: 10000,

    notificationRefreshInterval: 15000,

    activityRefreshInterval: 15000

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-003                     */
/* ثابت‌های ماژول                                    */
/* ================================================= */

Reception.constants = {

    healthSeekerPrefix: "SMM360",

    visitPrefix: "V",

    defaultQueueNumber: 1,

    defaultVisitNumber: 1,

    selectors: {

        form: "#receptionForm",

        queue: "#healthSeekerQueueTable",

        search: "#healthSeekerSearch",

        dashboard: "#dashboard",

        notification: "#notificationList"

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-004                     */
/* وضعیت جاری ماژول                                  */
/* ================================================= */

Reception.state = {

    initialized: false,

    currentHealthSeeker: null,

    currentVisit: null,

    currentQueue: null,

    currentDoctor: null,

    currentDepartment: null,

    currentRoom: null,

    healthSeekers: [],

    visits: [],

    queue: [],

    doctors: [],

    departments: [],

    rooms: [],

    notifications: [],

    activities: [],

    timeline: [],

    attachments: []

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-005                     */
/* کش عناصر DOM                                      */
/* ================================================= */

Reception.dom = {

    body: null,

    form: null,

    searchInput: null,

    searchButton: null,

    queueTable: null,

    queueBody: null,

    dashboard: null,

    notificationList: null,

    activityList: null,

    timeline: null

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-006                     */
/* مقداردهی کش عناصر                                 */
/* ================================================= */

Reception.cacheDom = function () {

    Reception.dom.body =
        document.body;

    Reception.dom.form =
        document.querySelector(
            "#receptionForm"
        );

    Reception.dom.searchInput =
        document.querySelector(
            "#healthSeekerSearch"
        );

    Reception.dom.searchButton =
        document.querySelector(
            "#searchHealthSeekerButton"
        );

    Reception.dom.queueTable =
        document.querySelector(
            "#healthSeekerQueueTable"
        );

    Reception.dom.queueBody =
        document.querySelector(
            "#healthSeekerQueueBody"
        );

    Reception.dom.dashboard =
        document.querySelector(
            "#dashboard"
        );

    Reception.dom.notificationList =
        document.querySelector(
            "#notificationList"
        );

    Reception.dom.activityList =
        document.querySelector(
            "#activityTimeline"
        );

    Reception.dom.timeline =
        document.querySelector(
            "#healthTimeline"
        );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-007                     */
/* مقداردهی وضعیت اولیه                              */
/* ================================================= */

Reception.initializeState = function () {

    Reception.state.initialized = false;

    Reception.state.currentHealthSeeker = null;

    Reception.state.currentVisit = null;

    Reception.state.currentQueue = null;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-008                     */
/* بارگذاری اولیه                                     */
/* ================================================= */

Reception.bootstrap = function () {

    Reception.cacheDom();

    Reception.initializeState();

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-009                     */
/* راه‌اندازی ماژول                                  */
/* ================================================= */

Reception.initialize = function () {

    Reception.bootstrap();

    Reception.state.initialized = true;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-010                     */
/* اجرای خودکار                                      */
/* ================================================= */

document.addEventListener(

    "DOMContentLoaded",

    function () {

        Reception.initialize();

    }

);


/* ==========================================================
   DESCRIPTION :
   مدیریت سلامتجو، شناسه سلامتجو، شناسه ویزیت و جستجو
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-JS-011                     */
/* مدیریت سلامتجو                                   */
/* ================================================= */

Reception.healthSeeker = {

    current: null,

    clear: function () {

        this.current = null;

    },

    set: function (healthSeeker) {

        this.current = healthSeeker;

        Reception.state.currentHealthSeeker = healthSeeker;

    },

    get: function () {

        return this.current;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-012                     */
/* تولید شناسه سلامتجو                              */
/* ================================================= */

Reception.generateHealthSeekerId = function (
    monthlySequence
) {

    const now = new Date();

    const persianDate =
        new Intl.DateTimeFormat(
            "fa-IR-u-ca-persian",
            {
                year: "2-digit",
                month: "2-digit"
            }
        ).formatToParts(now);

    let year = "";

    let month = "";

    persianDate.forEach(function (part) {

        if (part.type === "year") {

            year = part.value;

        }

        if (part.type === "month") {

            month = part.value;

        }

    });

    const sequence =
        String(monthlySequence)
            .padStart(3, "0");

    return [

        Reception.constants.healthSeekerPrefix,

        year,

        month,

        sequence

    ].join("-");

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-013                     */
/* تولید شناسه ویزیت                                */
/* ================================================= */

Reception.generateVisitId = function (
    visitNumber
) {

    return (

        "V" +

        String(visitNumber)
            .padStart(2, "0")

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-014                     */
/* ثبت شناسه‌ها در فرم                              */
/* ================================================= */

Reception.updateIdentityFields = function (

    healthSeekerId,

    visitId

) {

    const healthInput =
        document.querySelector(
            "#healthSeekerIdentity"
        );

    const visitInput =
        document.querySelector(
            "#visitIdentity"
        );

    if (healthInput) {

        healthInput.value =
            healthSeekerId;

    }

    if (visitInput) {

        visitInput.value =
            visitId;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-015                     */
/* جستجوی سلامتجو                                   */
/* ================================================= */

Reception.searchHealthSeeker = function (

    keyword

) {

    if (!keyword) {

        return [];

    }

    const searchValue =
        keyword.trim().toLowerCase();

    return Reception.state.healthSeekers.filter(

        function (healthSeeker) {

            return (

                String(
                    healthSeeker.healthSeekerId
                )

                .toLowerCase()

                .includes(searchValue)

                ||

                String(
                    healthSeeker.fullName
                )

                .toLowerCase()

                .includes(searchValue)

            );

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-016                     */
/* انتخاب سلامتجو                                   */
/* ================================================= */

Reception.selectHealthSeeker = function (

    healthSeeker

) {

    Reception.healthSeeker.set(

        healthSeeker

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-017                     */
/* پاکسازی فرم جستجو                                */
/* ================================================= */

Reception.clearSearch = function () {

    const input =
        Reception.dom.searchInput;

    if (input) {

        input.value = "";

        input.focus();

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-018                     */
/* رویداد جستجو                                     */
/* ================================================= */

Reception.handleSearch = function () {

    if (

        !Reception.dom.searchInput

    ) {

        return;

    }

    const keyword =

        Reception.dom
            .searchInput
            .value;

    Reception.searchHealthSeeker(

        keyword

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-019                     */
/* اتصال رویداد جستجو                               */
/* ================================================= */

Reception.bindSearchEvents = function () {

    if (

        Reception.dom.searchButton

    ) {

        Reception.dom.searchButton

            .addEventListener(

                "click",

                Reception.handleSearch

            );

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-020                     */
/* پایان مدیریت سلامتجو                             */
/* ================================================= */

/* ==========================================================
   DESCRIPTION :
   ثبت پذیرش، جلسه سلامت و صف سلامتجویان
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-JS-021                     */
/* ایجاد جلسه سلامت                                  */
/* ================================================= */

Reception.createHealthSession = function () {

    Reception.state.currentVisit = {

        healthSessionId: crypto.randomUUID(),

        visitId: "",

        receptionDate: new Date(),

        status: "WAITING"

    };

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-022                     */
/* ثبت اطلاعات پذیرش                                 */
/* ================================================= */

Reception.registerReception = function (payload) {

    if (!payload) {

        return false;

    }

    Reception.state.currentVisit = {

        ...Reception.state.currentVisit,

        ...payload

    };

    return true;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-023                     */
/* تغییر وضعیت پذیرش                                 */
/* ================================================= */

Reception.updateReceptionStatus = function (

    status

) {

    if (

        !Reception.state.currentVisit

    ) {

        return;

    }

    Reception.state.currentVisit.status =

        status;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-024                     */
/* افزودن سلامتجو به صف                              */
/* ================================================= */

Reception.enqueueHealthSeeker = function (

    visit

) {

    Reception.state.queue.push(

        visit

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-025                     */
/* حذف سلامتجو از صف                                 */
/* ================================================= */

Reception.dequeueHealthSeeker = function () {

    if (

        Reception.state.queue.length === 0

    ) {

        return null;

    }

    return Reception.state.queue.shift();

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-026                     */
/* دریافت سلامتجوی بعدی                              */
/* ================================================= */

Reception.getNextHealthSeeker = function () {

    if (

        Reception.state.queue.length === 0

    ) {

        return null;

    }

    return Reception.state.queue[0];

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-027                     */
/* بروزرسانی شماره صف                                */
/* ================================================= */

Reception.updateQueueNumbers = function () {

    Reception.state.queue.forEach(

        function (

            item,

            index

        ) {

            item.queueNumber =

                index + 1;

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-028                     */
/* بروزرسانی جدول صف                                 */
/* ================================================= */

Reception.renderQueue = function () {

    if (

        !Reception.dom.queueBody

    ) {

        return;

    }

    Reception.dom.queueBody.innerHTML = "";

    Reception.state.queue.forEach(

        function (item) {

            const row =

                document.createElement("tr");

            row.innerHTML = `

                <td>${item.queueNumber}</td>

                <td>${item.healthSeekerId}</td>

                <td>${item.visitId}</td>

                <td>${item.fullName}</td>

                <td>${item.doctorName}</td>

                <td>${item.priority}</td>

                <td>${item.status}</td>

                <td>${item.waitingTime}</td>

            `;

            Reception.dom.queueBody

                .appendChild(row);

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-029                     */
/* بروزرسانی داشبورد صف                              */
/* ================================================= */

Reception.refreshQueueDashboard = function () {

    const waiting =

        Reception.state.queue.filter(

            function (item) {

                return item.status === "WAITING";

            }

        ).length;

    const waitingCounter =

        document.querySelector(

            "#waitingCount"

        );

    if (

        waitingCounter

    ) {

        waitingCounter.textContent =

            waiting;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-030                     */
/* پایان مدیریت پذیرش                               */
/* ================================================= */

/* ==========================================================
   DESCRIPTION :
   مدیریت نوبت‌ها، پزشکان، بخش‌ها، اتاق‌ها و منابع
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-JS-031                     */
/* مدیریت نوبت‌ها                                    */
/* ================================================= */

Reception.appointment = {

    list: [],

    add: function (appointment) {

        this.list.push(appointment);

    },

    remove: function (appointmentId) {

        this.list = this.list.filter(function (item) {

            return item.id !== appointmentId;

        });

    },

    find: function (appointmentId) {

        return this.list.find(function (item) {

            return item.id === appointmentId;

        });

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-032                     */
/* مدیریت پزشکان                                     */
/* ================================================= */

Reception.doctor = {

    list: [],

    current: null,

    select: function (doctorId) {

        this.current = this.list.find(function (item) {

            return item.id === doctorId;

        }) || null;

    },

    clear: function () {

        this.current = null;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-033                     */
/* مدیریت بخش‌ها                                     */
/* ================================================= */

Reception.department = {

    list: [],

    current: null,

    select: function (departmentId) {

        this.current = this.list.find(function (item) {

            return item.id === departmentId;

        }) || null;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-034                     */
/* مدیریت اتاق‌ها                                    */
/* ================================================= */

Reception.room = {

    list: [],

    current: null,

    select: function (roomId) {

        this.current = this.list.find(function (item) {

            return item.id === roomId;

        }) || null;

    },

    release: function () {

        this.current = null;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-035                     */
/* مدیریت منابع                                      */
/* ================================================= */

Reception.resource = {

    list: [],

    allocate: function (resourceId) {

        const resource = this.list.find(function (item) {

            return item.id === resourceId;

        });

        if (resource) {

            resource.allocated = true;

        }

    },

    release: function (resourceId) {

        const resource = this.list.find(function (item) {

            return item.id === resourceId;

        });

        if (resource) {

            resource.allocated = false;

        }

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-036                     */
/* بروزرسانی اطلاعات پزشک                            */
/* ================================================= */

Reception.refreshDoctorInformation = function () {

    if (!Reception.doctor.current) {

        return;

    }

    document.querySelector("#doctorSpeciality").value =
        Reception.doctor.current.speciality || "";

    document.querySelector("#doctorStatus").value =
        Reception.doctor.current.status || "";

    document.querySelector("#doctorQueueCount").value =
        Reception.doctor.current.queueCount || 0;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-037                     */
/* بروزرسانی اطلاعات بخش                             */
/* ================================================= */

Reception.refreshDepartmentInformation = function () {

    if (!Reception.department.current) {

        return;

    }

    document.querySelector("#departmentCapacity").value =
        Reception.department.current.capacity || "";

    document.querySelector("#departmentStatus").value =
        Reception.department.current.status || "";

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-038                     */
/* بروزرسانی اطلاعات اتاق                            */
/* ================================================= */

Reception.refreshRoomInformation = function () {

    if (!Reception.room.current) {

        return;

    }

    document.querySelector("#roomCapacity").value =
        Reception.room.current.capacity || "";

    document.querySelector("#roomStatus").value =
        Reception.room.current.status || "";

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-039                     */
/* تخصیص منابع به جلسه سلامت                         */
/* ================================================= */

Reception.assignResources = function () {

    if (

        !Reception.doctor.current ||

        !Reception.department.current ||

        !Reception.room.current

    ) {

        return false;

    }

    Reception.state.currentDoctor =
        Reception.doctor.current;

    Reception.state.currentDepartment =
        Reception.department.current;

    Reception.state.currentRoom =
        Reception.room.current;

    return true;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-040                     */
/* پایان مدیریت منابع                                */
/* ================================================= */

/* ==========================================================
   DESCRIPTION :
   مدیریت مالی، پوشش خدمات سلامت، پرداخت، صورتحساب و رسید
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-JS-041                     */
/* مدیریت پوشش خدمات سلامت                           */
/* ================================================= */

Reception.coverage = {

    current: null,

    list: [],

    set: function (coverage) {

        this.current = coverage;

    },

    clear: function () {

        this.current = null;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-042                     */
/* مدیریت مالی                                       */
/* ================================================= */

Reception.finance = {

    subtotal: 0,

    discount: 0,

    coverageAmount: 0,

    payable: 0,

    paid: 0,

    balance: 0

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-043                     */
/* محاسبه صورتحساب                                   */
/* ================================================= */

Reception.calculateInvoice = function () {

    const finance = Reception.finance;

    finance.payable =

        finance.subtotal
        -
        finance.discount
        -
        finance.coverageAmount;

    if (finance.payable < 0) {

        finance.payable = 0;

    }

    finance.balance =

        finance.payable
        -
        finance.paid;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-044                     */
/* ثبت پرداخت                                        */
/* ================================================= */

Reception.registerPayment = function (

    amount,

    paymentMethod

) {

    Reception.finance.paid += amount;

    Reception.calculateInvoice();

    Reception.state.currentPayment = {

        amount: amount,

        method: paymentMethod,

        paymentDate: new Date()

    };

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-045                     */
/* تولید صورتحساب                                    */
/* ================================================= */

Reception.createInvoice = function () {

    return {

        invoiceNumber:

            crypto.randomUUID(),

        healthSeekerId:

            Reception.state.currentHealthSeeker
                ?.healthSeekerId,

        visitId:

            Reception.state.currentVisit
                ?.visitId,

        issueDate:

            new Date(),

        subtotal:

            Reception.finance.subtotal,

        discount:

            Reception.finance.discount,

        coverage:

            Reception.finance.coverageAmount,

        payable:

            Reception.finance.payable,

        paid:

            Reception.finance.paid,

        balance:

            Reception.finance.balance

    };

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-046                     */
/* تولید رسید                                        */
/* ================================================= */

Reception.createReceipt = function () {

    return {

        receiptNumber:

            crypto.randomUUID(),

        invoice:

            Reception.createInvoice(),

        payment:

            Reception.state.currentPayment

    };

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-047                     */
/* بروزرسانی اطلاعات مالی                            */
/* ================================================= */

Reception.refreshFinancialSummary = function () {

    document.querySelector("#subtotalAmount").value =

        Reception.finance.subtotal;

    document.querySelector("#discountAmount").value =

        Reception.finance.discount;

    document.querySelector("#coverageAmount").value =

        Reception.finance.coverageAmount;

    document.querySelector("#payableAmount").value =

        Reception.finance.payable;

    document.querySelector("#paidAmount").value =

        Reception.finance.paid;

    document.querySelector("#balanceAmount").value =

        Reception.finance.balance;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-048                     */
/* پاکسازی اطلاعات مالی                              */
/* ================================================= */

Reception.resetFinancialData = function () {

    Reception.finance.subtotal = 0;

    Reception.finance.discount = 0;

    Reception.finance.coverageAmount = 0;

    Reception.finance.payable = 0;

    Reception.finance.paid = 0;

    Reception.finance.balance = 0;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-049                     */
/* اعتبارسنجی وضعیت پرداخت                           */
/* ================================================= */

Reception.isInvoiceSettled = function () {

    return (

        Reception.finance.balance <= 0

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-050                     */
/* پایان مدیریت مالی                                 */
/* ================================================= */

/* ==========================================================
   DESCRIPTION :
   مدیریت پرونده سلامت، سوابق سلامت، مدارک و تاریخچه مراجعات
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-JS-051                     */
/* پرونده سلامت                                     */
/* ================================================= */

Reception.healthRecord = {

    current: null,

    records: [],

    create: function (record) {

        this.current = record;

        this.records.push(record);

    },

    update: function (record) {

        this.current = {

            ...this.current,

            ...record

        };

    },

    clear: function () {

        this.current = null;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-052                     */
/* سوابق سلامت                                      */
/* ================================================= */

Reception.healthHistory = {

    list: [],

    add: function (history) {

        this.list.push(history);

    },

    remove: function (historyId) {

        this.list = this.list.filter(

            function (item) {

                return item.id !== historyId;

            }

        );

    },

    find: function (historyId) {

        return this.list.find(

            function (item) {

                return item.id === historyId;

            }

        );

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-053                     */
/* مدارک و پیوست‌ها                                  */
/* ================================================= */

Reception.attachments = {

    list: [],

    add: function (attachment) {

        this.list.push(attachment);

    },

    remove: function (attachmentId) {

        this.list = this.list.filter(

            function (item) {

                return item.id !== attachmentId;

            }

        );

    },

    getAll: function () {

        return this.list;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-054                     */
/* تاریخچه مراجعات                                   */
/* ================================================= */

Reception.visitHistory = {

    list: [],

    add: function (visit) {

        this.list.push(visit);

    },

    latest: function () {

        return this.list.at(-1) || null;

    },

    total: function () {

        return this.list.length;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-055                     */
/* بارگذاری پرونده سلامت                             */
/* ================================================= */

Reception.loadHealthRecord = function (

    healthSeekerId

) {

    return Reception.healthRecord.records.find(

        function (record) {

            return (

                record.healthSeekerId ===

                healthSeekerId

            );

        }

    ) || null;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-056                     */
/* بروزرسانی خلاصه پرونده                            */
/* ================================================= */

Reception.refreshHealthRecordSummary = function () {

    const record =

        Reception.healthRecord.current;

    if (!record) {

        return;

    }

    document.querySelector(

        "#healthRecordNumber"

    ).value =

        record.recordNumber || "";

    document.querySelector(

        "#totalVisits"

    ).value =

        Reception.visitHistory.total();

    document.querySelector(

        "#lastVisit"

    ).value =

        Reception.visitHistory.latest()

        ?.visitDate || "";

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-057                     */
/* بروزرسانی لیست مدارک                              */
/* ================================================= */

Reception.refreshAttachmentList = function () {

    const container =

        document.querySelector(

            "#attachmentList"

        );

    if (!container) {

        return;

    }

    container.innerHTML = "";

    Reception.attachments.list.forEach(

        function (attachment) {

            const item =

                document.createElement("li");

            item.textContent =

                attachment.fileName;

            container.appendChild(item);

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-058                     */
/* بروزرسانی سوابق سلامت                             */
/* ================================================= */

Reception.refreshHealthHistory = function () {

    const container =

        document.querySelector(

            "#healthHistoryTableBody"

        );

    if (!container) {

        return;

    }

    container.innerHTML = "";

    Reception.healthHistory.list.forEach(

        function (history) {

            const row =

                document.createElement("tr");

            row.innerHTML = `

                <td>${history.date}</td>

                <td>${history.title}</td>

                <td>${history.description}</td>

            `;

            container.appendChild(row);

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-059                     */
/* بروزرسانی تاریخچه مراجعات                         */
/* ================================================= */

Reception.refreshVisitHistory = function () {

    const container =

        document.querySelector(

            "#visitHistoryTableBody"

        );

    if (!container) {

        return;

    }

    container.innerHTML = "";

    Reception.visitHistory.list.forEach(

        function (visit) {

            const row =

                document.createElement("tr");

            row.innerHTML = `

                <td>${visit.visitId}</td>

                <td>${visit.visitDate}</td>

                <td>${visit.doctorName}</td>

                <td>${visit.departmentName}</td>

                <td>${visit.status}</td>

            `;

            container.appendChild(row);

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-060                     */
/* پایان مدیریت پرونده سلامت                        */
/* ================================================= */

/* ==========================================================
   DESCRIPTION :
   مدیریت Activity، Timeline، Notification و Alert
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-JS-061                     */
/* مدیریت فعالیت‌های ماژول                           */
/* ================================================= */

Reception.activity = {

    list: [],

    add: function (activity) {

        if (!activity) {

            return null;

        }

        const item = {

            id: activity.id || crypto.randomUUID(),

            type: activity.type || "",

            title: activity.title || "",

            description: activity.description || "",

            timestamp: activity.timestamp || new Date(),

            actor: activity.actor || null

        };

        this.list.push(item);

        Reception.state.activities.push(item);

        return item;

    },

    clear: function () {

        this.list = [];

        Reception.state.activities = [];

    },

    getAll: function () {

        return [...this.list];

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-062                     */
/* مدیریت Timeline                                   */
/* ================================================= */

Reception.timeline = {

    list: [],

    add: function (event) {

        if (!event) {

            return null;

        }

        const item = {

            id: event.id || crypto.randomUUID(),

            type: event.type || "",

            title: event.title || "",

            description: event.description || "",

            timestamp: event.timestamp || new Date(),

            status: event.status || ""

        };

        this.list.push(item);

        Reception.state.timeline.push(item);

        return item;

    },

    clear: function () {

        this.list = [];

        Reception.state.timeline = [];

    },

    getAll: function () {

        return [...this.list];

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-063                     */
/* مدیریت اعلان‌ها                                   */
/* ================================================= */

Reception.notification = {

    list: [],

    add: function (notification) {

        if (!notification) {

            return null;

        }

        const item = {

            id: notification.id || crypto.randomUUID(),

            type: notification.type || "",

            title: notification.title || "",

            message: notification.message || "",

            read: Boolean(notification.read),

            timestamp: notification.timestamp || new Date()

        };

        this.list.push(item);

        Reception.state.notifications.push(item);

        return item;

    },

    markAsRead: function (notificationId) {

        const notification = this.list.find(

            function (item) {

                return item.id === notificationId;

            }

        );

        if (notification) {

            notification.read = true;

        }

    },

    getUnread: function () {

        return this.list.filter(

            function (item) {

                return !item.read;

            }

        );

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-064                     */
/* مدیریت هشدارها                                   */
/* ================================================= */

Reception.alert = {

    list: [],

    add: function (alert) {

        if (!alert) {

            return null;

        }

        const item = {

            id: alert.id || crypto.randomUUID(),

            type: alert.type || "",

            title: alert.title || "",

            message: alert.message || "",

            severity: alert.severity || "",

            timestamp: alert.timestamp || new Date()

        };

        this.list.push(item);

        return item;

    },

    remove: function (alertId) {

        this.list = this.list.filter(

            function (item) {

                return item.id !== alertId;

            }

        );

    },

    clear: function () {

        this.list = [];

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-065                     */
/* بروزرسانی Activity                               */
/* ================================================= */

Reception.refreshActivity = function () {

    const container =

        document.querySelector(

            "#activityTimeline"

        );

    if (!container) {

        return;

    }

    container.innerHTML = "";

    Reception.activity.list.forEach(

        function (activity) {

            const item =

                document.createElement("li");

            item.className = "activity-item";

            item.dataset.activityId =

                activity.id;

            item.innerHTML = `

                <div class="activity-content">

                    <strong>

                        ${activity.title}

                    </strong>

                    <span>

                        ${activity.description}

                    </span>

                    <time>

                        ${activity.timestamp}

                    </time>

                </div>

            `;

            container.appendChild(item);

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-066                     */
/* بروزرسانی Timeline                               */
/* ================================================= */

Reception.refreshTimeline = function () {

    const container =

        document.querySelector(

            "#healthTimeline"

        );

    if (!container) {

        return;

    }

    container.innerHTML = "";

    Reception.timeline.list.forEach(

        function (event) {

            const item =

                document.createElement("div");

            item.className = "timeline-item";

            item.dataset.timelineId =

                event.id;

            item.innerHTML = `

                <div class="timeline-content">

                    <strong>

                        ${event.title}

                    </strong>

                    <span>

                        ${event.description}

                    </span>

                    <time>

                        ${event.timestamp}

                    </time>

                </div>

            `;

            container.appendChild(item);

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-067                     */
/* بروزرسانی اعلان‌ها                               */
/* ================================================= */

Reception.refreshNotifications = function () {

    const container =

        document.querySelector(

            "#notificationList"

        );

    if (!container) {

        return;

    }

    container.innerHTML = "";

    Reception.notification.list.forEach(

        function (notification) {

            const item =

                document.createElement("li");

            item.className =

                "notification-item";

            item.dataset.notificationId =

                notification.id;

            item.innerHTML = `

                <div class="notification-content">

                    <strong>

                        ${notification.title}

                    </strong>

                    <span>

                        ${notification.message}

                    </span>

                </div>

            `;

            container.appendChild(item);

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-068                     */
/* بروزرسانی هشدارها                                */
/* ================================================= */

Reception.refreshAlerts = function () {

    const container =

        document.querySelector(

            "#alertContainer"

        );

    if (!container) {

        return;

    }

    container.innerHTML = "";

    Reception.alert.list.forEach(

        function (alert) {

            const item =

                document.createElement("div");

            item.className = "alert";

            item.dataset.alertId =

                alert.id;

            item.innerHTML = `

                <div class="alert-content">

                    <strong>

                        ${alert.title}

                    </strong>

                    <span>

                        ${alert.message}

                    </span>

                </div>

            `;

            container.appendChild(item);

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-069                     */
/* بروزرسانی شمارنده اعلان‌ها                        */
/* ================================================= */

Reception.refreshNotificationCounter = function () {

    const counter =

        document.querySelector(

            "#notificationCounter"

        );

    if (!counter) {

        return;

    }

    counter.textContent =

        Reception.notification

            .getUnread()

            .length;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-070                     */
/* بروزرسانی تمام رویدادهای نمایشی                   */
/* ================================================= */

Reception.refreshActivityModules = function () {

    Reception.refreshActivity();

    Reception.refreshTimeline();

    Reception.refreshNotifications();

    Reception.refreshAlerts();

    Reception.refreshNotificationCounter();

};

/* ==========================================================
   DESCRIPTION :
   مدیریت Dialog، Modal، Drawer، Context Menu و Template
========================================================== */

/* ================================================= */
/* SECTION ID : RECEPTION-JS-071                     */
/* مدیریت Dialog                                     */
/* ================================================= */

Reception.dialog = {

    open: function (dialogId) {

        const dialog =

            document.querySelector(

                dialogId

            );

        if (!dialog) {

            return false;

        }

        if (typeof dialog.showModal === "function") {

            dialog.showModal();

            return true;

        }

        return false;

    },

    close: function (dialogId) {

        const dialog =

            document.querySelector(

                dialogId

            );

        if (

            !dialog ||

            typeof dialog.close !== "function"

        ) {

            return false;

        }

        dialog.close();

        return true;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-072                     */
/* مدیریت Modal                                      */
/* ================================================= */

Reception.modal = {

    open: function (modalId) {

        const modal =

            document.querySelector(

                modalId

            );

        if (!modal) {

            return false;

        }

        modal.classList.add("active");

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

        modal.classList.remove("active");

        modal.setAttribute(

            "aria-hidden",

            "true"

        );

        return true;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-073                     */
/* مدیریت Drawer                                     */
/* ================================================= */

Reception.drawer = {

    open: function (drawerId) {

        const drawer =

            document.querySelector(

                drawerId

            );

        if (!drawer) {

            return false;

        }

        drawer.classList.add("active");

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

        drawer.classList.remove("active");

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
/* SECTION ID : RECEPTION-JS-074                     */
/* مدیریت Context Menu                               */
/* ================================================= */

Reception.contextMenu = {

    current: null,

    open: function (

        menuId,

        position

    ) {

        const menu =

            document.querySelector(

                menuId

            );

        if (!menu) {

            return false;

        }

        menu.style.top =

            `${position.y}px`;

        menu.style.left =

            `${position.x}px`;

        menu.classList.add("active");

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
/* SECTION ID : RECEPTION-JS-075                     */
/* مدیریت Template ها                                */
/* ================================================= */

Reception.template = {

    render: function (

        templateId,

        data

    ) {

        const template =

            document.querySelector(

                templateId

            );

        if (!template) {

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

        if (data) {

            Object.keys(data).forEach(

                function (key) {

                    container

                        .querySelectorAll(

                            `[data-template-field="${key}"]`

                        )

                        .forEach(

                            function (element) {

                                element.textContent =

                                    data[key];

                            }

                        );

                }

            );

        }

        return container.firstElementChild;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-076                     */
/* درج Template در صفحه                              */
/* ================================================= */

Reception.template.insert = function (

    templateId,

    containerId,

    data

) {

    const container =

        document.querySelector(

            containerId

        );

    if (!container) {

        return false;

    }

    const element =

        Reception.template.render(

            templateId,

            data

        );

    if (!element) {

        return false;

    }

    container.appendChild(

        element

    );

    return true;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-077                     */
/* بستن لایه‌های باز                                 */
/* ================================================= */

Reception.closeOverlays = function () {

    Reception.drawer.closeAll();

    document

        .querySelectorAll(

            ".modal-overlay.active"

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

    Reception.contextMenu.close();

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-078                     */
/* مدیریت کلیک بیرونی                               */
/* ================================================= */

Reception.handleOutsideClick = function (

    event

) {

    if (

        Reception.contextMenu.current &&

        !Reception.contextMenu.current

            .contains(event.target)

    ) {

        Reception.contextMenu.close();

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-079                     */
/* اتصال رویدادهای Overlay                            */
/* ================================================= */

Reception.bindOverlayEvents = function () {

    document.addEventListener(

        "click",

        Reception.handleOutsideClick

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-080                     */
/* پایان مدیریت Overlayها                            */
/* ================================================= */

/* ==========================================================
   DESCRIPTION :
   اتصال رویدادها، توابع کمکی، ابزارهای کاربردی و پایان ماژول
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-JS-081                     */
/* اتصال رویدادهای فرم پذیرش                         */
/* ================================================= */

Reception.bindReceptionEvents = function () {

    if (!Reception.dom.form) {

        return;

    }

    Reception.dom.form.addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            const formData =

                new FormData(

                    Reception.dom.form

                );

            const payload =

                Object.fromEntries(

                    formData.entries()

                );

            Reception.registerReception(

                payload

            );

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-082                     */
/* اتصال رویدادهای جستجو                             */
/* ================================================= */

Reception.bindSearchEvents();


/* ================================================= */
/* SECTION ID : RECEPTION-JS-083                     */
/* اتصال رویدادهای عمومی                             */
/* ================================================= */

Reception.bindGlobalEvents = function () {

    document.addEventListener(

        "keydown",

        function (event) {

            if (

                event.key ===

                "Escape"

            ) {

                Reception.closeOverlays();

            }

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-084                     */
/* توابع کمکی انتخاب عنصر                             */
/* ================================================= */

Reception.helpers = {

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
/* SECTION ID : RECEPTION-JS-085                     */
/* توابع کمکی مقدارها                                */
/* ================================================= */

Reception.helpers.getValue = function (

    selector

) {

    const element =

        Reception.helpers.select(

            selector

        );

    return element

        ? element.value

        : "";

};


Reception.helpers.setValue = function (

    selector,

    value

) {

    const element =

        Reception.helpers.select(

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
/* SECTION ID : RECEPTION-JS-086                     */
/* ابزارهای قالب‌بندی                                */
/* ================================================= */

Reception.utils = {

    formatNumber: function (

        value

    ) {

        return new Intl.NumberFormat(

            "fa-IR"

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

            "fa-IR"

        ).format(

            new Date(value)

        );

    },

    formatTime: function (

        value

    ) {

        if (!value) {

            return "";

        }

        return new Intl.DateTimeFormat(

            "fa-IR",

            {

                hour: "2-digit",

                minute: "2-digit"

            }

        ).format(

            new Date(value)

        );

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-087                     */
/* اعتبارسنجی مقدارها                                */
/* ================================================= */

Reception.utils.isEmpty = function (

    value

) {

    return (

        value === null ||

        value === undefined ||

        String(value).trim() === ""

    );

};


Reception.utils.isPositiveNumber = function (

    value

) {

    return (

        Number.isFinite(

            Number(value)

        ) &&

        Number(value) > 0

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-088                     */
/* مدیریت شناسه داخلی                               */
/* ================================================= */

Reception.utils.createId = function () {

    return crypto.randomUUID();

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-089                     */
/* پاکسازی داده‌های ماژول                            */
/* ================================================= */

Reception.resetModuleState = function () {

    Reception.state.currentHealthSeeker = null;

    Reception.state.currentVisit = null;

    Reception.state.currentQueue = null;

    Reception.state.currentDoctor = null;

    Reception.state.currentDepartment = null;

    Reception.state.currentRoom = null;

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-090                     */
/* راه‌اندازی نهایی رویدادها                          */
/* ================================================= */

Reception.bindEvents = function () {

    Reception.bindReceptionEvents();

    Reception.bindGlobalEvents();

    Reception.bindOverlayEvents();

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-091                     */
/* راه‌اندازی کامل ماژول                            */
/* ================================================= */

Reception.start = function () {

    if (

        Reception.state.initialized

    ) {

        Reception.bindEvents();

        Reception.refreshQueueDashboard();

        Reception.refreshActivityModules();

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-JS-092                     */
/* تکمیل راه‌اندازی ماژول                            */
/* ================================================= */

document.addEventListener(

    "DOMContentLoaded",

    function () {

        Reception.start();

    }

);


/* ================================================= */
/* SECTION ID : RECEPTION-JS-999                     */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */
