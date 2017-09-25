export class Person{
   name: string;
    id:number;
    age: number;
    
    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}