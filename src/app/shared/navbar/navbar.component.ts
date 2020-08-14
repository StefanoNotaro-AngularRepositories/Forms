import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menu-item.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    public menues: MenuItem[] = [
        { path: 'Home', displayName: 'Home', class: 'nav-item' },
        { path: 'BootstrapInputsExamples', displayName: 'Bootstrap Inputs Examples', class: 'nav-item' },
        {
            path: '',
            displayName: 'Bootstrap Examples',
            class: 'nav-item dropdown',
            idDropDownList: true,
            subMenues: [{ path: 'Login', displayName: 'Login', class: 'dropdown-item' }],
        },
    ];

    constructor() {}

    ngOnInit() {}
}
