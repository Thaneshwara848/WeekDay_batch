import { Component, OnInit } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component implements OnInit {

  constructor(private db:CommonservService) { }

  ngOnInit(): void {
  }

  
  mydb(){
    //console.log("A3 comp  with 100 lines ")
    this.db.dbcommonlogic();
  }
}
