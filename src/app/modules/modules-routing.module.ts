import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapInputsComponent } from './bootstrap-inputs/bootstrap-inputs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'BootstrapInputsExamples', component: BootstrapInputsComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'Login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class ModulesRoutingModule {}
