import { Injectable, Injector } from '@angular/core';
import { Saving } from 'src/app/models/Saving';
import { DataService } from '../DataService';
import { ISavingService } from './ISavingService';

@Injectable({
  providedIn: 'root'
})
export class SavingsService extends DataService<Saving> implements ISavingService{
  constructor(injector: Injector) { 
    super(injector, 'savings')
  }

}
