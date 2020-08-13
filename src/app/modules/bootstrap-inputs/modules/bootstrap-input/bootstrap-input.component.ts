import { Component, OnInit, Input } from '@angular/core';
import { BootstrapInputModel } from '../../models/bootstrap-input.model';
import { BootstrapInputTypes } from '../../models/bootstrap-input-types.model';

@Component({
    selector: 'app-bootstrap-input',
    templateUrl: './bootstrap-input.component.html',
})
export class BootstrapInputComponent implements OnInit {
    @Input() public bootstrapInput: BootstrapInputModel;

    public isInput = () => (this.bootstrapInput ? this.bootstrapInput.inputType === BootstrapInputTypes.Input : false);
    public isInputFile = () => (this.bootstrapInput ? this.bootstrapInput.inputType === BootstrapInputTypes.InputFile : false);
    public isTextArea = () => (this.bootstrapInput ? this.bootstrapInput.inputType === BootstrapInputTypes.TextArea : false);
    public isSelect = () => (this.bootstrapInput ? this.bootstrapInput.inputType === BootstrapInputTypes.Select : false);
    public isCheckBox = () => (this.bootstrapInput ? this.bootstrapInput.inputType === BootstrapInputTypes.CheckBox : false);
    public isRadio = () => (this.bootstrapInput ? this.bootstrapInput.inputType === BootstrapInputTypes.Radio : false);

    constructor() {}

    ngOnInit() {
        this.bootstrapInput.maxLength = this.bootstrapInput.maxLength ? this.bootstrapInput.maxLength : 10000;
    }
}
