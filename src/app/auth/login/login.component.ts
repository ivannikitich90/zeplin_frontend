import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@core/services/auth.service';
import {API_URL} from '@core/constants/app.config';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';
import * as jwtDecode from 'jwt-decode';
import {SubjectService} from '@core/services/subject.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm: FormGroup;
    apiUrl = API_URL;

    subscriptions: Subscription[] = [];

    constructor(
        private fb: FormBuilder,
        public auth: AuthService,
        public router: Router,
        private dialogRef: MatDialogRef<LoginComponent>,
        private subject: SubjectService
    ) {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    fbAuth() {
        this.subscriptions.push(
            this.auth.fbLogin(this.loginForm.value).subscribe(dt => {

            })
        );
    }

    login() {
        this.subscriptions.push(
            this.auth.login(this.loginForm.value).subscribe((dt: any) => {

                if (dt.hasOwnProperty('token')) {

                    const token = dt.token

                    // Saving token to browser local storage
                    localStorage.setItem('token', token);
                    this.subject.setUserData(jwtDecode(token));

                    this.router.navigate(['/']);
                    this.dialogRef.close();
                }
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
