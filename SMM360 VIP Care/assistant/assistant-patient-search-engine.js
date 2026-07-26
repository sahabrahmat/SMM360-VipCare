/* ==========================================================
   SMM360 VIP Care
   PATIENT SEARCH ENGINE
   Version : 0.0.1
========================================================== */

/* ==========================================================
   SEARCH BY ID
========================================================== */

function searchPatientByID(patientID){

   if(!patientID){

       return null;

   }

   return Patients.find(

       patient=>patient.id===patientID

   );

}

/* ==========================================================
  SEARCH BY NAME
========================================================== */

function searchPatientByName(fullName){

   if(!fullName){

       return [];

   }

   const keyword=fullName.trim().toLowerCase();

   return Patients.filter(

       patient=>

       (patient.fullName||"")

       .toLowerCase()

       .includes(keyword)

   );

}

/* ==========================================================
  SEARCH BY MOBILE
========================================================== */

function searchPatientByMobile(mobile){

   if(!mobile){

       return [];

   }

   return Patients.filter(

       patient=>

       (patient.mobile||"")

       .includes(mobile)

   );

}

/* ==========================================================
  SEARCH BY NATIONAL CODE
========================================================== */

function searchPatientByNationalCode(nationalCode){

   if(!nationalCode){

       return [];

   }

   return Patients.filter(

       patient=>

       (patient.nationalCode||"")

       .includes(nationalCode)

   );

}

/* ==========================================================
  ADVANCED SEARCH
========================================================== */

function advancedPatientSearch(filters){

   return Patients.filter(patient=>{

       if(

           filters.id &&

           patient.id!==filters.id

       ){

           return false;

       }

       if(

           filters.fullName &&

           !(patient.fullName||"")

           .includes(filters.fullName)

       ){

           return false;

       }

       if(

           filters.mobile &&

           !(patient.mobile||"")

           .includes(filters.mobile)

       ){

           return false;

       }

       if(

           filters.nationalCode &&

           !(patient.nationalCode||"")

           .includes(filters.nationalCode)

       ){

           return false;

       }

       if(

           filters.gender &&

           patient.gender!==filters.gender

       ){

           return false;

       }

       return true;

   });

}

/* ==========================================================
  GLOBAL SEARCH
========================================================== */

function searchPatient(keyword){

   if(!keyword){

       return [];

   }

   keyword=keyword.toString().trim().toLowerCase();

   return Patients.filter(patient=>

       (patient.id||"")

       .toLowerCase()

       .includes(keyword)

       ||

       (patient.fullName||"")

       .toLowerCase()

       .includes(keyword)

       ||

       (patient.mobile||"")

       .includes(keyword)

       ||

       (patient.nationalCode||"")

       .includes(keyword)

   );

}

/* ==========================================================
  END OF FILE
========================================================== */