import { Observable } from "rxjs";
import { Expense } from "src/app/models/Expense";
import { Filter } from "src/app/utils/Filter";

export abstract class IExpenseService {
    abstract getDataFiltered(filters: Filter[]): Observable<Expense[]>;

    abstract getData(): Observable<Expense[]>;
  
    abstract getDataById(id): Observable<Expense>;
  
    abstract saveData(data: Expense, id: string): Observable<void>;
}