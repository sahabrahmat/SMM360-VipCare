/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : reception-database.js
   MODULE      : Reception
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   پایگاه داده ماژول پذیرش سلامتجو

========================================================== */

"use strict";


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-001            */
/* فضای نام پایگاه داده                              */
/* ================================================= */

const ReceptionDatabase = {};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-002            */
/* تنظیمات پایگاه داده                               */
/* ================================================= */

ReceptionDatabase.config = {

    databaseName: "SMM360Reception",

    version: "0.0.1",

    module: "Reception",

    autoSave: true,

    autoSaveInterval: 30000,

    maxHistoryItems: 10000,

    enableAudit: true,

    enableCache: true

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-003            */
/* مشخصات Schema                                     */
/* ================================================= */

ReceptionDatabase.schema = {

    healthSeeker: "HealthSeeker",

    healthSession: "HealthSession",

    visit: "Visit",

    queue: "Queue",

    appointment: "Appointment",

    doctor: "Doctor",

    department: "Department",

    room: "Room",

    resource: "Resource",

    coverage: "Coverage",

    invoice: "Invoice",

    payment: "Payment",

    receipt: "Receipt",

    healthRecord: "HealthRecord",

    healthHistory: "HealthHistory",

    attachment: "Attachment",

    visitHistory: "VisitHistory",

    activity: "Activity",

    timeline: "Timeline",

    notification: "Notification",

    audit: "Audit"

};

/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-004            */
/* مجموعه‌های داده                                   */
/* ================================================= */

ReceptionDatabase.collections = {

    healthSeekers: [],

    healthSessions: [],

    visits: [],

    queues: [],

    appointments: [],

    doctors: [],

    departments: [],

    rooms: [],

    resources: [],

    coverages: [],

    invoices: [],

    payments: [],

    receipts: [],

    healthRecords: [],

    healthHistories: [],

    attachments: [],

    visitHistories: [],

    activities: [],

    timelines: [],

    notifications: [],

    audits: []

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-005            */
/* وضعیت پایگاه داده                                 */
/* ================================================= */

ReceptionDatabase.state = {

    initialized: false,

    connected: false,

    loading: false,

    saving: false,

    lastLoadedAt: null,

    lastSavedAt: null

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-006            */
/* حافظه موقت                                        */
/* ================================================= */

ReceptionDatabase.cache = {

    currentHealthSeeker: null,

    currentHealthSession: null,

    currentVisit: null,

    currentDoctor: null,

    currentDepartment: null,

    currentRoom: null,

    currentInvoice: null,

    currentPayment: null,

    currentReceipt: null

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-007            */
/* مقداردهی اولیه پایگاه داده                         */
/* ================================================= */

ReceptionDatabase.initialize = function () {

    ReceptionDatabase.state.initialized = true;

    ReceptionDatabase.state.connected = true;

    ReceptionDatabase.state.lastLoadedAt = new Date();

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-008            */
/* پاکسازی داده‌های موقت                             */
/* ================================================= */

ReceptionDatabase.clearCache = function () {

    Object.keys(

        ReceptionDatabase.cache

    ).forEach(

        function (key) {

            ReceptionDatabase.cache[key] = null;

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-009            */
/* ریست مجموعه‌ها                                    */
/* ================================================= */

ReceptionDatabase.resetCollections = function () {

    Object.keys(

        ReceptionDatabase.collections

    ).forEach(

        function (key) {

            ReceptionDatabase.collections[key] = [];

        }

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-010            */
/* پایان بخش تنظیمات                                 */
/* ================================================= */

/* ==========================================================
   DESCRIPTION :
   مدیریت سلامتجو، شناسه سلامتجو، شناسه ویزیت و جلسات سلامت
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-011            */
/* مجموعه سلامتجویان                                 */
/* ================================================= */

ReceptionDatabase.healthSeekers = {

    insert: function (healthSeeker) {

        ReceptionDatabase.collections.healthSeekers.push(

            healthSeeker

        );

        return healthSeeker;

    },

    update: function (healthSeekerId, data) {

        const record = this.find(

            healthSeekerId

        );

        if (!record) {

            return null;

        }

        Object.assign(

            record,

            data

        );

        return record;

    },

    remove: function (healthSeekerId) {

        ReceptionDatabase.collections.healthSeekers =

            ReceptionDatabase.collections.healthSeekers.filter(

                function (item) {

                    return (

                        item.healthSeekerId !==

                        healthSeekerId

                    );

                }

            );

    },

    find: function (healthSeekerId) {

        return ReceptionDatabase.collections.healthSeekers.find(

            function (item) {

                return (

                    item.healthSeekerId ===

                    healthSeekerId

                );

            }

        ) || null;

    },

    all: function () {

        return ReceptionDatabase.collections.healthSeekers;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-012            */
/* تولید شناسه سلامتجو                              */
/* ================================================= */

ReceptionDatabase.generateHealthSeekerId = function (

    monthlySequence

) {

    const now = new Date();

    const parts =

        new Intl.DateTimeFormat(

            "fa-IR-u-ca-persian",

            {

                year: "2-digit",

                month: "2-digit"

            }

        ).formatToParts(now);

    let year = "";

    let month = "";

    parts.forEach(function (part) {

        if (part.type === "year") {

            year = part.value;

        }

        if (part.type === "month") {

            month = part.value;

        }

    });

    return [

        "SMM360",

        year,

        month,

        String(monthlySequence)

            .padStart(3, "0")

    ].join("-");

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-013            */
/* تولید شناسه ویزیت                                */
/* ================================================= */

ReceptionDatabase.generateVisitId = function (

    visitNumber

) {

    return (

        "V" +

        String(visitNumber)

            .padStart(2, "0")

    );

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-014            */
/* جلسات سلامت                                       */
/* ================================================= */

ReceptionDatabase.healthSessions = {

    insert: function (session) {

        ReceptionDatabase.collections.healthSessions.push(

            session

        );

        return session;

    },

    update: function (sessionId, data) {

        const session =

            this.find(sessionId);

        if (!session) {

            return null;

        }

        Object.assign(

            session,

            data

        );

        return session;

    },

    find: function (sessionId) {

        return ReceptionDatabase.collections.healthSessions.find(

            function (item) {

                return (

                    item.healthSessionId ===

                    sessionId

                );

            }

        ) || null;

    },

    all: function () {

        return ReceptionDatabase.collections.healthSessions;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-015            */
/* مراجعات سلامتجو                                  */
/* ================================================= */

ReceptionDatabase.visits = {

    insert: function (visit) {

        ReceptionDatabase.collections.visits.push(

            visit

        );

        return visit;

    },

    find: function (visitId) {

        return ReceptionDatabase.collections.visits.find(

            function (item) {

                return (

                    item.visitId ===

                    visitId

                );

            }

        ) || null;

    },

    byHealthSeeker: function (

        healthSeekerId

    ) {

        return ReceptionDatabase.collections.visits.filter(

            function (item) {

                return (

                    item.healthSeekerId ===

                    healthSeekerId

                );

            }

        );

    },

    all: function () {

        return ReceptionDatabase.collections.visits;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-016            */
/* پایان مدیریت سلامتجو                             */
/* ================================================= */

/* ==========================================================
    DESCRIPTION :
   مدیریت صف سلامتجویان، نوبت‌ها، پزشکان، بخش‌ها، اتاق‌ها و منابع
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-017            */
/* صف سلامتجویان                                     */
/* ================================================= */

ReceptionDatabase.queue = {

    enqueue: function (queueItem) {

        ReceptionDatabase.collections.queues.push(

            queueItem

        );

        return queueItem;

    },

    dequeue: function () {

        return ReceptionDatabase.collections.queues.shift() || null;

    },

    peek: function () {

        return ReceptionDatabase.collections.queues[0] || null;

    },

    all: function () {

        return ReceptionDatabase.collections.queues;

    },

    clear: function () {

        ReceptionDatabase.collections.queues = [];

    }

};

/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-018            */
/* مدیریت نوبت‌ها                                    */
/* ================================================= */

ReceptionDatabase.appointments = {

    insert: function (appointment) {

        ReceptionDatabase.collections.appointments.push(

            appointment

        );

        return appointment;

    },

    update: function (appointmentId, data) {

        const appointment = this.find(

            appointmentId

        );

        if (!appointment) {

            return null;

        }

        Object.assign(

            appointment,

            data

        );

        return appointment;

    },

    find: function (appointmentId) {

        return ReceptionDatabase.collections.appointments.find(

            function (item) {

                return item.appointmentId === appointmentId;

            }

        ) || null;

    },

    all: function () {

        return ReceptionDatabase.collections.appointments;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-019            */
/* مدیریت پزشکان                                     */
/* ================================================= */

ReceptionDatabase.doctors = {

    insert: function (doctor) {

        ReceptionDatabase.collections.doctors.push(

            doctor

        );

        return doctor;

    },

    find: function (doctorId) {

        return ReceptionDatabase.collections.doctors.find(

            function (item) {

                return item.doctorId === doctorId;

            }

        ) || null;

    },

    all: function () {

        return ReceptionDatabase.collections.doctors;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-020            */
/* مدیریت بخش‌ها                                     */
/* ================================================= */

ReceptionDatabase.departments = {

    insert: function (department) {

        ReceptionDatabase.collections.departments.push(

            department

        );

        return department;

    },

    find: function (departmentId) {

        return ReceptionDatabase.collections.departments.find(

            function (item) {

                return item.departmentId === departmentId;

            }

        ) || null;

    },

    all: function () {

        return ReceptionDatabase.collections.departments;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-021            */
/* مدیریت اتاق‌ها                                    */
/* ================================================= */

ReceptionDatabase.rooms = {

    insert: function (room) {

        ReceptionDatabase.collections.rooms.push(

            room

        );

        return room;

    },

    find: function (roomId) {

        return ReceptionDatabase.collections.rooms.find(

            function (item) {

                return item.roomId === roomId;

            }

        ) || null;

    },

    all: function () {

        return ReceptionDatabase.collections.rooms;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-022            */
/* مدیریت منابع                                      */
/* ================================================= */

ReceptionDatabase.resources = {

    insert: function (resource) {

        ReceptionDatabase.collections.resources.push(

            resource

        );

        return resource;

    },

    allocate: function (resourceId) {

        const resource = this.find(

            resourceId

        );

        if (!resource) {

            return false;

        }

        resource.isAllocated = true;

        return true;

    },

    release: function (resourceId) {

        const resource = this.find(

            resourceId

        );

        if (!resource) {

            return false;

        }

        resource.isAllocated = false;

        return true;

    },

    find: function (resourceId) {

        return ReceptionDatabase.collections.resources.find(

            function (item) {

                return item.resourceId === resourceId;

            }

        ) || null;

    },

    all: function () {

        return ReceptionDatabase.collections.resources;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-023            */
/* پایان مدیریت منابع                                */
/* ================================================= */

/* ==========================================================
   DESCRIPTION :
   مدیریت پرونده سلامت، سوابق سلامت، مدارک و تاریخچه مراجعات
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-024            */
/* پرونده سلامت                                     */
/* ================================================= */

ReceptionDatabase.healthRecords = {

    insert: function (record) {

        ReceptionDatabase.collections.healthRecords.push(
            record
        );

        return record;

    },

    update: function (recordId, data) {

        const record = this.find(recordId);

        if (!record) {

            return null;

        }

        Object.assign(
            record,
            data
        );

        return record;

    },

    find: function (recordId) {

        return ReceptionDatabase.collections.healthRecords.find(

            function (item) {

                return item.healthRecordId === recordId;

            }

        ) || null;

    },

    byHealthSeeker: function (healthSeekerId) {

        return ReceptionDatabase.collections.healthRecords.filter(

            function (item) {

                return item.healthSeekerId === healthSeekerId;

            }

        );

    },

    all: function () {

        return ReceptionDatabase.collections.healthRecords;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-025            */
/* سوابق سلامت                                      */
/* ================================================= */

ReceptionDatabase.healthHistories = {

    insert: function (history) {

        ReceptionDatabase.collections.healthHistories.push(
            history
        );

        return history;

    },

    find: function (historyId) {

        return ReceptionDatabase.collections.healthHistories.find(

            function (item) {

                return item.historyId === historyId;

            }

        ) || null;

    },

    byHealthRecord: function (healthRecordId) {

        return ReceptionDatabase.collections.healthHistories.filter(

            function (item) {

                return item.healthRecordId === healthRecordId;

            }

        );

    },

    all: function () {

        return ReceptionDatabase.collections.healthHistories;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-026            */
/* مدارک و پیوست‌ها                                  */
/* ================================================= */

ReceptionDatabase.attachments = {

    insert: function (attachment) {

        ReceptionDatabase.collections.attachments.push(
            attachment
        );

        return attachment;

    },

    remove: function (attachmentId) {

        ReceptionDatabase.collections.attachments =

            ReceptionDatabase.collections.attachments.filter(

                function (item) {

                    return item.attachmentId !== attachmentId;

                }

            );

    },

    byHealthRecord: function (healthRecordId) {

        return ReceptionDatabase.collections.attachments.filter(

            function (item) {

                return item.healthRecordId === healthRecordId;

            }

        );

    },

    all: function () {

        return ReceptionDatabase.collections.attachments;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-027            */
/* تاریخچه مراجعات                                   */
/* ================================================= */

ReceptionDatabase.visitHistories = {

    insert: function (visitHistory) {

        ReceptionDatabase.collections.visitHistories.push(
            visitHistory
        );

        return visitHistory;

    },

    find: function (visitHistoryId) {

        return ReceptionDatabase.collections.visitHistories.find(

            function (item) {

                return item.visitHistoryId === visitHistoryId;

            }

        ) || null;

    },

    byHealthSeeker: function (healthSeekerId) {

        return ReceptionDatabase.collections.visitHistories.filter(

            function (item) {

                return item.healthSeekerId === healthSeekerId;

            }

        );

    },

    latest: function (healthSeekerId) {

        const visits = this.byHealthSeeker(
            healthSeekerId
        );

        return visits.at(-1) || null;

    },

    all: function () {

        return ReceptionDatabase.collections.visitHistories;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-028            */
/* خلاصه پرونده سلامت                               */
/* ================================================= */

ReceptionDatabase.getHealthRecordSummary = function (

    healthSeekerId

) {

    return {

        healthRecord:

            ReceptionDatabase.healthRecords.byHealthSeeker(
                healthSeekerId
            ),

        healthHistory:

            ReceptionDatabase.healthHistories.all().filter(

                function (item) {

                    return item.healthSeekerId === healthSeekerId;

                }

            ),

        attachments:

            ReceptionDatabase.attachments.all().filter(

                function (item) {

                    return item.healthSeekerId === healthSeekerId;

                }

            ),

        visitHistory:

            ReceptionDatabase.visitHistories.byHealthSeeker(
                healthSeekerId
            )

    };

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-029            */
/* پاکسازی پرونده سلامت                             */
/* ================================================= */

ReceptionDatabase.clearHealthRecord = function (

    healthRecordId

) {

    ReceptionDatabase.collections.attachments =

        ReceptionDatabase.collections.attachments.filter(

            function (item) {

                return item.healthRecordId !== healthRecordId;

            }

        );

    ReceptionDatabase.collections.healthHistories =

        ReceptionDatabase.collections.healthHistories.filter(

            function (item) {

                return item.healthRecordId !== healthRecordId;

            }

        );

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-030            */
/* پایان مدیریت پرونده سلامت                        */
/* ================================================= */

/* ==========================================================
   DESCRIPTION :
   مدیریت مالی، پوشش خدمات سلامت، پرداخت، صورتحساب و رسید
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-031            */
/* پوشش خدمات سلامت                                  */
/* ================================================= */

ReceptionDatabase.coverages = {

    insert: function (coverage) {

        ReceptionDatabase.collections.coverages.push(
            coverage
        );

        return coverage;

    },

    update: function (coverageId, data) {

        const coverage = this.find(
            coverageId
        );

        if (!coverage) {

            return null;

        }

        Object.assign(
            coverage,
            data
        );

        return coverage;

    },

    find: function (coverageId) {

        return ReceptionDatabase.collections.coverages.find(

            function (item) {

                return item.coverageId === coverageId;

            }

        ) || null;

    },

    all: function () {

        return ReceptionDatabase.collections.coverages;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-032            */
/* صورتحساب‌ها                                       */
/* ================================================= */

ReceptionDatabase.invoices = {

    insert: function (invoice) {

        ReceptionDatabase.collections.invoices.push(
            invoice
        );

        return invoice;

    },

    update: function (invoiceId, data) {

        const invoice = this.find(
            invoiceId
        );

        if (!invoice) {

            return null;

        }

        Object.assign(
            invoice,
            data
        );

        return invoice;

    },

    find: function (invoiceId) {

        return ReceptionDatabase.collections.invoices.find(

            function (item) {

                return item.invoiceId === invoiceId;

            }

        ) || null;

    },

    byHealthSeeker: function (healthSeekerId) {

        return ReceptionDatabase.collections.invoices.filter(

            function (item) {

                return item.healthSeekerId === healthSeekerId;

            }

        );

    },

    all: function () {

        return ReceptionDatabase.collections.invoices;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-033            */
/* پرداخت‌ها                                         */
/* ================================================= */

ReceptionDatabase.payments = {

    insert: function (payment) {

        ReceptionDatabase.collections.payments.push(
            payment
        );

        return payment;

    },

    find: function (paymentId) {

        return ReceptionDatabase.collections.payments.find(

            function (item) {

                return item.paymentId === paymentId;

            }

        ) || null;

    },

    byInvoice: function (invoiceId) {

        return ReceptionDatabase.collections.payments.filter(

            function (item) {

                return item.invoiceId === invoiceId;

            }

        );

    },

    all: function () {

        return ReceptionDatabase.collections.payments;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-034            */
/* رسیدها                                            */
/* ================================================= */

ReceptionDatabase.receipts = {

    insert: function (receipt) {

        ReceptionDatabase.collections.receipts.push(
            receipt
        );

        return receipt;

    },

    find: function (receiptId) {

        return ReceptionDatabase.collections.receipts.find(

            function (item) {

                return item.receiptId === receiptId;

            }

        ) || null;

    },

    byPayment: function (paymentId) {

        return ReceptionDatabase.collections.receipts.filter(

            function (item) {

                return item.paymentId === paymentId;

            }

        );

    },

    all: function () {

        return ReceptionDatabase.collections.receipts;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-035            */
/* خلاصه مالی سلامتجو                                */
/* ================================================= */

ReceptionDatabase.getFinancialSummary = function (

    healthSeekerId

) {

    return {

        coverages:

            ReceptionDatabase.coverages.byHealthSeeker
                ? ReceptionDatabase.coverages.byHealthSeeker(healthSeekerId)
                : [],

        invoices:

            ReceptionDatabase.invoices.byHealthSeeker(
                healthSeekerId
            ),

        payments:

            ReceptionDatabase.collections.payments.filter(

                function (item) {

                    return item.healthSeekerId === healthSeekerId;

                }

            ),

        receipts:

            ReceptionDatabase.collections.receipts.filter(

                function (item) {

                    return item.healthSeekerId === healthSeekerId;

                }

            )

    };

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-036            */
/* پایان مدیریت مالی                                 */
/* ================================================= */

/* ==========================================================
   DESCRIPTION :
   مدیریت Audit، Activity، Timeline و Notification
========================================================== */


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-037            */
/* ثبت رویدادهای Audit                              */
/* ================================================= */

ReceptionDatabase.audit = {

    insert: function (audit) {

        ReceptionDatabase.collections.audits.push(
            audit
        );

        return audit;

    },

    find: function (auditId) {

        return ReceptionDatabase.collections.audits.find(

            function (item) {

                return item.auditId === auditId;

            }

        ) || null;

    },

    all: function () {

        return ReceptionDatabase.collections.audits;

    },

    clear: function () {

        ReceptionDatabase.collections.audits = [];

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-038            */
/* مدیریت Activity                                  */
/* ================================================= */

ReceptionDatabase.activities = {

    insert: function (activity) {

        ReceptionDatabase.collections.activities.push(
            activity
        );

        return activity;

    },

    byHealthSeeker: function (healthSeekerId) {

        return ReceptionDatabase.collections.activities.filter(

            function (item) {

                return item.healthSeekerId === healthSeekerId;

            }

        );

    },

    all: function () {

        return ReceptionDatabase.collections.activities;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-039            */
/* مدیریت Timeline                                  */
/* ================================================= */

ReceptionDatabase.timelines = {

    insert: function (timeline) {

        ReceptionDatabase.collections.timelines.push(
            timeline
        );

        return timeline;

    },

    byHealthSeeker: function (healthSeekerId) {

        return ReceptionDatabase.collections.timelines.filter(

            function (item) {

                return item.healthSeekerId === healthSeekerId;

            }

        );

    },

    latest: function (healthSeekerId) {

        const records = this.byHealthSeeker(
            healthSeekerId
        );

        return records.at(-1) || null;

    },

    all: function () {

        return ReceptionDatabase.collections.timelines;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-040            */
/* مدیریت Notification                              */
/* ================================================= */

ReceptionDatabase.notifications = {

    insert: function (notification) {

        ReceptionDatabase.collections.notifications.push(
            notification
        );

        return notification;

    },

    unread: function () {

        return ReceptionDatabase.collections.notifications.filter(

            function (item) {

                return item.isRead === false;

            }

        );

    },

    markAsRead: function (notificationId) {

        const notification = ReceptionDatabase.collections.notifications.find(

            function (item) {

                return item.notificationId === notificationId;

            }

        );

        if (notification) {

            notification.isRead = true;

        }

    },

    all: function () {

        return ReceptionDatabase.collections.notifications;

    }

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-041            */
/* خلاصه عملیاتی                                     */
/* ================================================= */

ReceptionDatabase.getOperationalSummary = function () {

    return {

        totalHealthSeekers:

            ReceptionDatabase.collections.healthSeekers.length,

        totalHealthSessions:

            ReceptionDatabase.collections.healthSessions.length,

        totalQueue:

            ReceptionDatabase.collections.queues.length,

        totalActivities:

            ReceptionDatabase.collections.activities.length,

        totalNotifications:

            ReceptionDatabase.collections.notifications.length,

        totalAuditRecords:

            ReceptionDatabase.collections.audits.length

    };

};


/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-042            */
/* پاکسازی اطلاعات عملیاتی                           */
/* ================================================= */

ReceptionDatabase.clearOperationalData = function () {

    ReceptionDatabase.collections.activities = [];

    ReceptionDatabase.collections.timelines = [];

    ReceptionDatabase.collections.notifications = [];

    ReceptionDatabase.collections.audits = [];

};

/* ================================================= */
/* SECTION ID : RECEPTION-DATABASE-JS-999            */
/* END VERSION : 0.0.1                               */
/* پایان ماژول                                       */
/* ================================================= */