export interface IExpense {
    id: string;
}

export class Expense implements IExpense {
    readonly id: string;
}