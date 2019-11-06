import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {RecruiterProfileComponent} from '@core/components/modals/recruiter-profile/recruiter-profile.component';
import {RegistrationFinalComponent} from '@core/components/modals/registration-final/registration-final.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register-candidate-step2',
    templateUrl: './register-candidate-step2.component.html',
    styleUrls: ['./register-candidate-step2.component.scss']
})
export class RegisterCandidateStep2Component implements OnInit {

    constructor(
        private dialog: MatDialog,
        public router: Router
    ) {
    }

    ngOnInit() {
    }


    viewProfile() {
        this.dialog.open(RecruiterProfileComponent, {width: '350px', height: '535px'});
    }

    connectRecruiter() {
        this.dialog.open(RegistrationFinalComponent, {width: '350px', height: '380px'});
    }
}
