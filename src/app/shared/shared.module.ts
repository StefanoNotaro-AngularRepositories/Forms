import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

const modules = [NavbarComponent];

@NgModule({
    declarations: [...modules],
    imports: [CommonModule, RouterModule],
    exports: [...modules],
})
export class SharedModule {}
