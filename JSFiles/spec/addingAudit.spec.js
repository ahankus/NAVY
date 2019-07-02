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
    it('Should add a new audit', () => __awaiter(this, void 0, void 0, function* () {
        let managment = new auditPage_po_1.audit();
        yield managment.auditButton.click();
        yield managment.newAudit.click();
        yield managment.grade.sendKeys('Z');
        yield managment.site.click();
        yield managment.add.click();
        var NumberOfAudits = protractor_1.element(protractor_1.by.id('toast-container')).getText();
        yield expect(NumberOfAudits).toContain('Audit has been added correctly');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaW5nQXVkaXQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWMvYWRkaW5nQXVkaXQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWdEO0FBQ2hELHVEQUEyQztBQUkzQyxRQUFRLENBQUMsZUFBZSxFQUFFO0lBR3RCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxHQUFTLEVBQUU7UUFFcEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxvQkFBSyxFQUFFLENBQUM7UUFFNUIsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixNQUFNLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHN0IsSUFBSSxjQUFjLEdBQUksb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVsRSxNQUFNLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUU1RSxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMifQ==