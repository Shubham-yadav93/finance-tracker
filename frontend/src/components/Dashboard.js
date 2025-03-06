import { useAuth } from "../context/AuthContext";

const Dashboard = ({ transactions }) => {
  const { income } = useAuth();
  const totalExpenses = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p className="text-lg mt-4">Total Income: ₹{income}</p>
      <p className="text-lg mt-2">Total Expenses: ₹{totalExpenses}</p>
    </div>
  );
};

export default Dashboard;
