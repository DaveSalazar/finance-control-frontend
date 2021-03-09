export class Filter {

    private _value: string;
    private _field: string;
    private _operator: string;

    constructor(field: string, operator: string, value: string) {
        this._value = value;
        this._field = field;
        this._operator = operator;
    }

    get value(): string {
        return this._value;
    }


    get field(): string {
        return this._field;
    }

    get operator(): string {
        return this._operator;
    }

    public static encodeFilters(filters: Filter[]): string {
        let filterQuery = filters.map((el, index) => {
          let field = encodeURIComponent(`filters[${index}][field]`) + `=${el.field}`;
          let value = encodeURIComponent(`filters[${index}][value]`) + `=${el.value}`;
          let operator = encodeURIComponent(`filters[${index}][operator]`) + `=${el.operator}`;
          return `${field}&${value}&${operator}`;
        }).join('&');
        return filterQuery;
      }
}