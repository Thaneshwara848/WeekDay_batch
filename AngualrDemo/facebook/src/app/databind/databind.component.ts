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

}
