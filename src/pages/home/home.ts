import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Platform, ToastController } from 'ionic-angular';

import { HistorialService } from '../../providers/historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController,
    private platform: Platform,
    private historialService: HistorialService
  ) {}

  scan() {
    if (!this.platform.is('cordova') ){
      console.log('dd');
      this.historialService.addToHistorial('http://google.com');
      return;
    }
    this.barcodeScanner.scan().then(
      barcodeData => {
        console.log('Bar text ' + barcodeData.text);
        console.log('Bar format ' + barcodeData.format);
        console.log('Bar cancelled ' + barcodeData.cancelled);

        if(!barcodeData.cancelled && barcodeData.text != null) {
          this.historialService.addToHistorial(barcodeData.text);
        }
      },
      err => {
        this.showError(`Error: ${err}`);
      }
    );
  }

  showError(message: string) {
    let toast = this.toastCtrl.create({
      message,
      duration: 2500
    });
    toast.present();
  }
}
