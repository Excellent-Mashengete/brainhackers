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
  errormessage: String = ' '; // declaring a string data type assigning to the error message

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) {}

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
      data: {
        email: this.Form.value.email,
        password: this.Form.value.password,
      },
    };
    if (this.Form.invalid) {
      return;
    } else {
      this.auth.signin(user.data).subscribe({
        next: (data: any) => {
          console.log(data);
          this.router.navigate(['/products']);
        },
        error: (err) => {
          this.errormessage = err.message;
          console.log(this.errormessage);
        },
      });
    }

    // console.log(JSON.stringify(this.Form.value));
  }
}
