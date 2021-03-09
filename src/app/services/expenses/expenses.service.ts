import { Injectable, Injector } from '@angular/core';
import { Expense } from 'src/app/models/Expense';
import { DataService } from '../DataService';
import { IExpenseService } from './IExpenseService';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService extends DataService<Expense> implements IExpenseService{
  constructor(injector: Injector) { 
    super(injector, 'expenses')
  }

}
