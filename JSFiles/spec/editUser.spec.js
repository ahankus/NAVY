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
fdescribe('NAVY app test', function () {
    it('Should edit an existing user', () => __awaiter(this, void 0, void 0, function* () {
        let edit = new adminPage_po_1.admin();
        yield edit.adminButton.click();
        yield edit.userEditAdmin.click();
        yield edit.expenseEditMng.click();
        yield edit.userEditDash.click();
        yield edit.defaultSite.click();
        yield edit.firstName.clear().then(function (input) {
            protractor_1.element.all(protractor_1.by.css("input[name='text1']")).first().sendKeys('ELO');
        });
        yield edit.lastName.clear().then(function (input1) {
            protractor_1.element.all(protractor_1.by.css("input[name='text1']")).get(1).sendKeys('MELO');
            //browser.sleep(3000);
        });
        /*await edit.loginName.clear().then(function (input2){
        element.all(by.css("input[name='text1']")).get(2).sendKeys('MLODZIEZOWY');
        browser.sleep(5000);
        });*/
        yield edit.saveButton.click();
        protractor_1.browser.sleep(3000);
        var result = protractor_1.element.all(protractor_1.by.css("input[name='text1']")).first().getAttribute('value');
        yield expect(result).toBe('ELO');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdFVzZXIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWMvZWRpdFVzZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWdEO0FBQ2hELHVEQUEyQztBQUUzQyxTQUFTLENBQUMsZUFBZSxFQUFFO0lBR3ZCLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxHQUFTLEVBQUU7UUFFMUMsSUFBSyxJQUFJLEdBQUcsSUFBSSxvQkFBSyxFQUFFLENBQUM7UUFFeEIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9CLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUvQixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSztZQUNqRCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkUsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTTtZQUNqRCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLHNCQUFzQjtRQUV0QixDQUFDLENBQUMsQ0FBQztRQUNIOzs7YUFHSztRQUVMLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLE1BQU0sR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFJdEYsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBTXJDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFHTixDQUFDLENBQUMsQ0FBQyJ9