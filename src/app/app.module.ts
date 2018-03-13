import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MapPage } from '../pages';
import { HomePage } from '../pages/home/home';
import { RecordsPage } from '../pages/records/records';
import { TabsPage } from '../pages/tabs/tabs';
import { HistorialService } from '../providers/historial/historial';
import { MyApp } from './app.component';

@NgModule({
  declarations: [MyApp, HomePage, TabsPage, RecordsPage, MapPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, TabsPage, RecordsPage, MapPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    InAppBrowser,
    HistorialService
  ]
})
export class AppModule {}
