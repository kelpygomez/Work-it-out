import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, AfterViewInit {
  pageloaded: boolean;
  registerForm: FormGroup;
  passwordError: boolean;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.pageloaded = false;
    this.passwordError = false;

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validators: this.passwordsMatchValidator.bind(this)
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.pageloaded = true;
    }, 1000); // Simula un retraso en la carga de la página
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword) {
      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordsMismatch: true });
      } else {
        confirmPassword.setErrors(null);
      }
    }
  }

  register() {
    this.submitted = true;

    if (!this.registerForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fix the errors in the form!',
      });
      return; // No enviar el formulario si no está completo
    }

    const user = this.registerForm.value;
    this.authService.register(user).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error during registration:', error);
        // Handle errors
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  getErrorMessage(field: string): string {
    if (this.f[field].errors?.['required']) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
    if (this.f[field].errors?.['email']) {
      return 'Invalid email format';
    }
    if (this.f[field].errors?.['minlength']) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least 6 characters`;
    }
    if (this.f[field].errors?.['passwordsMismatch']) {
      return 'Passwords do not match';
    }
    return '';
  }
}
