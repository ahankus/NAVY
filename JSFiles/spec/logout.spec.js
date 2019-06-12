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
fdescribe('NAVY app test', function () {
    it('Should login to the app then logout', () => __awaiter(this, void 0, void 0, function* () {
        let navsupLogin = new loginPage_po_1.login();
        yield protractor_1.browser.get('http://10.16.34.112:4200/login');
        yield navsupLogin.email.sendKeys('andrzej');
        yield navsupLogin.password.sendKeys('andrzej');
        yield navsupLogin.loginButton.click();
        yield navsupLogin.logoutButton.click();
        yield expect(protractor_1.browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/login');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjL2xvZ291dC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFDaEQsdURBQTJDO0FBRzNDLFNBQVMsQ0FBQyxlQUFlLEVBQUU7SUFHdkIsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLEdBQVMsRUFBRTtRQUVqRCxJQUFJLFdBQVcsR0FBRyxJQUFJLG9CQUFLLEVBQUUsQ0FBQztRQUM5QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxNQUFNLFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsTUFBTSxNQUFNLENBQUMsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRXBGLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9