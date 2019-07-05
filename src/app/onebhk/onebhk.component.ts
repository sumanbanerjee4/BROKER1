import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onebhk',
  templateUrl: './onebhk.component.html',
  styleUrls: ['./onebhk.component.css']
})
export class OnebhkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model:any={}
  onSubmit(){
     alert("property details successfully submitted")
   }

}
