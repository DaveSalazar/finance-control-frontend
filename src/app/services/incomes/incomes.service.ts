import { Injectable, Injector } from '@angular/core';
import { Income } from 'src/app/models/Income';
import { DataService } from '../DataService';
import { IIncomeService } from './IIncomeService';

@Injectable({
  providedIn: 'root'
})
export class IncomesService extends DataService<Income> implements IIncomeService {

  constructor(injector: Injector) { 
    super(injector, 'incomes')
  }

}
