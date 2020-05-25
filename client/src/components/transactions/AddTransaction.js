import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import TextField from '@material-ui/core/TextField';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') return;
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3 className='input-header'>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='text-input'>
          <label htmlFor='text'>Text:</label>
          <TextField
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='amount-input'>
          <label htmlFor='amount'>
            Amount: <br />
            <small>(negative = expense, positive = income)</small>
          </label>
          <TextField
            type='number'
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button onClick={onSubmit} type='submit' className='add-btn'>
          Add transaction
        </button>
      </form>
    </>
  );
};
