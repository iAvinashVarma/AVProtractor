// tslint:disable-next-line:max-line-length
import { browser, by, element, ElementArrayFinder, ElementFinder, protractor, ProtractorExpectedConditions } from "protractor";

export class Action {
    public static ExpectedCondition: ProtractorExpectedConditions = protractor.ExpectedConditions;

    public static Click(actionLocator: string, logname: string): void {
        const elemMenu: ElementFinder = element(by.xpath(actionLocator));
        browser.wait(this.ExpectedCondition.presenceOf(elemMenu), 5000).then(() => {
            elemMenu.click().then(() => {
                // console.log(`Clicked ${logname}`);
            }, () => {
                // console.log(`Issue while clicking ${logname}`);
            });
        }, () => {
            // console.log(`Issue while presence of locator ${actionLocator}`);
        });
    }

    public static DropDown(xpath: string, logname: string): void {
        const elem: ElementFinder = element(by.xpath(xpath));

        browser.wait(this.ExpectedCondition.presenceOf(elem), 5000).then(() => {
            elem.click().then(() => {
                // console.log(`Clicking Dropdown ${logname}`);
            }, () => {
                // console.log(`Issue while clicking ${logname}`);
            });
        }, () => {
            // console.log(`Issue while finding ${xpath}`);
        });
    }

    public static ModelSendKeys(locator: string, modelClick: string, value: string): void {
        const elemModel: ElementFinder = element(by.model(locator));

        browser.wait(this.ExpectedCondition.presenceOf(elemModel), 5000).then(() => {
            elemModel.sendKeys(value).then(() => {
                // console.log(`Entered text ${modelClick}`);
            }, () => {
                // console.log(`Issue while sending ${modelClick}`);
            });
        }, () => {
            // console.log(`Issue while finding locator ${locator}`);
        });
    }

    public static MouseHoverClick(mousePoint: string, locator: string): void {
        const elem: ElementFinder = element(by.xpath(mousePoint));

        browser.wait(this.ExpectedCondition.presenceOf(elem), 5000).then(() => {
            browser.actions().mouseMove(elem).click().perform().then(() => {
                // console.log(`Click Mouse ${locator}`);
            }, () => {
                // console.log(`Issue while clicking ${locator}`);
            });
        }, () => {
            // console.log(`Issue while finding ${mousePoint}`);
        });
    }

    public static MouseOver(mousePoint: string, locator: string): void {
        const elem: ElementFinder = element(by.xpath(mousePoint));

        browser.wait(this.ExpectedCondition.presenceOf(elem), 5000).then(() => {
            browser.actions().mouseMove(elem).perform().then(() => {
                // console.log(`Highlight MouseOver ${locator}`);
            }, () => {
                // console.log(`Issue while highlight ${locator}`);
            });
        }, () => {
            // console.log(`Issue while finding mouseover ${mousePoint}`);
        });
    }

    public static SendKeys(actionLocator: string, logname: string, value: string): void {
        const elem: ElementFinder = element(by.xpath(actionLocator));

        browser.wait(this.ExpectedCondition.presenceOf(elem), 5000).then(() => {
            elem.sendKeys(value).then(() => {
                // console.log(`Entered text in ${logname}`);
            }, (err) => {
                // console.log(`Issue while sending keys at ${actionLocator}`);
            });
        }, () => {
            // console.log(`Issue while presence of locator ${actionLocator}`);
        });
    }

    public static ValidateText(locator: string, expected?: string, logname?: string): void {
        const elem: ElementFinder = element(by.xpath(locator));
        elem.getText().then((text) => {
            expect(text).toBe(expected);
        });
    }

    public static GetDropDownList(optionsDescriptor: string): ElementArrayFinder {
        return element.all(by.options(optionsDescriptor));
    }
}
