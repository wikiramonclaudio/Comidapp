import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'ns-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  moduleId: module.id,
})
export class RestaurantsComponent implements OnInit {

  public data: ObservableArray<any>;
  constructor(
    private page: Page,
    private restaurantService: RestaurantService
  ) {
    this.page.actionBarHidden = true;
    this.data = new ObservableArray<any>([]);
    
    // this.data.push([
    //   {
    //     name: 'Ala piter duboskybirisi blbslbsl dubidubidis wekjn noif whoghoewr hgorogh eriohgiohioh on',
    //     color: 'red'
    //   },
    //   {
    //     name: 'Piter',
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Loren',
    //     color: 'Orange'
    //   },
    //   {
    //     name: 'Troy',
    //     color: 'green'
    //   }
    // ]);
   }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(
      (response:any)=>{
        this.data.push(response['restaurants']);        
      },
      error=>{
        console.log(error);
      }
    )
  }

}
