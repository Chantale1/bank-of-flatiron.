import React, {useState} from "react";
import './index.css';
import axios from "axios";

function AddTransactionForm(){
    const [transactions, setTransactions] = useState([]);
    const addTransaction = async (newTransaction) => {
        try{
          const response = axios.post("http://localhost:3000/transaction", newTransaction);
          
          const updatedTansactions = [...transactions, response.data];
          setTransactions(updatedTansactions);
          alert("Transaction added successfully!");
        } catch(error) {
            console.error(error);
            alert("Error Adding Transaction");
        }
    }
    const handleSubmit = (event) =>{
        event.preventDefault();

        const newTransaction = {
            id: Date.now(),
            date: event.target.date.value,
            description: event.target.description.value,
            category: event.target.category.value,
            amount: event.target.amount.value,
        };
        addTransaction(newTransaction);

        event.target.reset();
    }
    return(
       <div>
        <form onSubmit={handleSubmit} className="addition">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />
            <label htmlFor="description">Description :</label>
            <input type="text" id="description" name="description" required />
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" required />
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" required />
            <button type="submit" className="add-btn">Add Transaction</button>
           </form>
       </div>
    )
}
export default AddTransactionForm;