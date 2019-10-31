import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SharedModule} from '@shared/shared.module';
import {RegisterCandidateStep2Component} from './register-candidate-step2/register-candidate-step2.component';
import {RegisterRecruiterStep2Component} from './register-recruiter-step2/register-recruiter-step2.component';

@NgModule({
    declarations: [RegisterComponent, RegisterCandidateStep2Component, RegisterRecruiterStep2Component],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule {
}
