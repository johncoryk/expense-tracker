import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExp } from './components/IncomeExp';
import { TransactionList } from './components/transactions/TransactionList';
import { AddTransaction } from './components/transactions/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='conatiner'>
        <Balance />
        <IncomeExp />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
