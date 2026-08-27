import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  if (!role) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow">

      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          Water Leakage Desk
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-4">

          {role === "Resident" && (
            <>
              <button
                onClick={() => navigate("/resident")}
                className="hover:text-blue-200"
              >
                Dashboard
              </button>

              <button
                onClick={() => navigate("/report")}
                className="hover:text-blue-200"
              >
                Report Issue
              </button>

              <button
                onClick={() => navigate("/my-issues")}
                className="hover:text-blue-200"
              >
                My Issues
              </button>
            </>
          )}

          {role === "Maintenance Admin" && (
            <button
              onClick={() => navigate("/admin")}
              className="hover:text-blue-200"
            >
              Dashboard
            </button>
          )}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;