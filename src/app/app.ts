import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  handleProfile(): void {
    console.log(this.loginForm.value);
  }

  reset(): void {
    this.loginForm.reset({
      name: '',
      email: '',
      password: '',
    });
  }

  submit(): void {
    console.log(this.loginForm.get('name')?.value);
    console.log(this.loginForm.get('email')?.value);
    console.log(this.loginForm.get('password')?.value);
  }
}
