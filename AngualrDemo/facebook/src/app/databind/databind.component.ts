import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mydecInc=false;
  mydecDec=false;

  name="Tahnesh"
  i=0
  inc(){
    
    console.log("hi Increment  "+this.i++);
    if(this.i==5 )
    {
     this.mydecInc=true;
    }
  }

  dec()
  {
     if(this.i==0 )
    {
      
     this.mydecDec=true;
      
    }
    console.log("hi Increment  "+this.i--);
   
  }

  company="SimpleLeanr "
  
  user(usernameabcd:any){
    console.log("My name is : "+usernameabcd)
  }
  result=0;
  intrest(p:any,t:any,roi:any)
  {
    console.log(p + " : "+t + " : "+roi);
   this.result= (p*t*roi)/100
   
  } 
}
