import { Component, OnInit, Input } from '@angular/core';
import { Advertisement } from '../advertisement';
import { AdvertisementService } from '../advertisement.service';
import { AdvertisementListComponent } from '../advertisement-list/advertisement-list.component';

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {

  @Input() advertisement: Advertisement;
 
  constructor(private advertisementService: AdvertisementService, private listComponent: AdvertisementListComponent) { }
 
  ngOnInit() {
  }
 
  updateActive(isActive: boolean) {
    this.advertisementService.updateAdvertisement(this.advertisement.id,
      { name: this.advertisement.name, area: this.advertisement.area, active: isActive,
         state:this.advertisement.state,pinCode:this.advertisement.pinCode,
         propertyType:this.advertisement.propertyType,postDate:this.advertisement.postDate },
      
    )
      .subscribe(
        data => {
          console.log(data);
          this.advertisement = data as Advertisement;
        },
        error => console.log(error));
  }
 
  deleteCustomer() {
    this.advertisementService.deleteAdvertisement(this.advertisement.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
 

}
