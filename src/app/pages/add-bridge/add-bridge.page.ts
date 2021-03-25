import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { StorageOperatorService } from './../../services/storageOperator/storage-operator.service';

@Component({
  selector: 'app-add-bridge',
  templateUrl: './add-bridge.page.html',
  styleUrls: ['./add-bridge.page.scss'],
})
export class AddBridgePage  {

  public ipInput: any;
  public discoveredBridges;

  constructor(
    private http: HttpClient, 
    public loader: LoadingController,
    public router: Router,
    public alert: AlertController,
    private storage: StorageOperatorService
  ) {
    //Check if there is already a bridge in Storage
    this.storage.bridgeInStorage().then(val => {
      if(val) this.router.navigateByUrl('/tabs/tabs');
    });

    this.discoveredBridges = this.discover();
  }


  async addBridge(ip: string) {
    const loading = await this.loader.create({
      message: 'Trying to reach the Bridge'
    });
    await loading.present();


    this.contactBridge(ip).subscribe(async res => {

      loading.dismiss();

      if (res[0].success) {
        // Successfully connected to Bridge
        console.log('success');

        // Add Bridge
        this.storage.createBridge(ip, res[0].success.username)
        .then(res => this.router.navigate(['tabs', 'tabs']))
        .catch(err => console.error(err));

      } else if (res[0].error.type === 101) {
        // Button on Bridge not pressed
        const alert = await this.alert.create({
          header: 'Failure',
          message: 'Button on Top of the Hue Bridge was not pressed, Press it and try again.',
          buttons: [{
            text: 'ok',
            role: 'cancel'
          }]
        });

        await alert.present();

        console.log('Button on Bridge not pressed');

      } else if (res[0].error) {
        const alert = await this.alert.create({
          header: 'Failure',
          message: 'Error Contacting Bridge',
          buttons: [{
            text: 'ok',
            role: 'cancel'
          }]
        });

        await alert.present();
      }
      console.log(res);
    });
  }


  contactBridge(ip: string) {
    const url = 'http://' + ip + '/api';
    return this.http.post(url, { devicetype : 'hueClone'});
  }

  discover() {
    return this.http.get("https://discovery.meethue.com/");
  }
}
