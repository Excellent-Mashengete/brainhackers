import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    retypepassword: new FormControl(''),
  
  });
  submitted = false;
  autheticationService: any;
  constructor(private formBuilder: FormBuilder, private router:Router) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
       email: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
            // console.log("fullname is "+ this.form)
            
          ]
        ],
        password: ['', [Validators.required, Validators.email]],
        retypepassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  Register (){
    this.autheticationService.Register(this.form.value)
    .subscribe((res: any)=>{
    alert("Register Successful");
    this.form.reset();
    this.router.navigate(["Login"]);
    },(err: any)=>{
    alert ("Something went wrong")
    })
    }
  

}
