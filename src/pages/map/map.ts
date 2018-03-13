import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  lat: number;
  lng: number;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    // this.lat = 40.8125777;
    // this.lng = 0.5214422999999897;
    let coordsArr = this.navParams.get('coords').split(',');
    this.lat = Number(coordsArr[0].replace('geo:', ''));
    this.lng = Number(coordsArr[1]);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
