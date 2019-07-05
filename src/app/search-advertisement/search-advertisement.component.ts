import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../advertisement';
import { AdvertisementService } from '../advertisement.service';

@Component({
  selector: 'app-search-advertisement',
  templateUrl: './search-advertisement.component.html',
  styleUrls: ['./search-advertisement.component.css']
})
export class SearchAdvertisementComponent implements OnInit {
  [x: string]: any;

  area: string;
  advertisements: Advertisement[];
 
  constructor(private dataService:AdvertisementService) { }
 
  ngOnInit() {
    this.area = "";
  }
 
  private searchCustomers() {
    this.dataService.getAdvertisementByArea(this.area)
      .subscribe(advertisements => this.advertisements = advertisements);
  }
 
  onSubmit() {
    this.searchAdvertisements();
  }
}
