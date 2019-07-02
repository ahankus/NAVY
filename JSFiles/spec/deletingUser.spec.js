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
const adminPage_po_1 = require("../page/adminPage.po");
describe('NAVY app test', function () {
    it('Should delete a user from Administration', () => __awaiter(this, void 0, void 0, function* () {
        let deleting = new adminPage_po_1.admin();
        yield deleting.adminButton.click();
        var red = protractor_1.element.all(protractor_1.by.css("input[name='text1']")).count();
        yield deleting.deleteButton.click();
        var red1 = protractor_1.element.all(protractor_1.by.css("input[name='text1']")).count();
        yield expect(red).not.toBe(red1);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRpbmdVc2VyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjL2RlbGV0aW5nVXNlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFDaEQsdURBQTJDO0FBSzNDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFHdEIsRUFBRSxDQUFDLDBDQUEwQyxFQUFFLEdBQVMsRUFBRTtRQUV0RCxJQUFLLFFBQVEsR0FBRyxJQUFJLG9CQUFLLEVBQUUsQ0FBQztRQUU1QixNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsSUFBSSxHQUFHLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHN0QsTUFBTSxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRzlELE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUlOLENBQUMsQ0FBQyxDQUFDIn0=