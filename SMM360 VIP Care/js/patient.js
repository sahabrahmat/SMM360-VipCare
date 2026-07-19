// ===============================
// SMM360 VIP Care
// Patient Module
// Version 1
// ===============================

let patientCounter = 1;

window.onload = function () {

    generatePatientID();

    fillDateTime();

};

function generatePatientID() {

    const now = new Date();

    const shamsi = now.toLocaleDateString("fa-IR").split("/");

    const year = shamsi[0].slice(-2);

    const month = shamsi[1].padStart(2, "0");

    const number = String(patientCounter).padStart(3, "0");

    document.getElementById("patientID").value =
        `SMM360-${year}-${month}-${number}`;

}

function fillDateTime() {

    const now = new Date();

    document.getElementById("registerDate").value =
        now.toLocaleDateString("fa-IR");

    document.getElementById("registerTime").value =
        now.toLocaleTimeString("fa-IR");

}

document.getElementById("patientForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const patient = {

        patientID: document.getElementById("patientID").value,

        registerDate: document.getElementById("registerDate").value,

        registerTime: document.getElementById("registerTime").value,

        firstName: document.getElementById("firstName").value,

        lastName: document.getElementById("lastName").value,

        gender: document.getElementById("gender").value,

        birthDate: document.getElementById("birthDate").value,

        mobile: document.getElementById("mobile").value

    };

    console.log(patient);

    alert("سلامتجو با موفقیت ثبت شد.");

});