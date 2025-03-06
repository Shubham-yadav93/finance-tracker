// src/App.js
import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const HomePage = () => (
  <div className="flex flex-col items-center p-10 space-y-4">
    <h1 className="text-3xl font-bold">Welcome to Finance Tracker</h1>
    <p className="text-lg text-gray-700 text-center max-w-xl">
      Finance Tracker helps you manage your personal finances by tracking your
      income and expenses. Easily add transactions, monitor your spending
      habits, and achieve your financial goals.
    </p>
  </div>
);

function App() {
  const [transactions, setTransactions] = useState([]);
  const { user } = useAuth();

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Remove a transaction based on its index
  const handleRemoveTransaction = (indexToRemove) => {
    const updatedTransactions = transactions.filter(
      (_, index) => index !== indexToRemove
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="flex flex-col items-center p-10 space-y-6">
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <>
                  <AddTransaction onAddTransaction={handleAddTransaction} />
                  <TransactionList
                    transactions={transactions}
                    onRemoveTransaction={handleRemoveTransaction}
                  />
                </>
              ) : (
                <HomePage />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              user ? (
                <Dashboard transactions={transactions} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
