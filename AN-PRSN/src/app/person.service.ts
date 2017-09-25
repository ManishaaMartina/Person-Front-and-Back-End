import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class PersonService {

  constructor( private http:Http) { }
  getAll(){
    return this.http.get("http://localhost:8080/")
        .map(res => res.json());
  }
   add(info){
     console.log(JSON.stringify(info));
    return this.http.post("http://localhost:8080/add",info)
        .map(res => res.json());
  }
  edit(id){
    return this.http.get("http://localhost:8080/edit/"+id)
        .map(res => res.json());
  }
  delete(id){
    return this.http.get("http://localhost:8080/delete/"+id)
        //.map(res => res.json());
  }
  update(id, info){
    return this.http.post("http://localhost:8080/update/"+id,info)
        .map(res => res.json());
  }
}