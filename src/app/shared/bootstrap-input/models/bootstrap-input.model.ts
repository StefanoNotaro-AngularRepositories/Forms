import { BootstrapInputTypes, Type } from './bootstrap-input-types.model';

interface BootstrapCommonProperties {
    id?: string;
    inputType: BootstrapInputTypes;
    type?: Type;
    isRequired?: boolean;
    formControl?: string;
    isReadOnly?: boolean;
    isFormControl?: boolean;
    label?: string;
    error?: string;
    hint?: string;
    placeHolder?: string;
}

export interface BootstrapInputModel extends BootstrapCommonProperties {
    rows?: number;
    options?: SelectOptions[];
    value?: string;
    isChecked?: boolean;
    maxLength?: number;
}

export interface SelectOptions {
    value: string;
    displayName: string;
}
