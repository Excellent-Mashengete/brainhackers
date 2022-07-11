import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from 'src/app/Services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    });
  }
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }

  onSubmit():void{
    this.submitted = true;

    if(this.Form.invalid){
      return;
    }
    let user = {
      email: this.Form.value.email,
      password: this.Form.value.password
    }
    
   
    console.log(JSON.stringify(this.Form.value));
  }

}
