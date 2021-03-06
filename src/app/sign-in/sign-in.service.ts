import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

@Injectable()

export class SignInService {
    constructor(private http: Http, private router: Router) {}

    sendSignInRequest(value) {
        const url = 'http://localhost:3000/signin';
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
        .catch(res => res.json());
    }

    checkToken() {
        const token = localStorage.getItem('token');
        if (!token) return;
        const url = 'http://localhost:3000/verify';
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const body = JSON.stringify({ token });
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
        .catch(() => {
            localStorage.removeItem('token');
            this.router.navigate(['']);
        });
    }
}
