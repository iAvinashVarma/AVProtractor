import { $, $$, browser, by, element, ElementFinder, protractor } from "protractor";
import { Action } from "../utils/Action";
import { Locator } from "../utils/Locator";

export class Home {
    private destination: string;

    constructor(destination?: string) {
        this.destination = destination ? destination : "http://www.way2automation.com/angularjs-protractor/banking/";
    }

    public MaximizeBrowser(): void {
        browser.manage().window().maximize();
    }

    public OpenLink(): void {
        browser.get(this.destination);
    }

    public TitleCheck(): void {
        Action.ValidateText(Locator.GetXPath("*", "class", "mainHeading"), "XYZ Bank", "Check Title.");
    }

    public AcceptAlert(): void {
        browser.switchTo().alert().accept();
    }

    public GetAction(): Action {
        return Action;
    }

    public HomeButton(): void {
        Action.Click(Locator.GetXPath("button", "ng-click", "home()"), "Click Home Button.");
    }

    public CustomerLogin(): void {
        Action.Click(Locator.CustomerLoginButtonXPath, "Customer Login.");
    }

    public ManagerLogin(): void {
        Action.Click(Locator.GetContainsXPath("button", "Bank Manager Login"), "Manager Login Button.");
    }

    public Close(): void {
        browser.close();
    }
}
