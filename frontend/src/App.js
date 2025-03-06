import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Dashboard from "./components/Dashboard";

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="flex flex-col items-center p-10 space-y-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTransaction onAddTransaction={handleAddTransaction} />
                <TransactionList transactions={transactions} />
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard transactions={transactions} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
