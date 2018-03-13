import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ModalController } from 'ionic-angular';

import { ScanData } from '../../models/scan-data.model';
import { MapPage } from '../../pages';

@Injectable()
export class HistorialService {
  private historial: ScanData[] = [];

  constructor(private iab: InAppBrowser, private modal: ModalController) {}

  addToHistorial(text: string) {
    const data = new ScanData(text);
    this.historial.unshift(data);
    console.log(this.historial);
    this.openScan(0);
  }

  openScan(index: number) {
    const scanData: ScanData = this.historial[index];
    switch (scanData.type) {
      case 'http':
        this.iab.create(scanData.info, '_system');
        break;
      case 'map':
        this.modal.create(MapPage, { coords: scanData.info }).present();
        break;
    }
  }

  loadHistorial() {
    return this.historial;
  }
}
