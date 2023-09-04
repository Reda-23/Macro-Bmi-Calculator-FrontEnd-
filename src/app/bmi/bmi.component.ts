import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MacroService} from "../service/macro.service";

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit{

  public bmiForm! : FormGroup;
  public macro! : any;

  constructor(private fb : FormBuilder , private service : MacroService) {
  }

  ngOnInit(): void {
    this.bmiForm = this.fb.group(
      {
        weight : this.fb.control(''),
        height : this.fb.control(''),
      }
    );
  }

  save() {
    let person = this.bmiForm.value;
    this.service.calcBmi(person).subscribe(data =>{
      this.macro = data;
    }, error => {
      console.log(error);
    })
  }
}
