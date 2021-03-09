import { Observable } from "rxjs";
import { Asset } from "src/app/models/Asset";
import { Filter } from "src/app/utils/Filter";

export abstract class IAssetService {
    abstract getDataFiltered(filters: Filter[]): Observable<Asset[]>;

    abstract getData(): Observable<Asset[]>;
  
    abstract getDataById(id): Observable<Asset>;
  
    abstract saveData(data: Asset, id: string): Observable<void>;
}