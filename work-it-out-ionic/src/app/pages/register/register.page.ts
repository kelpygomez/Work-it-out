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
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.pageloaded = true;
    }, 1000); // Simula un retraso en la carga de la página
  }

  register() {
    if (!this.registerForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required!',
      });
      return; // No enviar el formulario si no está completo
    }

    const user = this.registerForm.value;
    this.authService.register(user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          title: 'Success!',
          text: 'Register successful',
          icon: 'success',
          confirmButtonColor: '#1d965b',
        });
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error during registration:', error);
        // Handle errors
      }
    );
  }
}
