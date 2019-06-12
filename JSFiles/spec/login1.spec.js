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
    it('Should open login page in the Chrome and log into the app', () => __awaiter(this, void 0, void 0, function* () {
        let navsupLogin = new loginPage_po_1.login();
        yield protractor_1.browser.get('http://10.16.34.112:4200/login');
        yield navsupLogin.email.sendKeys('andrzej');
        yield navsupLogin.password.sendKeys('andrzej');
        yield navsupLogin.loginButton.click();
        yield expect(protractor_1.browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/dashboard');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4xLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjL2xvZ2luMS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFDaEQsdURBQTJDO0FBRzNDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFHdEIsRUFBRSxDQUFDLDJEQUEyRCxFQUFFLEdBQVMsRUFBRTtRQUV2RSxJQUFJLFdBQVcsR0FBRyxJQUFJLG9CQUFLLEVBQUUsQ0FBQztRQUM5QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxNQUFNLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFFeEYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIn0=