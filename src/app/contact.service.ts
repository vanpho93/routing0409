import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ContactService {
    constructor(private http: Http) {}

    getAllContacts(): Promise<any> {
        return this.http.get(`http://localhost:3000/contact`)
        .toPromise()
        .then(res => res.json()); // res => res.text
    }

    getContactById(id: string) {
        return this.http.get(`http://localhost:3000/contact/${id}`)
        .toPromise()
        .then(res => res.json());
    }
}
