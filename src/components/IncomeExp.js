import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExp = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h2>Income</h2>
        <p className='plus'>+${income}</p>
      </div>
      <div>
        <h2>Expense</h2>
        <p className='minus'>-${expense}</p>
      </div>
    </div>
  );
};
