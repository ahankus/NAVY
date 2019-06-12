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
const dashboardPage_po_1 = require("../page/dashboardPage.po");
describe('NAVY app test', function () {
    it('Should open Audit view in the Chrome', () => __awaiter(this, void 0, void 0, function* () {
        let homepage = new dashboardPage_po_1.dashboard();
        yield protractor_1.browser.get('http://10.16.34.112:4200/login');
        yield homepage.email.sendKeys('andrzej');
        yield homepage.password.sendKeys('andrzej');
        yield homepage.loginButton.click();
        protractor_1.browser.driver.manage().window().maximize();
        yield homepage.auditButton.click();
        yield expect(protractor_1.browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/audit');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXRWaWV3LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjL2F1ZGl0Vmlldy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFDaEQsK0RBQW1EO0FBSW5ELFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFHdEIsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEdBQVMsRUFBRTtRQUVsRCxJQUFJLFFBQVEsR0FBRyxJQUFJLDRCQUFTLEVBQUUsQ0FBQztRQUMvQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxNQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxNQUFNLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbkMsTUFBTSxNQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRXBGLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9