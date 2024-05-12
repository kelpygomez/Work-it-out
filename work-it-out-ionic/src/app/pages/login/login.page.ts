import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
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
            text: 'Login succesfull',
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

  ngOnInit() {
  }
}
