import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("Resident");

  const navigate = useNavigate();

  const handleLogin = () => {
  localStorage.setItem("role", role);

  if (role === "Resident") {
    navigate("/resident");
  } else {
    navigate("/admin");
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          Water Leakage & Maintenance
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Issue Desk
        </p>

        <div className="mt-8">
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div className="mt-5">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div className="mt-5">
          <label className="block text-gray-700 font-medium mb-2">
            Select Role
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          >
            <option>Resident</option>
            <option>Maintenance Admin</option>
          </select>
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-7 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;