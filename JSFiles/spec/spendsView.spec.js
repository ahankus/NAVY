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
const spendsPage_po_1 = require("../page/spendsPage.po");
describe('NAVY app test', function () {
    it('Should open Spends view in the Chrome', () => __awaiter(this, void 0, void 0, function* () {
        let Spendview = new spendsPage_po_1.spends();
        yield protractor_1.browser.get('http://10.16.34.112:4200/login');
        yield Spendview.email.sendKeys('andrzej');
        yield Spendview.password.sendKeys('andrzej');
        yield Spendview.loginButton.click();
        protractor_1.browser.driver.manage().window().maximize();
        yield Spendview.spendsButton.click();
        yield expect(protractor_1.browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/spend');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbmRzVmlldy5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlYy9zcGVuZHNWaWV3LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFnRDtBQUNoRCx5REFBNkM7QUFJN0MsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUd0QixFQUFFLENBQUMsdUNBQXVDLEVBQUUsR0FBUyxFQUFFO1FBRW5ELElBQUssU0FBUyxHQUFHLElBQUksc0JBQU0sRUFBRSxDQUFDO1FBQzlCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRCxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLE1BQU0sU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVyQyxNQUFNLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFFcEYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIn0=