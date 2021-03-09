import { Observable } from "rxjs";
import { Income } from "src/app/models/Income";
import { Filter } from "src/app/utils/Filter";

export abstract class IIncomeService {
    abstract getDataFiltered(filters: Filter[]): Observable<Income[]>;

    abstract getData(): Observable<Income[]>;
  
    abstract getDataById(id): Observable<Income>;
  
    abstract saveData(data: Income, id: string): Observable<void>;
}