import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/utils/validation';
import { AuthenticationService } from 'src/app/Services/authentication.service';
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
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  
  });
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, 
    private userService : AuthenticationService, 
    private router:Router) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmpassword: ['', Validators.required],
    },
    );
  }
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }

  onSubmit():void{
    this.submitted = true;

    let user = {
      name : this.Form.value.firstname,
      email: this.Form.value.email,
      password : this.Form.value.password,
    }

    this.userService.signup(user).subscribe({
      next:data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
        this.router.navigate(['/login']);
      },
      error: err => {
        this.errorMessage = err.error.message;
       
      
      }
    });

    console.log(JSON.stringify(this.Form.value));
  }
}