import { DisplayProcessor, SpecReporter } from "jasmine-spec-reporter";
import { Config } from "protractor";
import { HtmlReporter } from "protractor-beautiful-reporter";
import SuiteInfo = jasmine.SuiteInfo;

// import { SpecReporter } from "protractor-beautiful-reporter";
export class CustomProcessor extends DisplayProcessor {
    public displayJasmineStarted(info: SuiteInfo, log: string): string {
        return `TypeScript ${log}`;
    }
}

export let config: Config = {
    capabilities: {
        browserName: "chrome",
    },
    framework: "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ["../spec/test/*/*Spec.js"],

    // you could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    onPrepare: () => {
        jasmine.getEnv().clearReporters();
        jasmine.getEnv().addReporter(new SpecReporter({
            customProcessors: [CustomProcessor],
        }));
    },

};
