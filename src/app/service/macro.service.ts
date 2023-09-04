import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../model/Person";

@Injectable({
  providedIn: 'root'
})
export class MacroService {

  constructor(private http: HttpClient) {

  }

  public calcMacro(person: Person) {
    return this.http.post<Person>("http://localhost:8080/api/macro", person);
  }

  public calcBmi(person: Person) {
    return this.http.post<Person>("http://localhost:8080/api/bmi", person);
  }

  public personList():Observable<Person[]>{
    return this.http.get<Person[]>("http://localhost:8080/api/persons");
  }

}
