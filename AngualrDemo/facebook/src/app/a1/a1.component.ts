import { Component, OnInit } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements OnInit {

  constructor(private db:CommonservService) { }

  ngOnInit(): void {
  }

  mydb(){
   // console.log("A1 comp with 100 lines  ")
   this.db.dbcommonlogic()
  }
}
