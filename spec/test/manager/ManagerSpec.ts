import { Account } from "../../page/Account";
import { BankManager } from "../../page/BankManager";
import { Customer } from "../../page/Customer";
import { Home } from "../../page/Home";
import { IUser } from "../../page/IUser";
import { Currency } from "../../utils/Currency";

describe("Manager Test Suite.", () => {
    const user: IUser[] = require("../../data/users.json");
    const home: Home = new Home();
    const bankManager: BankManager = new BankManager();
    const customer: Customer = new Customer();
    const account: Account = new Account();
    const userOne: IUser = user[0];

    it(`Open Browser.`, () => {
        home.MaximizeBrowser();
        home.OpenLink();
    });

    it(`Home Page Title Check.`, () => {
        home.TitleCheck();
    });

    it(`Manager Login - MouseHover.`, () => {
        bankManager.LoginHover();
    });

    it(`Click Bank Manager Login to add customer.`, () => {
        bankManager.LoginHoverClick();
    });

    it(`Click Add Customer.`, () => {
        customer.AddCustomer();
    });

    it(`Enter First Name - ${userOne.firstName}.`, () => {
        customer.EnterFirstName(userOne.firstName);
    });

    it(`Enter Last Name - ${userOne.lastName}`, () => {
        customer.EnterLastName(userOne.lastName);
    });

    it(`Enter Last Name - ${userOne.code}.`, () => {
        customer.EnterZipCode(userOne.code);
    });

    it(`Click Add Customer Details.`, () => {
        customer.AddCustomerDetails();
        home.AcceptAlert();
    });

    it(`Click Home Button after creating customer.`, () => {
        home.HomeButton();
    });

    it(`Click Bank Manager Login Button to Open Account.`, () => {
        bankManager.Login();
    });

    it(`Click Open Account.`, () => {
        account.OpenAccount();
    });

    it(`Select Customer Name.`, () => {
        account.SelectCustomer(`${userOne.firstName} ${userOne.lastName}`);
    });

    it(`Select Currency. - ${userOne.currency[0]}.`, () => {
        account.SelectCurrency(userOne.currency[0]);
    });

    it(`Click to Process Account - ${userOne.currency[0]}.`, () => {
        account.ProcessAccount();
        home.AcceptAlert();
    });

    it(`Click Open Account.`, () => {
        account.OpenAccount();
    });

    it(`Select Customer Name.`, () => {
        account.SelectCustomer(`${userOne.firstName} ${userOne.lastName}`);
    });

    it(`Select Currency - ${userOne.currency[1]}.`, () => {
        account.SelectCurrency(userOne.currency[1]);
    });

    it(`Click to Process Account - ${userOne.currency[1]}.`, () => {
        account.ProcessAccount();
        home.AcceptAlert();
    });

    it(`Click Open Account.`, () => {
        account.OpenAccount();
    });

    it(`Select Customer Name.`, () => {
        account.SelectCustomer(`${userOne.firstName} ${userOne.lastName}`);
    });

    it(`Select Currency - ${userOne.currency[2]}.`, () => {
        account.SelectCurrency(userOne.currency[2]);
    });

    it(`Click to Process Account - ${userOne.currency[2]}.`, () => {
        account.ProcessAccount();
        home.AcceptAlert();
    });

    it(`Click Home Button after opening account to customer.`, () => {
        home.HomeButton();
    });

    it(`Click Bank Manager Login Button to Open Account.`, () => {
        bankManager.Login();
    });

    it(`Click to check customers list.`, () => {
        customer.SelectCustomers();
    });

    it(`Searching customer from the list.`, () => {
        customer.Search(userOne.code.toString());
    });

    it(`Deleting a Customer.`, () => {
        customer.Delete(userOne.code.toString());
    });

    it(`After completing process return to the home page.`, () => {
        home.HomeButton();
    });
});
