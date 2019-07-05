import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../advertisement';
import { Observable } from '../../../node_modules/rxjs';
import { AdvertisementService } from '../advertisement.service';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.css']
})
export class AdvertisementListComponent implements OnInit {
  [x: string]: any;

  advertisements: Observable<Advertisement[]>;
 
  constructor(private advertisementService: AdvertisementService) { }
 
  ngOnInit() {
    this.reloadData();
  }
 
  deleteCustomers() {
    this.advertisementService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.advertisements = this.advertisementService.getAdvertisementList();
  }

}
