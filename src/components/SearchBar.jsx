import React from 'react';
import "./index.css";
import NavBar from './NavBar';
import SearchBar from './SearchBar';

import AddTransactionForm from './AddTransactionForm';
import Transactions from './Transactions.jsx';


function App() {
 
  return (
    <div>
      <NavBar />
      <SearchBar />
      <AddTransactionForm />
      <Transactions />
    </div>
  );
}

export default App;