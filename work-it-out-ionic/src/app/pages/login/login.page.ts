import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  pageloaded: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.pageloaded = false;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.pageloaded = true;
    }, 1000); // Simula un retraso en la carga de la página
  }

  login() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      this.authService.login(user).subscribe(
        (data) => {
          console.log('Login response:', data);
          localStorage.setItem('user', JSON.stringify(data));
          Swal.fire({
            title: 'Success!',
            text: 'Login successful',
            icon: 'success',
            confirmButtonColor: "#1d965b",
          }); // Assuming the response contains user data
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error during login:', error);
          // Handle the error here, such as displaying a message to the user
        }
      );
    }
  }
}
