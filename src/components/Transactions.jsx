import React, {useState, useEffect}from 'react';
import './index.css';


function Transactions(){
    const [transactions, setTransactions] =useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function fetchTransactions(){
            try{
                const response = await fetch("http://localhost:3000/transaction");
                const data = await response.json();
                setTransactions(data);
                setLoading(false);
            } catch(error){
                console.error(error);
            }
        }
        fetchTransactions()
    },[]);
    if (loading){
        return <p>Loading...</p>;
    }
       return (
        <table className='table'>
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map((transaction)=>(
                <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                </tr>
            ))}
        </tbody>
      </table>
       )
}
export default Transactions;