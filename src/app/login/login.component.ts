import {Component, OnInit} from "@angular/core";
import { type, userInfo } from "os";

class User {
    username: string;
    password: string;

    constructor() {
        this.username = "";
        this.password = "";
    }
}

@Component({
    selector: "gr-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent {
    user: User;
    errorMessage: string;

    constructor() {
        this.user = new User();  
        this.errorMessage = null;   
    }

    login() {
        this.errorMessage = null;
        console.log("Entered user name is " + this.user.username + " and password is " + this.user.password);
        console.log("Typeof entered userbane is " + typeof(this.user.username));
        if (this.user.username === "" || this.user.password === "") {
            this.errorMessage = "Kindly enter username and password";
            return;
        } else if (this.user.username === "rumi" && this.user.password === "hello123") {
            alert("Verified successfully");
        } else {
            this.errorMessage = "Enter correct credentials";
        }

    }
}
