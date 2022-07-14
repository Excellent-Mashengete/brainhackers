import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  Form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false; //bpplean
  errormessage: String = " "// declaring a string data type assigning to the error message
  authenitcated: any;
  email:any
  name:any 
  constructor(private formBuilder: FormBuilder, private auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.Form.controls; //it traps errors in the form
  }

  onSubmit(): void {
    this.submitted = true; // submit when the details are true/when form is not blank

    let user = {
      email: this.Form.value.email,
      password: this.Form.value.password
    }
    this.auth.signin(user).subscribe({
     next:data => {
       console.log(data);
       this.router.navigate(['/products'])
       this.email = data.arrData[0].email;
       this.name = data.arrData[0].email;
       this.authenitcated = true
       localStorage.setItem('email', this.email);
       localStorage.setItem('name', this.name);
       localStorage.setItem('authenitcated', this.authenitcated);
     },
     error: err =>{
      
      this.errormessage = err.message;
      this.authenitcated = true
      console.log(this.errormessage)
    }

    // console.log(JSON.stringify(this.Form.value));
  }
}
