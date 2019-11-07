import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {throwIfAlreadyLoaded} from './guards/module-imports.guard';
import {SharedModule} from '@shared/shared.module';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {RequestInterceptor} from '@core/helpers/http.interceptor';

import {JwtHelperService} from '@auth0/angular-jwt';
import {JwtModule} from '@auth0/angular-jwt';
import {ToastrModule} from 'ngx-toastr';

import {HeaderComponent} from '@core/components/header/header.component';
import {HomeComponent} from '@core/components/home/home.component';
import {FooterComponent} from '@core/components/footer/footer.component';
import {LoginComponent} from '../auth/login/login.component';
import {RecruiterProfileComponent} from './components/modals/recruiter-profile/recruiter-profile.component';
import {RegistrationFinalComponent} from './components/modals/registration-final/registration-final.component';
import {ApplicationDetailsComponent} from '@core/components/modals/application-details/application-details.component';
import {JobDetailsComponent} from './components/modals/job-details/job-details.component';
import {SaveJobComponent} from './components/modals/save-job/save-job.component';
import {RecruitmentProcessUpdateComponent} from './components/modals/recruitment-process-update/recruitment-process-update.component';
import {SaveSlotComponent} from './components/modals/save-slot/save-slot.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/languages/', '.json');
}

// Token getter for JWT module
export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        RecruiterProfileComponent,
        RegistrationFinalComponent,
        ApplicationDetailsComponent,
        JobDetailsComponent,
        SaveJobComponent,
        RecruitmentProcessUpdateComponent,
        SaveSlotComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        JwtModule.forRoot({
            config: {
                tokenGetter,
                whitelistedDomains: ['localhost:3000', '68.183.36.96:80', 'secretsouth.ie', '68.183.36.96'],
                blacklistedRoutes: ['localhost:3000/auth/', '68.183.36.96:80/auth/', 'secretsouth.ie/auth/']
            }
        }),
        ToastrModule.forRoot({
            preventDuplicates: true
        }),

    ],
    providers: [
        JwtHelperService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        LoginComponent
    ],
    entryComponents: [
        LoginComponent,
        RecruiterProfileComponent,
        RegistrationFinalComponent,
        ApplicationDetailsComponent,
        JobDetailsComponent,
        SaveJobComponent,
        SaveSlotComponent,
        RecruitmentProcessUpdateComponent
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
