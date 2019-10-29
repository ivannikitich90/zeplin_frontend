import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import {AuthService} from '@core/services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    passHidden = true;
    isCandidate = true;
    referralEmails = [];
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];

    constructor(
        private fb: FormBuilder,
        private router: Router,
        public auth: AuthService,
        private toastr: ToastrService
    ) {
        this.registerForm = this.fb.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.getAuthUserData();
    }

    getAuthUserData(): void {
        // const userData = jwtDecode(localStorage.getItem('token'));
        // this.registerForm.patchValue(userData);
    }

    togglePass(): void {
        this.passHidden = !this.passHidden;
    }


    /**
     * First name field control getter
     */
    get firstName(): AbstractControl {
        return this.registerForm.get(`first_name`);
    }

    /**
     * Last name field control getter
     */
    get lastName(): AbstractControl {
        return this.registerForm.get(`last_name`);
    }

    /**
     * E-mail field getter
     */
    get email(): AbstractControl {
        return this.registerForm.get('email');
    }

    /**
     * Password field getter
     */
    get pass(): AbstractControl {
        return this.registerForm.get('password');
    }

    toggleCandidateRec() {
        this.isCandidate = !this.isCandidate;
    }

    addReferralEmail(e: MatChipInputEvent) {
        if (e.value) {
            this.referralEmails.push(e.value);
        }
    }

    removeReferralEmail(e) {
        this.referralEmails = this.referralEmails.filter((value) => value !== e);
    }


    registerUser() {
        this.auth.register(this.registerForm.value).subscribe((dt: any) => {
            this.toastr.success('Registered successfully');
            // Saving token to browser local storage
            localStorage.setItem('token', (dt.hasOwnProperty('token') ? dt.token : ''));

            this.router.navigate(['/']);
        });
    }
}
