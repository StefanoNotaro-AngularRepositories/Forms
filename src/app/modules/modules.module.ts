import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapInputsComponent } from './bootstrap-inputs/bootstrap-inputs.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';

const modules = [BootstrapInputsComponent, HomeComponent];

@NgModule({
    declarations: [...modules, LoginComponent, RegisterComponent],
    imports: [CommonModule, ModulesRoutingModule, ReactiveFormsModule, SharedModule],
    exports: [...modules],
})
export class ModulesModule {}
