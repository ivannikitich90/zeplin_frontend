import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from '@core/guards/auth.guard';
import {RegisterCandidateStep2Component} from '@app/auth/register-candidate-step2/register-candidate-step2.component';
import {RegisterRecruiterStep2Component} from '@app/auth/register-recruiter-step2/register-recruiter-step2.component';

const routes: Routes = [
    // {
    //     path: 'login', component: LoginComponent
    // },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'register/candidate/step2', component: RegisterCandidateStep2Component
    },
    {
        path: 'register/recruiter/step2', component: RegisterRecruiterStep2Component
    },
    {
        path: 'profile', component: RegisterComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
