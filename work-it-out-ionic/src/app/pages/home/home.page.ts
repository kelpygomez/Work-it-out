import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isModalOpen = false;
  newsletterForm: FormGroup;
  isSubscribed: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.newsletterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
  }

  subscribe() {
    if (this.newsletterForm.valid) {
      this.isSubscribed = true;
    }
  }

  get email() {
    return this.newsletterForm.get('email');
  }

  toggleVideo() {
    const video: HTMLVideoElement = document.getElementById('promoVideo') as HTMLVideoElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
}
