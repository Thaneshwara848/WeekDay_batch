import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-reactivedrivenfomr',
  templateUrl: './reactivedrivenfomr.component.html',
  styleUrls: ['./reactivedrivenfomr.component.css']
})
export class ReactivedrivenfomrComponent implements OnInit {

  constructor() { }

  student:any;


  ngOnInit(): void {
    // as soon as component get load very first thing ngOnInit metho will get Execute 
    this.student=new FormGroup({
      firstname:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern('^[a-zA-Z_ ]*$')
        ]
      )),
      lastname:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]
      )),
      age:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.min(18),
          Validators.max(60)
        ]
      )),
    })
  }

  


  onSubmitData(a:any){
      console.log(a)
  }
}
