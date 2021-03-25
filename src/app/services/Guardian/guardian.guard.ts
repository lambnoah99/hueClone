import { StorageOperatorService } from './../storageOperator/storage-operator.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {

  constructor(private bridgeStorage: StorageOperatorService, private router: Router) {

  }


  canActivate(): boolean {
    this.bridgeStorage.bridgeInStorage().then(val => {
      if(!val) {
        this.router.navigate(['/add-bridge']); 
        console.log("Unauthorized");
        return false;
      } 
    });
    return true;
  }
}
