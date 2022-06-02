import {Component, OnInit} from '@angular/core';
import {PeopleService} from "./people.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  resData : object | undefined;
  arrayOfPeople: Array<any> | undefined
  nameForm: any = {
    name: ''
  }
  name: string | undefined
  constructor(private peopleService: PeopleService) {
    this.peopleService.getPeople().subscribe((data) => this.arrayOfPeople = data.results)
  }
  form: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  showlog() {
    console.log(this.arrayOfPeople)
  }
  printForm(){
    this.name = this.name1.value
    this.form.reset()
  }
  get name1(): FormControl {
    return this.form.get('name') as FormControl
  }

}
