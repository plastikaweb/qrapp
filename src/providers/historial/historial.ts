import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ScanData } from '../../models/scan-data.model';

@Injectable()
export class HistorialService {
  private historial: ScanData[] = [];

  constructor(private iab: InAppBrowser) {}

  addToHistorial(text: string) {
    const data = new ScanData(text);
    this.historial.unshift(data);
    console.log(this.historial);
    this.openScan(0);
  }

  openScan(index: number) {
    const scanData: ScanData = this.historial[index];
    switch(scanData.type) {
      case 'http':
      this.iab.create(scanData.info, '_system');
      break;
    }
  }

  loadHistorial() {
    return this.historial;
  }
}
