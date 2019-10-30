import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    public themeData = new Subject<any>();
    private userData = new Subject<any>();

    constructor() {
    }

    setTheme(value) {
        this.themeData.next(value);
    }

    getTheme(): Observable<any> {
        return this.themeData.asObservable();
    }

    setUserData(value) {
        this.userData.next(value);
    }

    getUserData(): Observable<any> {
        return this.userData.asObservable();
    }
}
