"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const auditPage_po_1 = require("../page/auditPage.po");
describe('NAVY app test', function () {
    it('Should remove an audit', () => __awaiter(this, void 0, void 0, function* () {
        let removing = new auditPage_po_1.audit();
        yield removing.auditButton.click();
        var grade = protractor_1.element.all(protractor_1.by.name('auditGrade')).count();
        yield removing.deleteAudit.click();
        var newGrade = protractor_1.element.all(protractor_1.by.name('auditGrade')).count();
        yield expect(grade).not.toBe(newGrade);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZpbmdBdWRpdC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlYy9yZW1vdmluZ0F1ZGl0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFnRjtBQUNoRix1REFBMkM7QUFJM0MsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUd0QixFQUFFLENBQUMsd0JBQXdCLEVBQUUsR0FBUyxFQUFFO1FBRXBDLElBQUksUUFBUSxHQUFHLElBQUksb0JBQUssRUFBRSxDQUFDO1FBRTNCLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxJQUFJLEtBQUssR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkQsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLElBQUksUUFBUSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxRCxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBSTNDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9