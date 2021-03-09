import { Observable } from "rxjs";
import { Saving } from "src/app/models/Saving";
import { Filter } from "src/app/utils/Filter";

export abstract class ISavingService {
    abstract getDataFiltered(filters: Filter[]): Observable<Saving[]>;

    abstract getData(): Observable<Saving[]>;
  
    abstract getDataById(id): Observable<Saving>;
  
    abstract saveData(data: Saving, id: string): Observable<void>;
}