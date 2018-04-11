import { Action } from "../utils/Action";
import { Locator } from "../utils/Locator";

export class BankManager {
    public LoginHover(): void {
        Action.MouseOver(Locator.GetContainsXPath("button", "Bank Manager Login"), "Mouse Hover Bank Manager Login.");
    }

    public Login(): void {
        Action.Click(Locator.GetContainsXPath("button", "Bank Manager Login"), "Click Bank Manager Login.");
    }

    public LoginHoverClick(): void {
        Action.MouseHoverClick(Locator.GetContainsXPath("button", "Bank Manager"), "Clicking Manager Login Button.");
    }

    public MouseOverClickManagerButton(): void {
        Action.Click(Locator.GetContainsXPath("button", "Add Customer"), "Clicking Manager Button After Mouse Over.");
    }

    public ClickCustomer(type?: string): void {
        Action.Click(Locator.GetXPath("button", "type", "submit"), "Clicking Customer.");
    }
}
