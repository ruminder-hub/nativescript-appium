import { Component, OnInit } from "@angular/core";

class User {
    username: string;
    password: string;

    constructor() {
        this.username ="";
        this.password="";
    }
}

@Component({
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    user: User;
    
    constructor() {
        console.log(".................... Login page on init.............................");
        
    }

    ngOnInit() {
        this.user = new User();
    }

    login() {
        if (this.user.username == "" || this.user.password == "") {
            alert("Enter username and password");
            return;
        }
        alert("VErifying the credentials");
    }
}