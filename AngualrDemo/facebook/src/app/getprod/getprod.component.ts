import { Component, OnInit } from '@angular/core';
import { CommonservService } from '../commonserv.service';
import { GetmyprodservService } from '../getmyprodserv.service';

@Component({
  selector: 'app-getprod',
  templateUrl: './getprod.component.html',
  styleUrls: ['./getprod.component.css']
})
export class GetprodComponent implements OnInit {

  constructor(private mydata:GetmyprodservService) { }

  veg:any=["tamoto","patato","brijal","Cocumber","onion"];
  fruits:any=["Apple","banana","chico","Graps","Straberry"]
  spices:any=[
    {"name":'Tulsi ','price':100},
    {"name":'Dalchini  ','price':260},
    {"img":'path ','price':260}
  ]

  mykicknitem:any=[];

  kichen1(e:any){
    
    
    if(e=="veg"){
        this.mykicknitem=this.veg;
    }
    if(e=="fruits"){
      this.mykicknitem=this.fruits;
  }
  if(e=="spices"){
    this.mykicknitem=this.spices;
}

  }
  kichen(e:any){
    
    
    if(e.target.value=="veg"){
        this.mykicknitem=this.veg;
    }
    if(e.target.value=="fruits"){
      this.mykicknitem=this.fruits;
  }
  if(e.target.value=="spices"){
    this.mykicknitem=this.spices;
}

  }


  myproduct:any=[];
  ngOnInit(): void {
    this.mydata.getAllProd().subscribe(data=>{
     this.myproduct= data;
     console.log(data)
    },error=>{}
    
   )
  }

}
