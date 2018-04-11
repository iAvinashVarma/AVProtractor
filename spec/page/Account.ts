import { ElementArrayFinder } from "protractor";
import { Action } from "../utils/Action";
import { Currency } from "../utils/Currency";
import { Locator } from "../utils/Locator";

export class Account {
    public OpenAccount(): void {
        Action.Click(Locator.GetContainsXPath("button", "Open Account"), "Clicking Open Account Button.");
    }

    public SelectCustomer(name?: string): void {
        Action.DropDown(Locator.GetContainsXPath("*", name), "Select Customer Name.");
    }

    public SelectCurrency(currency?: Currency): void {
        Action.DropDown(Locator.GetContainsXPath("*", currency.toString()), "Select Currency.");
    }

    public ProcessAccount(className?: string): void {
        Action.Click(Locator.GetXPath("button", "type", "submit"), "Process Account.");
    }

    public SelectAccount(optionNum?: string): void {
        Action.DropDown(Locator.GetXPath("option", "label", optionNum), "Select Account.");
    }

    public Transactions(): void {
        Action.Click(Locator.GetXPath("button", "ng-click", "transactions()"), "Check Customer Transactions.");
    }

    public Deposit(): void {
        Action.Click(Locator.GetXPath("button", "ng-click", "deposit()"), "Deposit Amount.");
    }

    public EnterAmount(amount: number): void {
        Action.ModelSendKeys("amount", "Enter Amount.", amount.toString());
    }

    public Withdraw(): void {
        Action.Click(Locator.GetXPath("button", "ng-click", "withdrawl()"), "Withdraw Amount");
    }

    public AddAmount(): void {
        Action.Click(Locator.GetXPath("button", "type", "submit"), "AddAmount");
    }

    public BackToTransactions(): void {
        Action.Click(Locator.GetXPath("button", "ng-click", "back()"), "Go back to transactions page.");
    }

    public GetAccounts(): ElementArrayFinder {
        return Action.GetDropDownList("account for account in Accounts");
    }
}
