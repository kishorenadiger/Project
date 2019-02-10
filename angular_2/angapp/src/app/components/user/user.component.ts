import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string ;
  age:number;
  email:string;
  address:Address;
  hobies:any[];
  constructor() { }

  ngOnInit() {
    this.name='kish';
    this.age=20;
    this.email='kishore@getComputedStyle.c';
    this.address={
      street : "new bel road",
      city:"balore",
      state:"kar",
    
    }
  this.hobies = ['vbdcfa','saddas','sadsd','wefads'];
  }
  addHobbies(hobby){
    this.hobies.unshift(hobby);
  }
  removeHobby(hobby){
      for(let i=0; i<this.hobies.length;i++)    
      {
        if (this.hobies[i]==hobby) {
          this.hobies.splice(i,1);
        }
      }
  }

}

interface Address{
  street:string;
  city:string;
  state:string;
}