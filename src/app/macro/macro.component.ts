import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MacroService} from "../service/macro.service";
import {Person} from "../model/Person";

@Component({
  selector: 'app-macro',
  templateUrl: './macro.component.html',
  styleUrls: ['./macro.component.css']
})
export class MacroComponent implements OnInit{

  public personForm! : FormGroup;
  public macro! : any;

  constructor(private fb : FormBuilder , private service : MacroService) {
  }

  ngOnInit(): void {
    this.personForm = this.fb.group(
      {
        weight : this.fb.control(''),
        height : this.fb.control(''),
        activity : this.fb.control(''),
        gender : this.fb.control(''),
        age : this.fb.control(''),
      }
    );
  }

  save() {
    let person : Person = this.personForm.value;
    this.service.calcMacro(person).subscribe(data =>{
      this.macro = data;
    },error => {
      console.log(error);
    });

  }
}
