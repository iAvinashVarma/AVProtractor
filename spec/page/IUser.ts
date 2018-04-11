import { Currency } from "../utils/Currency";

export interface IUser {
    firstName: string;
    lastName: string;
    deposit: number[];
    withdraw: number[];
    code: number;
    currency: Currency[];
    search: string;
}
