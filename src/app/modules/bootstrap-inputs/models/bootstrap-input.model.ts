import { BootstrapInputTypes, Type } from './bootstrap-input-types.model';

export interface BootstrapInputModel {
    id?: string;
    inputType: BootstrapInputTypes;
    type?: Type;
    placeHolder?: string;
    isFormControl: boolean;
    rows?: number;
    options?: SelectOptions[];
    isReadOnly?: boolean;
    label?: string;
    value?: string;
    isChecked?: boolean;
    hint?: string;
    maxLength?: number;
    isRequired?: boolean;
    formControl?: string;
    error?: string;
}

export interface SelectOptions {
    value: string;
    displayName: string;
}
