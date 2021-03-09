import { Injectable, Injector } from '@angular/core';
import { Asset } from 'src/app/models/Asset';
import { DataService } from '../DataService';
import { IAssetService } from './IAssetService';

@Injectable({
  providedIn: 'root'
})
export class AssetsService extends DataService<Asset> implements IAssetService {
  
  constructor(injector: Injector) { 
    super(injector, 'assets')
  }

}
