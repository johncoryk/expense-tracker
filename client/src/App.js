import React from 'react';
import { Header } from './components/Header';
import { Note } from './components/Note';
import { Balance } from './components/Balance';
import { IncomeExp } from './components/IncomeExp';
import { TransactionList } from './components/transactions/TransactionList';
import { AddTransaction } from './components/transactions/AddTransaction';
import { Footer } from './components/Footer';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExp />
        <TransactionList />
        <AddTransaction />
      </div>
      <Note />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
