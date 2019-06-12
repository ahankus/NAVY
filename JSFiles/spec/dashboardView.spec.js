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
const loginPage_po_1 = require("../page/loginPage.po");
describe('NAVY app test', function () {
    it('Should login to the app and navigate to Dashboard view', () => __awaiter(this, void 0, void 0, function* () {
        let navsupLogin = new loginPage_po_1.login();
        yield protractor_1.browser.get('http://10.16.34.112:4200/login');
        yield navsupLogin.email.sendKeys('andrzej');
        yield navsupLogin.password.sendKeys('andrzej');
        yield navsupLogin.loginButton.click();
        yield expect(protractor_1.browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/dashboard');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkVmlldy5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlYy9kYXNoYm9hcmRWaWV3LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQyx1REFBMkM7QUFHM0MsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUV0QixFQUFFLENBQUMsd0RBQXdELEVBQUUsR0FBUyxFQUFFO1FBRXBFLElBQUksV0FBVyxHQUFHLElBQUksb0JBQUssRUFBRSxDQUFDO1FBQzlCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRCxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsTUFBTSxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLE1BQU0sTUFBTSxDQUFDLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUV4RixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUEifQ==