import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

    public items = [];
    public item;
    public isShown = false;
  constructor() {}
  ngOnInit(): void {}
  getData(name, weightLbs, heightFt) {   
    let weight = this.convertWeight(weightLbs);
    let height = this.convertHeight(heightFt);
    let bMI = this.calculateBMI(weight, height);
    let status = this.getWeightStatus(bMI);
    this.item = {
      name,
      weight,
      height,
      bMI,
      status
    }
    this.isShown = true;
    return this.items.push(this.item); 
  }
  private convertHeight(heightFtIn) { //private method can only be used in this class, public can be exported 
    let totalHeight = heightFtIn.split(' ');
    let heightFt = totalHeight[0];
    let heightIn = totalHeight[1];
    let heightFtToIn = (12 * heightFt);
    let totalHeightIn = (heightFtToIn + +heightIn);
    let heightCm = totalHeightIn * 2.54;
    let heightM = 0.01 * heightCm;
    let roundedHeightM = Math.round(heightM * 10) / 10.0;
    return roundedHeightM;
  }
  private convertWeight(weightLbs) {
    let weightKg = 0.45359237 * weightLbs;
    let roundedWeightKg = Math.round(weightKg * 10) / 10.0;
    return roundedWeightKg;
  }
  //Calculate BMI
  private calculateBMI(weightKg, heightM) {
    let bMI = weightKg / (heightM * heightM);
    let roundedBMI = Math.round(bMI * 10) / 10.0;
    return roundedBMI;
  }
  private getWeightStatus(bMI) {
    let weightStatus;
    if (bMI < 18.5) {
      weightStatus = "Underweight";
    } else if (bMI <= 24.9) {
      weightStatus = "Normal or Healthy Weight";
    } else if (bMI <= 29.8) {
      weightStatus = "Overweight";
    } else if (bMI >= 29.9) {
      weightStatus = "Obese";
    }
    return weightStatus;
  }
  //event will calculate with no button
}
