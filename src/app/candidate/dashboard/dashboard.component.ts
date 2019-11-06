import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ApplicationDetailsComponent} from '@app/core/components/modals/application-details/application-details.component';
import {JobDetailsComponent} from '@core/components/modals/job-details/job-details.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
    }

    viewAppDetails() {
        this.dialog.open(ApplicationDetailsComponent, {width: '350px', height: '535px'});
    }


    viewJobDetails() {
        this.dialog.open(JobDetailsComponent, {width: '350px', height: '535px'});
    }
}
