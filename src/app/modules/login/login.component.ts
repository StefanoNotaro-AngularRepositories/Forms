import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BootstrapInputModel } from '../../shared/bootstrap-input/models/bootstrap-input.model';
import { BootstrapInputTypes, Type } from '../../shared/bootstrap-input/models/bootstrap-input-types.model';

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
        this.validateForm();
    }

    private validateForm() {
        for (let i = 0; i < this.inputs.length; i++) {
            const value = this.loginForm.controls[this.inputs[i].formControl].value ? this.loginForm.controls[this.inputs[i].formControl].value : '';
            if (this.loginForm.controls[this.inputs[i].formControl].errors !== null) {
                this.inputs[i] = { ...this.inputs[i], error: 'Este campo es requerido.', value };
            } else {
                this.inputs[i] = { ...this.inputs[i], error: undefined, value };
            }
        }
    }
}
