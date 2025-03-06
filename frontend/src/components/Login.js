import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // Try to get the registered user from context or localStorage
    let registeredUser = user;
    if (!registeredUser) {
      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
      if (storedUser) {
        registeredUser = storedUser;
      }
    }

    if (!registeredUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    if (email !== registeredUser.email || password !== registeredUser.password) {
      alert("Invalid credentials!");
      return;
    }

    // If credentials match, log the user in
    login(registeredUser);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
