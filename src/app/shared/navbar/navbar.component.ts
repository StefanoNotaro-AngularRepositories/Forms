import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menu-item.model';
import * as _ from 'underscore';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    public menues: MenuItem[] = [
        { path: 'Home', displayName: 'Home', breadCrumPath: 'Home' },
        {
            path: '',
            displayName: 'Bootstrap Examples',
            breadCrumPath: 'Bootstrap Examples',
            subMenues: [
                { path: 'BootstrapInputsExamples', displayName: 'Inputs Examples', hasDivider: true, breadCrumPath: 'Bootstrap Examples/Input Examples' },
                {
                    path: 'Login',
                    displayName: 'Login',
                    breadCrumPath: 'Bootstrap Examples/Login',
                },
                { path: 'Register', displayName: 'Register', breadCrumPath: 'Bootstrap Examples/Register' },
            ],
        },
    ];

    public breadCrumbPath = [];

    constructor() {}

    ngOnInit() {}

    public setBreadCrumb(menu: MenuItem) {
        const path = menu.breadCrumPath.split('/');
        this.breadCrumbPath = [];
        const menuFlatten = this.flattenMenu();
        for (const item of path) {
            const menuItem = _.findWhere(menuFlatten, { displayName: item });
            this.breadCrumbPath.push({ displayName: item, path: menuItem.path });
        }

        console.log(this.breadCrumbPath);
    }

    private flattenMenu() {
        let result = [];
        for (const menu of this.menues) {
            result.push(menu);
            result = result.concat(menu.subMenues);
        }

        return result;
    }
}
