import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../advertisement';
import { AdvertisementService } from '../advertisement.service';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css']
})
export class CreateAdvertisementComponent implements OnInit {

  advertisement: Advertisement = new Advertisement();
  submitted = false;
 
  constructor(private advertisementService: AdvertisementService) { }
 
  ngOnInit() {
  }
 
  newCustomer(): void {
    this.submitted = false;
    this.advertisement = new Advertisement();
  }
 
  save() {
    this.advertisementService.createAdvertisement(this.advertisement)
      .subscribe(data => console.log(data), error => console.log(error));
    this.advertisement = new Advertisement();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
