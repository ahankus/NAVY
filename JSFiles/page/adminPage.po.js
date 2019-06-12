"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class admin {
    constructor() {
        this.email = protractor_1.element(protractor_1.by.id('inputEmail'));
        this.password = protractor_1.element(protractor_1.by.id('inputPassword'));
        this.loginButton = protractor_1.element(protractor_1.by.buttonText('Login'));
        this.logoutButton = protractor_1.element(protractor_1.by.buttonText('Logout'));
        this.auditButton = protractor_1.element(protractor_1.by.id('menuItem#AUDITS'));
        this.spendsButton = protractor_1.element(protractor_1.by.id('menuItem#SPENDS'));
        this.adminButton = protractor_1.element(protractor_1.by.id('menuItem#ADMINISTRATION'));
    }
}
exports.admin = admin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5QYWdlLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZS9hZG1pblBhZ2UucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0Q7QUFFdEQsTUFBYSxLQUFLO0lBU2Q7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FDSjtBQWxCRCxzQkFrQkMifQ==