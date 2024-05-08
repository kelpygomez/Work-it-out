// bmi-calculator.page.ts

import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.page.html',
  styleUrls: ['./bmi-calculator.page.scss'],
})
export class BmiCalculatorPage {
  weightValue!: number;
  heightValue!: number;
  bmi!: number | null;

  calculateBMI() {
    if (this.weightValue && this.heightValue) {
      const weight = this.weightValue;
      const height = this.heightValue / 100; // Convertir altura a metros
      this.bmi = weight / (height * height);
      this.showMessage()
    } else {
      this.bmi = null;
    }
  }
  
  showMessage() {
    if (this.bmi){
      const formattedBMI = this.bmi.toFixed(2);
    if (this.bmi < 18.5) { // Underweight
      Swal.fire({
        title: "UNDERWEIGHT",
        text:'Your BMI is ' + formattedBMI + ', which is considered underweight.',
        imageUrl: "../../../assets/img/underweight.png",
        imageWidth: 100,
        imageHeight: 200,
        imageAlt: "Underweight icon"
      });
    } else if (this.bmi >= 18.5 && this.bmi < 25) { // Normal weight
      Swal.fire({
        title: "NORMAL WEIGHT",
        text: 'Your BMI is ' + formattedBMI + ', which is considered normal weight.',
        imageUrl: "../../../assets/img/normal-weight.png",
        imageWidth: 100,
        imageHeight: 200,
        imageAlt: "Normal weight icon"
      });
    } else if (this.bmi >= 25 && this.bmi < 30) { // Overweight
      Swal.fire({
        title: "OVERWEIGHT",
        text: 'Your BMI is ' + formattedBMI + ', which is considered overweight.',
        imageUrl: "../../../assets/img/overweight.png",
        imageWidth: 100,
        imageHeight: 200,
        imageAlt: "Overweight icon"
      });
    } else { // Obesity
      Swal.fire({
        title: "OBESITY",
        text: 'Your BMI is ' + formattedBMI + ', which is considered obesity.',
        imageUrl: "../../../assets/img/obese.png",
        imageWidth: 100,
        imageHeight: 200,
        imageAlt: "Obesity icon"
      });
    }
  }
  }
  
    
}
