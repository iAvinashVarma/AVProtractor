import { Action } from "../utils/Action";
import { Locator } from "../utils/Locator";

export class Customer {
    public CLogin(): void {
        Action.Click(Locator.CustomerLoginButtonXPath, "Customer Login Button.");
    }

    public AddCustomer(): void {
        Action.Click(Locator.GetContainsXPath("button", "Add Customer"), "First Name in Customer Creation.");
    }

    public EnterFirstName(value: string): void {
        Action.ModelSendKeys("fName", "Entered First Name.", value);
    }

    public EnterLastName(value: string): void {
        Action.SendKeys(Locator.GetXPath("input", "ng-model", "lName"), "Entered Second Name.", value);
    }

    public EnterZipCode(value: number): void {
        Action.SendKeys(Locator.GetXPath("input", "ng-model", "postCd"), "Entered Zip Code.", value.toString());
    }

    public AddCustomerDetails(): void {
        Action.Click(Locator.GetXPath("button", "type", "submit"), "Button Clicked.");
    }

    public SelectCustomers(): void {
        Action.Click(Locator.GetXPath("button", "ng-class", "btnClass3"), "Customer Login Button.");
    }

    public Search(value: string): void {
        Action.SendKeys(Locator.GetXPath("input", "type", "text"), "Entering in search.", value);
    }

    public Delete(value: string): void {
        const elem = `//td[contains(text(),${value})]/following-sibling::td[2]/button`;
        Action.Click(elem, "Deleting Customer.");
    }

    public Login(): void {
        Action.Click(Locator.GetContainsXPath("button", "Login"), "Login Customer.");
    }
}
