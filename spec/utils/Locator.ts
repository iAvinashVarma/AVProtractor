export class Locator {
    public static readonly CustomerLoginButtonXPath: string = "/html/body/div[3]/div/div[2]/div/div[1]/div[1]/button";

    public static GetXPath(element: string, attribute: string, value: string) {
        return `//${element}[@${attribute}='${value}']`;
    }

    public static GetContainsXPath(element: string, value: string) {
        return `//${element}[contains(text(),'${value}')]`;
    }
}
