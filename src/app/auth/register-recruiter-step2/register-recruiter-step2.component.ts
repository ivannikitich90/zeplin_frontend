import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {RecruitersService} from '@core/services/recruiters.service';

@Component({
    selector: 'app-register-recruiter-step2',
    templateUrl: './register-recruiter-step2.component.html',
    styleUrls: ['./register-recruiter-step2.component.scss']
})
export class RegisterRecruiterStep2Component implements OnInit {

    recruiterJobForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        public router: Router,
        private recruiter: RecruitersService
    ) {
        this.recruiterJobForm = fb.group({
            job_title: [''],
            company: [''],
            location: ['']
        });
    }

    ngOnInit() {
    }

    postJob() {
        // this.recruiter.addJob(this.recruiterJobForm.value).subscribe(dt => {
        // });
        this.router.navigate(['recruiter/dashboard']);
    }
}
