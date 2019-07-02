"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class audit {
    constructor() {
        this.auditButton = protractor_1.element(protractor_1.by.id('menuItem#AUDITS'));
        this.newAudit = protractor_1.element(protractor_1.by.buttonText('New Audit'));
        this.deleteAudit = protractor_1.element(protractor_1.by.buttonText('Delete'));
        this.grade = protractor_1.element(protractor_1.by.name('newAuditGrade'));
        this.site = protractor_1.element(protractor_1.by.css("optgroup[label='ASIA']")).element(protractor_1.by.css("option[value='ATSUGI']"));
        this.add = protractor_1.element(protractor_1.by.buttonText('Add'));
    }
}
exports.audit = audit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXRQYWdlLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZS9hdWRpdFBhZ2UucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEU7QUFFMUUsTUFBYSxLQUFLO0lBU2Q7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsR0FBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBSzdDLENBQUM7Q0FDSjtBQXJCRCxzQkFxQkMifQ==