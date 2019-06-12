"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class spends {
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
exports.spends = spends;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbmRzUGFnZS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2Uvc3BlbmRzUGFnZS5wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzRDtBQUV0RCxNQUFhLE1BQU07SUFTZjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNKO0FBbEJELHdCQWtCQyJ9