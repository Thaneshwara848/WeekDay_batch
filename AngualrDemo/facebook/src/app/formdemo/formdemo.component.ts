import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css']
})
export class FormdemoComponent implements OnInit {

  constructor(private rout :Router) { }

  ngOnInit(): void {
  }
  onSubmitData(userForm:any){
      console.log(userForm)
     // this.rout.navigate(['home']);
     

  }

}
