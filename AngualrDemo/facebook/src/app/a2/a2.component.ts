import { Component, OnInit } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit {

  constructor(private dbs1:CommonservService) { }

  ngOnInit(): void {
  }

  
  mydb(){
   // console.log("A2 comp  with 100 lines ")
   this.dbs1.dbcommonlogic();
  }
}
