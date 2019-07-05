import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  linkList:boolean=false;
  toogleLinks(){
    this.linkList=true
  }
  close(){
    this.linkList=false;
  }


  ngOnInit() {
  }

}
