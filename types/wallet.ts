export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'bet' | 'win';
  amount: number;
  description: string;
  date: Date;
  status: 'pending' | 'completed' | 'failed';
}

export interface Wallet {
  balance: number;
  totalDeposits: number;
  totalWithdrawals: number;
  totalBets: number;
  totalWins: number;
  transactions: Transaction[];
}