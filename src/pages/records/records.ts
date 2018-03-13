import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HistorialService } from '../../providers/historial/historial';
import { ScanData } from '../../models/scan-data.model';

@IonicPage()
@Component({
  selector: 'page-records',
  templateUrl: 'records.html'
})
export class RecordsPage {
  historial: ScanData[] = [];

  constructor(private historialService: HistorialService) {}

  ionViewDidLoad() {
    this.historial = this.historialService.loadHistorial();
  }

  openScan(index: number) {
    this.historialService.openScan(index);
  }
}
