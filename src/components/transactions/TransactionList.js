import React, { useContext } from 'react';
import { TransactionItem } from './TransactionItem';

import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 className='history-header'>History</h3>
      <ul id='list' className='transaction-list'>
        {transactions.map(transaction => (
          <TransactionItem
            className='transaction-item'
            transaction={transaction}
            key={transaction.id}
          />
        ))}
      </ul>
    </>
  );
};
