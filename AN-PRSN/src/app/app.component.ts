import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms'
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonService]
})
export class AppComponent implements OnInit {
  title = 'Person';
  myForm: any;
  Persons: Person;
  model = new Person();
  // chgid:number;

  constructor(public personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
} 
getPersons() {
    this.personService.getAll()
      .subscribe(Persons => {
        this.Persons = Persons;
      })
  }

  addPerson() {
    if (!this.model.id){
    this.personService.add(this.model)
      .subscribe(Persons => {
        this.model = Persons;
        this.getPersons();
        this.clearModel();
      });
    }
    else {
      console.log('editPerson ' + this.model.id);
       this.personService.update(this.model.id,this.model)
      .subscribe(Persons => {
        this.model = Persons;
        this.getPersons();
        this.clearModel();
      });
    }
  }

  deletePerson(id) {
    this.personService.delete(id)
      .subscribe(() => {
        this.getPersons();
      });
  }

  editPerson(id){
    console.log('updatePerson ' + id);
    this.personService.edit(id)
        .subscribe(Person=>{
          this.model = Person;
        });
  }

//  getPerson(id){
//     this.personService.getPerson(id)
//         .subscribe(Person=>{
//           this.model = Person;
//         })
// }

clearModel(){
 this.model.id=0;
 this.model.name="";
 this.model.age=0;
}

}
