import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import DeleteIcon from '@material-ui/icons/Delete';
import { IoIosThumbsUp } from 'react-icons/io';
import { IoIosThumbsDown } from 'react-icons/io';

export const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? '+' : '-';

  return (
    <li className='transaction-item'>
      <span>{transaction.text} </span>
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <DeleteIcon
        className='delete-btn'
        onClick={() => deleteTransaction(transaction.id)}
      >
        &times;
      </DeleteIcon>
      {transaction.amount > 0 ? (
        <IoIosThumbsUp className='thumbsup' />
      ) : (
        <IoIosThumbsDown className='thumbsdown' />
      )}
    </li>
  );
};
