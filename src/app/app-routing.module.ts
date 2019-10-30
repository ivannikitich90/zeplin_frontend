import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '@core/components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'pages', loadChildren: './pages/pages.module#PagesModule'
    },
    {
        path: 'auth', loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'recruiter', loadChildren: './recruiter/recruiter.module#RecruiterModule'
    },
    {
        path: 'candidate', loadChildren: './candidate/candidate.module#CandidateModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
