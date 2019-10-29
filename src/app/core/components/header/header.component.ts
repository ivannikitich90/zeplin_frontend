import {Component, OnInit} from '@angular/core';
import {SubjectService} from '@core/services/subject.service';
import {AuthService} from '@core/services/auth.service';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../../../auth/login/login.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    appTheme = 'light';
    routerUrl = '';

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
