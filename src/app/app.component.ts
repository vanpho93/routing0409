import { Component, OnInit } from '@angular/core';
import { SignInService } from './sign-in/sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SignInService]
})
export class AppComponent implements OnInit {
  constructor(private signInService: SignInService) {}

  ngOnInit(): void {
    this.signInService.checkToken();
  }
}
