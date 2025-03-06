import { useState } from "react";

const AddTransaction = ({ onAddTransaction }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("Please enter both title and amount!");
      return;
    }

    // Get current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString(); // Example: "3/5/2025"
    const formattedTime = now.toLocaleTimeString(); // Example: "10:45 AM"

    // Create new transaction object
    const newTransaction = {
      title,
      amount: parseFloat(amount),
      date: formattedDate,
      time: formattedTime,
    };

    // Send transaction data to parent component
    onAddTransaction(newTransaction);

    // Clear input fields
    setTitle("");
    setAmount("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
