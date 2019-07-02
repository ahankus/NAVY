import {ElementFinder, element, by, ElementArrayFinder} from "protractor";

export class audit {
    auditButton: ElementFinder;
    newAudit: ElementFinder;
    deleteAudit: ElementFinder;
    grade: ElementFinder;
    site: ElementFinder;
    add: ElementFinder;
    

    constructor() {
        this.auditButton = element(by.id('menuItem#AUDITS'));
        this.newAudit = element(by.buttonText('New Audit'));
        this.deleteAudit = element(by.buttonText('Delete'));
        this.grade = element(by.name('newAuditGrade'));
        this.site = element(by.css("optgroup[label='ASIA']")).element(by.css("option[value='ATSUGI']"));
        this.add = element(by.buttonText('Add'));
       



    }
}
