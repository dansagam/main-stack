export interface GetAllTransactionsReponseData {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: 'deposit' | 'withdrawal';
  date: Date;
}

export type GetAllTransactions = Array<GetAllTransactionsReponseData>;
