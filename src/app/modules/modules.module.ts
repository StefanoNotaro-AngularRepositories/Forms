import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapInputsComponent } from './bootstrap-inputs/bootstrap-inputs.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './home/home.component';
import { BootstrapInputComponent } from './bootstrap-inputs/modules/bootstrap-input/bootstrap-input.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

const modules = [BootstrapInputsComponent, HomeComponent];

@NgModule({
    declarations: [...modules, BootstrapInputComponent, LoginComponent],
    imports: [CommonModule, ModulesRoutingModule, ReactiveFormsModule],
    exports: [...modules],
})
export class ModulesModule {}
