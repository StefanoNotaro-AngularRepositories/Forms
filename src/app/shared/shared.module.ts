import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BootstrapInputComponent } from './bootstrap-input/component/bootstrap-input.component';

const modules = [NavbarComponent, BootstrapInputComponent];

@NgModule({
    declarations: [...modules],
    imports: [CommonModule, RouterModule],
    exports: [...modules],
})
export class SharedModule {}
