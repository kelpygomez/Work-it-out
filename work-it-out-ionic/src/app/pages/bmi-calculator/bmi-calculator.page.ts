// bmi-calculator.page.ts

import { Component } from '@angular/core';

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
    } else {
      this.bmi = null;
    }
  }
  
  get arrowPosition() {
      if (this.bmi && this.bmi < 18.5) { // Underweight
        return 0;
      } else if (this.bmi && this.bmi >= 18.5 && this.bmi < 25) { // Normal weight
        return 33.33;
      } else if (this.bmi && this.bmi >= 25 && this.bmi < 30) { // Overweight
        return 66.66;
      } else { // Obesity
        return 100;
      }
    }
    
}
