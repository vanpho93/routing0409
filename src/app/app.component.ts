import { Component, OnInit } from '@angular/core';
import { SignInService } from './sign-in/sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SignInService]
})
export class AppComponent implements OnInit {
  constructor(private signInService: SignInService, private router: Router) {}

  ngOnInit(): void {
    this.signInService.checkToken();
  }

  get user() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
