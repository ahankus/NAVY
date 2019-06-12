"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class login {
    constructor() {
        this.email = protractor_1.element(protractor_1.by.id('inputEmail'));
        this.password = protractor_1.element(protractor_1.by.id('inputPassword'));
        this.loginButton = protractor_1.element(protractor_1.by.buttonText('Login'));
        this.logoutButton = protractor_1.element(protractor_1.by.buttonText('Logout'));
    }
}
exports.login = login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZS9sb2dpblBhZ2UucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0Q7QUFFdEQsTUFBYSxLQUFLO0lBTWQ7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXpELENBQUM7Q0FDSjtBQWJELHNCQWFDIn0=