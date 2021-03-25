import { StorageOperatorService } from './../storageOperator/storage-operator.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class HueService {

  public hueBridge;
  constructor(private http: HttpClient, private storage: StorageOperatorService, public router: Router) {
    this.storage.readBridge().then(val =>  { console.log(val); this.hueBridge = val; });
  }


  
  public init() {

  }

  /*
  *
  * Bridge Functions
  * 
  */

  // Delete bridge from Storage
  public deleteBridge() {
    return this.storage.deleteBridge();
  }

  public getBridgeInfo() {
    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/config`;
    return this.http.get(url);
  }



  /*
  *
  *  Light Functions
  *
  *
  */

  // Get all Lights
  public getLights() {
    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/lights`;
    return this.http.get(url);
  }

  // Change Light
  public changeLight(id: number, attribute: string, val: string) {

    const body = new Object();
    body[attribute] = val;
    console.log(body);

    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/lights/${id}/state`;
    return this.http.put(url, body).subscribe(response => console.log(response));
  }

  // Change Light Attribute
  public changeLightAttribute(id: number, attribute: string, val: string) {
    const body = new Object();
    body[attribute] = val;

    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/lights/${id}`;
    return this.http.put(url, body).subscribe(response => console.log(response));
  }


  /*
  *
  * Group Functions
  * 
  */
  // Get All Groups
  public getGroups() {
    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/groups`;
    return this.http.get(url);
  }

  // Get Single Group
  public getGroup(id: number) {
    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/groups/${id}`;
    return this.http.get(url);
  }

  // Change Group attributes
  public changeAttribute(id: number, attribute: string, val: any) {

    const body = new Object();
    body[attribute] = val;

    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/groups/${id}`
    return this.http.put(url, body).subscribe(val => console.log(val));
  }

  // Change State of Group
  public changeState(id: number, attribute: string, val: string) {
    const body = new Object();
    body[attribute] = val;

    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/groups/${id}/action`
    return this.http.put(url, body).subscribe(val => console.log(val));
  }

  // Create new Group
  public createGroup(lights: Array<Number>, name: string, type: string, category: string) {
    const body = new Object();
    body['name'] = name;
    body['type'] = type;
    body['class'] = category;
    body['lights'] = lights;

    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/groups/`
    console.log(body);
    return this.http.post(url, body);
  }

  // Delete Group
  public deleteGroup(id: number) {
    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/groups/${id}/`
    return this.http.delete(url);
  }


  /*
  *
  * Scene Functions
  * 
  */
  // Get all Scenes
  public getScenes() {
    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/scenes`;
    return this.http.get(url);
  }

  // Apply Scene
  public setScene(groupId: number, sceneId: string) {
    const body = { "scene": sceneId };
    const url = `${this.hueBridge.adress}/${this.hueBridge.key}/groups/${groupId}/action`;

    this.http.put(url, body).subscribe(response => console.log(response));
  }
}
