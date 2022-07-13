import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/utils/validation';
import { AuthenticateService } from 'src/app/Services/user.service.service';
//import Swal from 'sweetalert2';
import { Router} from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  Form = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  
  });
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, 
    private userService : AuthenticateService, 
    private router:Router) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmpassword: ['', Validators.required],
      usertype: ['', Validators.required],
    },
    );
  }
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }

  onSubmit():void{
    this.submitted = true;
    let usertype = this.Form.value.usertype;
    let status = true;

    let user = {
      firstname : this.Form.value.firstname,
      lastname: this.Form.value.lastname,
      email: this.Form.value.email,
      status : status,
      password : this.Form.value.password,
    }

    this.userService.signup(user, usertype).subscribe({
      next:data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
        this.router.navigate(['/signin']);
      },
      error: err => {
        this.errorMessage = err.error.message;
       
      
      }
    });

    console.log(JSON.stringify(this.Form.value));
  }
}