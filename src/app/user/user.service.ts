import { Inject, Injectable } from "@angular/core";
import { User } from "./user.model";


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() {}

    verifyLogin = (user: User) => {
        if (user.username === "" || user.password === "") {
            return {
                error: true,
                msg: "Kindly enter username and password"
            }
        } else if (user.username !== "rumi" || user.password !== "hello123") {
            return {
                error: true,
                msg: "Kindly enter correct credentials"
            }
        } else {
            return {
                error: false,
                msg: "Password correct"
            }
        }

    }
}