import { Component, OnInit } from '@angular/core';
import { GetmyprodservService } from '../getmyprodserv.service';

@Component({
  selector: 'app-getprod',
  templateUrl: './getprod.component.html',
  styleUrls: ['./getprod.component.css']
})
export class GetprodComponent implements OnInit {

  constructor(private mydata:GetmyprodservService) { }

  myproduct:any=[];
  ngOnInit(): void {
    this.mydata.getAllProd().subscribe(data=>{
     this.myproduct= data;
     console.log(data)
    },error=>{}
    
   )
  }

}
