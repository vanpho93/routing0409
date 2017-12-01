import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './sign-in.component.html',
  providers: [SignInService]
})
export class SignInComponent implements OnInit {
  formSignIn: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signInService: SignInService
  ) {}

  ngOnInit() {
    this.formSignIn = this.fb.group({
      username: this.fb.control('abcd', Validators.required),
      password: ''
    });
  }

  get txtEmail() {
    return this.formSignIn.controls.username;
  }

  onSubmit() {
    const { value } = this.formSignIn;
    this.signInService.sendSignInRequest(value)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
}
