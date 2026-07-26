/* ==========================================================
   SMM360 VIP Care
   ENTERPRISE EDITION

   FILE NAME   : informatics-backup.js
   MODULE      : Informatics
   VERSION     : 0.0.1

   AUTHOR      : Dr. Seyed Mehdi Mohammadi
   PROJECT     : SMM360 VIP CARE
   COPYRIGHT   : © SMM360 VIP CARE

   DESCRIPTION :
   مدیریت پشتیبان‌گیری واحد انفورماتیک

========================================================== */


/* ================================================= */
/* SECTION ID : INFORMATICS-BACKUP-001               */
/* BACKUP ENGINE                                     */
/* ================================================= */

const InformaticsBackup={

    lastBackup:null,
    
    backups:[]
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-BACKUP-002               */
    /* CREATE BACKUP                                     */
    /* ================================================= */
    
    InformaticsBackup.create=function(name){
    
    const backup={
    
    id:Date.now(),
    
    name:name,
    
    date:new Date(),
    
    status:"SUCCESS"
    
    };
    
    this.backups.push(backup);
    
    this.lastBackup=backup;
    
    return backup;
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-BACKUP-003               */
    /* GET LAST BACKUP                                   */
    /* ================================================= */
    
    InformaticsBackup.getLast=function(){
    
    return this.lastBackup;
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-BACKUP-004               */
    /* GET ALL BACKUPS                                   */
    /* ================================================= */
    
    InformaticsBackup.getAll=function(){
    
    return this.backups;
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-BACKUP-005               */
    /* DELETE BACKUP                                     */
    /* ================================================= */
    
    InformaticsBackup.remove=function(id){
    
    this.backups=this.backups.filter(
    
    item=>item.id!==id
    
    );
    
    };
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-BACKUP-006               */
    /* EXPORT                                            */
    /* ================================================= */
    
    if(typeof module!=="undefined"){
    
    module.exports=InformaticsBackup;
    
    }
    
    
    /* ================================================= */
    /* SECTION ID : INFORMATICS-BACKUP-999               */
    /* END VERSION : 0.0.1                               */
    /* پایان ماژول                                       */
    /* ================================================= */