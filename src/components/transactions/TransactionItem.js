import React from 'react';

export const TransactionItem = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '+' : '-';

  return (
    <li className='minus'>
      {transaction.text}{' '}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className='delete-btn'>&times;</button>
    </li>
  );
};
