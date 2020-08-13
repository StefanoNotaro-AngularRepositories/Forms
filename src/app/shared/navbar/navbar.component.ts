import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    public menues = [
        { path: 'Home', displayName: 'Home' },
        { path: 'BootstrapInputsExamples', displayName: 'Bootstrap Inputs Examples' },
        { path: 'Login', displayName: 'Login Example' },
    ];

    constructor() {}

    ngOnInit() {}
}
