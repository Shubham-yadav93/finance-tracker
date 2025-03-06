// src/components/TransactionList.js
const TransactionList = ({ transactions, onRemoveTransaction }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <ul className="space-y-3">
        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions yet.</p>
        ) : (
          transactions.map((transaction, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold">{transaction.title}</p>
                <p className="text-gray-500 text-sm">
                  {transaction.date} | {transaction.time}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-3 py-1 rounded ${
                    transaction.amount < 0 ? "bg-red-500" : "bg-green-500"
                  } text-white`}
                >
                  ₹{transaction.amount}
                </span>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => onRemoveTransaction(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
