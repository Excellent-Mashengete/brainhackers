import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from '../../Services/authentication.service'

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
  submitted = false; //bpplean
  errormessage: String = " "// declaring a string data type assigning to the error message

  constructor(private formBuilder: FormBuilder, private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    });
  }
  
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;//it traps errors in the form
  }

  onSubmit():void{
    this.submitted = true;// submit when the details are true/when form is not blank

    let user = {
      email: this.Form.value.email,
      password: this.Form.value.password
    }
    this.auth.signin(user).subscribe({
     next:data => {
       console.log(data);

     },
     error: err =>{
      
      this.errormessage = err.message;
      console.log(this.errormessage)
    }
     
   },)
    
   
    console.log(JSON.stringify(this.Form.value));
  }

}
