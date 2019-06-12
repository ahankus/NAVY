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
    it('Should open Administration view in the Chrome', () => __awaiter(this, void 0, void 0, function* () {
        let Administration = new adminPage_po_1.admin();
        yield protractor_1.browser.get('http://10.16.34.112:4200/login');
        yield Administration.email.sendKeys('andrzej');
        yield Administration.password.sendKeys('andrzej');
        yield Administration.loginButton.click();
        protractor_1.browser.driver.manage().window().maximize();
        yield Administration.adminButton.click();
        yield expect(protractor_1.browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/admin');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5WaWV3LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjL2FkbWluVmlldy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFDaEQsdURBQTJDO0FBSTNDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFHdEIsRUFBRSxDQUFDLCtDQUErQyxFQUFFLEdBQVMsRUFBRTtRQUUzRCxJQUFLLGNBQWMsR0FBRyxJQUFJLG9CQUFLLEVBQUUsQ0FBQztRQUNsQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxNQUFNLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxNQUFNLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFekMsTUFBTSxNQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRXBGLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9