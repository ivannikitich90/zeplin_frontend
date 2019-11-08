import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SaveJobComponent} from '@core/components/modals/save-job/save-job.component';
import {RecruitmentProcessUpdateComponent} from '@core/components/modals/recruitment-process-update/recruitment-process-update.component';
import {SaveSlotComponent} from '@core/components/modals/save-slot/save-slot.component';
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

    openAddJobDialog() {
        this.dialog.open(SaveJobComponent, {width: '350px', height: 'auto'});
    }

    openAddSlotDialog() {
        this.dialog.open(SaveSlotComponent, {width: '350px', height: 'auto'});
    }

    openJobDetailsDialog() {
        this.dialog.open(JobDetailsComponent, {width: '350px', height: 'auto'});
    }

    openProcessUpdateDialog() {
        this.dialog.open(RecruitmentProcessUpdateComponent, {width: '350px', height: 'auto'});
    }

}
