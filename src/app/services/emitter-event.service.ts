import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitterEventService {

  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription;    
  public backcomponent:string = '';
  constructor() { 
    this.subsVar = undefined
  }                  
    
  onFirstComponentButtonClick(param?:any) {    
    this.invokeFirstComponentFunction.emit(param);    
  }   
}
