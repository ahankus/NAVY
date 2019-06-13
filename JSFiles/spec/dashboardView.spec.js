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
    it('Should login to the app and navigate to Dashboard view', () => __awaiter(this, void 0, void 0, function* () {
        let dashView = new dashboardPage_po_1.dashboard();
        yield dashView.dashButton.click();
        yield expect(protractor_1.browser.getCurrentUrl()).toEqual('http://10.16.34.112:4200/dashboard');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkVmlldy5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlYy9kYXNoYm9hcmRWaWV3LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQywrREFBbUQ7QUFFbkQsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUV0QixFQUFFLENBQUMsd0RBQXdELEVBQUUsR0FBUyxFQUFFO1FBRXBFLElBQUksUUFBUSxHQUFHLElBQUksNEJBQVMsRUFBRSxDQUFDO1FBRS9CLE1BQU0sUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFFeEYsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFBIn0=