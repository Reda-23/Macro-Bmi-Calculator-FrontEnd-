import {Component, OnInit} from '@angular/core';
import {MacroService} from "../service/macro.service";
import {Person} from "../model/Person";
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{

  persons! : Person[];
  constructor(private service : MacroService) {
  }
  ngOnInit(): void {
   this.service.personList().subscribe( data=>{
     this.persons = data;
   },error => {
     console.log("error fetching the data ",error)
     }
   );
  }

}
