import { Component, OnInit } from '@angular/core';
import { BootstrapInputTypes, Type } from '../../shared/bootstrap-input/models/bootstrap-input-types.model';
import { BootstrapInputModel } from '../../shared/bootstrap-input/models/bootstrap-input.model';

@Component({
    selector: 'app-bootstrap-inputs',
    templateUrl: './bootstrap-inputs.component.html',
    styleUrls: ['./bootstrap-inputs.component.css'],
})
export class BootstrapInputsComponent implements OnInit {
    public inputs: BootstrapInputModel[] = [
        {
            inputType: BootstrapInputTypes.Input,
            type: Type.Text,
            placeHolder: 'Input Test',
            isFormControl: true,
            hint: 'Hint example. Max length is 50 characters',
            maxLength: 50,
            label: 'Input test',
        },
        { inputType: BootstrapInputTypes.Input, type: Type.Text, placeHolder: 'Input Test', isFormControl: true, isReadOnly: true },
        { inputType: BootstrapInputTypes.Input, type: Type.Email, placeHolder: 'Email Test', isFormControl: true },
        { inputType: BootstrapInputTypes.Input, type: Type.Password, placeHolder: 'Password Test', isFormControl: true },
        { inputType: BootstrapInputTypes.CheckBox, type: Type.CheckBox, label: 'Label Example', isFormControl: true },
        { inputType: BootstrapInputTypes.CheckBox, type: Type.CheckBox, label: 'Label Example', isFormControl: true, isChecked: true },
        { inputType: BootstrapInputTypes.Radio, type: Type.Radio, label: 'Label Example', isFormControl: true },
        { inputType: BootstrapInputTypes.Radio, type: Type.Radio, label: 'Label Example', isFormControl: true, isChecked: true },
        { inputType: BootstrapInputTypes.InputFile, type: Type.File, isFormControl: true },
        { inputType: BootstrapInputTypes.TextArea, placeHolder: 'TextArea Test', rows: 3, isFormControl: true, maxLength: 150, hint: 'Max length is 150 characters' },
        {
            inputType: BootstrapInputTypes.Select,
            isFormControl: true,
            options: [
                { value: '1', displayName: 'Option 1' },
                { value: '2', displayName: 'Option 2' },
            ],
        },
    ];

    constructor() {}

    ngOnInit() {}
}
