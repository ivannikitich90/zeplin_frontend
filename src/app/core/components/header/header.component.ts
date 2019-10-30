import {Component, OnInit} from '@angular/core';
import {SubjectService} from '@core/services/subject.service';
import {AuthService} from '@core/services/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import * as jwtDecode from 'jwt-decode';
import User from '@core/models/user';
import {LoginComponent} from '@app/auth/login/login.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    appTheme = 'light';
    routerUrl = '';
    authUser: User;

    constructor(
        private subject: SubjectService,
        public auth: AuthService,
        public router: Router,
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
            this.routerUrl = event.url;
        });


        // Getting user data directly when user logs in
        this.subject.getUserData().subscribe((dt: User) => {
            this.authUser = jwtDecode(dt);
        });

        // Getting user data from local storage
        const token = localStorage.getItem('token');
        if (token) {
            this.authUser = jwtDecode(token);
        }
    }

    changeTheme() {
        this.appTheme = this.appTheme === 'dark' ? 'light' : 'dark';
        this.subject.setTheme(this.appTheme);
    }

    openLogin() {
        this.dialog.open(LoginComponent, {width: '350px', height: '466px'});
    }


    logout() {
        this.auth.logout().subscribe(() => {
            localStorage.setItem('token', '');
            this.router.navigate(['auth/login']);
        });
    }
}
