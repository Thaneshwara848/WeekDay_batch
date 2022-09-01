import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {

  constructor() { }

 abc=false
  ngOnInit(): void {
   
  }

  fruits=["Apple","banana","Chicoo","Graps","Pappy"]

  addFriuit(myfriut:any){

    this.fruits.push(myfriut);
  }

}
