import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ResidentDashboard from "./pages/ResidentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Unauthorized from "./pages/Unauthorized";
import ReportIssue from "./pages/ReportIssue";
import MyIssues from "./pages/MyIssues";

import RoleGuard from "./components/RoleGuard";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Resident Dashboard */}
        <Route
          path="/resident"
          element={
            <RoleGuard allowedRole="Resident">
              <ResidentDashboard />
            </RoleGuard>
          }
        />

        {/* Report Water Leakage */}
        <Route
          path="/report"
          element={
            <RoleGuard allowedRole="Resident">
              <ReportIssue />
            </RoleGuard>
          }
        />
        <Route
  path="/my-issues"
  element={
    <RoleGuard allowedRole="Resident">
      <MyIssues />
    </RoleGuard>
  }
/>

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <RoleGuard allowedRole="Maintenance Admin">
              <AdminDashboard />
            </RoleGuard>
          }
        />

        {/* Access Denied */}
        <Route
          path="/unauthorized"
          element={<Unauthorized />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;