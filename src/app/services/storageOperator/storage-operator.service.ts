import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageOperatorService {

  constructor(private storage: Storage) { }


  public createBridge(ip: string, key: string) {
    const bridge = {
      name: 'Bridge',
      ip,
      adress: 'http://' + ip + '/api',
      key
    }

    return this.saveBridge(bridge);
  }

  public async readBridge(): Promise<any> {

    return new Promise(resolve => {
      this.storage.get('bridge')
      .then(val => resolve(val))
      .catch(err =>  { console.error(err); resolve(null) });
    });
  }

  // Alter Bridge Data
  public updateBridge(bridge: any) {
    this.saveBridge(bridge);
  }

  public deleteBridge(): boolean {
    this.storage.remove('bridge')
    .then(res => { return true })
    .catch(err => {
      console.error(err);
      return false;
    });

    return false;
  }

  // Check if there already is a Bridge in Storage
  public bridgeInStorage(): Promise<boolean> {
    return new Promise(resolve => {
      this.storage.forEach((value, key) => {
        if(key === "bridge") resolve(true);
        resolve(false);
      })
    });
  }

  // Save Bridge permanently
  private saveBridge(bridge: any): any {
    return this.storage.set('bridge', bridge);
  }
}
