import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
      this.authService.login(user).subscribe((data) => {
        console.log(localStorage.getItem('user'));
        console.log(localStorage.getItem('profile_id')); 
        this.router.navigate(['/home']); 
      });
    }
  }

  ngOnInit() {
  }
}
