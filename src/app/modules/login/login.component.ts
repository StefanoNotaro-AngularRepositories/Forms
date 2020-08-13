import { Component, OnInit } from '@angular/core';
import { BootstrapInputModel } from '../bootstrap-inputs/models/bootstrap-input.model';
import { BootstrapInputTypes, Type } from '../bootstrap-inputs/models/bootstrap-input-types.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public loginForm = new FormGroup({
        user: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

    public inputs: BootstrapInputModel[] = [
        {
            inputType: BootstrapInputTypes.Input,
            type: Type.Text,
            placeHolder: 'User',
            isFormControl: true,
            maxLength: 50,
            label: 'User',
            formControl: 'user',
            id: 'userId',
        },
        {
            inputType: BootstrapInputTypes.Input,
            type: Type.Password,
            placeHolder: 'Password',
            isFormControl: true,
            label: 'Password',
            formControl: 'password',
            id: 'password',
        },
    ];

    constructor() {}

    ngOnInit() {}

    public login() {
        console.log('this.loginForm :>> ', this.loginForm);
    }
}
