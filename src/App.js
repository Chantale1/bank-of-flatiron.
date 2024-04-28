import React from 'react';

import './App.css';
import AddTransactionForm from './components/AddTransactionForm';
import Transactions from './components/Transactions';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Transactions />
      <AddTransactionForm />


     
 
    </div>
  );
}

export default App;

