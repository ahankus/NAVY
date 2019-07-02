import {ElementFinder, element, by, ElementArrayFinder} from "protractor";

export class admin {
    adminButton: ElementFinder;
    newUserButton: ElementFinder;
    userAdmin: ElementFinder;
    auditMng: ElementFinder;
    expenseMng: ElementFinder;
    dashAccess: ElementFinder;
    activeBtn: ElementFinder;
    defaultSite: ElementFinder;
    firstName: ElementFinder;
    lastName: ElementFinder;
    loginName: ElementFinder;
    psswd:ElementFinder;
    addButton: ElementFinder;
    deleteButton: ElementFinder;
    saveButton: ElementFinder;
    userEditAdmin:ElementFinder;
    expenseEditMng: ElementFinder;
    userEditDash: ElementFinder;
    


   
    constructor() {
       this.adminButton = element(by.id('menuItem#ADMINISTRATION'));
       this.newUserButton = element(by.buttonText('New User'));
       this.userAdmin = element(by.css("label[for='newUserAdministrationSwitch']")).element(by.css("span[data-on='On']"));
       this.auditMng = element(by.css("label[for='newAuditManagementSwitch']")).element(by.css("span[data-on='On']"));
       this.expenseMng = element(by.css("label[for='newExpenseManagementSwitch']")).element(by.css("span[data-on='On']"));
       this.dashAccess = element(by.css("label[for='newDashboardAccessSwitch']")).element(by.css("span[data-on='On']"));
       this.activeBtn = element(by.css("label[for='newIsActiveSwitch']")).element(by.css("span[data-on='On']"));
       this.defaultSite = element(by.css("optgroup[label='ASIA']")).element(by.css("option[value='CHINHAE']"));
       this.firstName = element.all(by.css("input[name='text1']")).first();
       this.lastName = element.all(by.css("input[name='text1']")).get(1);
       this.loginName = element.all(by.css("input[name='text1']")).get(2);
       this.psswd = element.all(by.css("input[name='text1']")).get(3);
       this.addButton = element(by.buttonText('Add'));
       this.deleteButton = element(by.buttonText('Delete'));
       this.saveButton = element(by.buttonText('Save All Changes'));
       this.userEditAdmin = element(by.css("label[for='userAdministrationSwitch6148']")).element(by.css("span[class='switch-handle']"));
       this.expenseEditMng = element(by.css("label[for='expenseManagementSwitch6148']")).element(by.css("span[class='switch-handle']"));
       this.userEditDash = element(by.css("label[for='dashboardAccessSwitch6148']")).element(by.css("span[class='switch-handle']"));
      
    }


}

