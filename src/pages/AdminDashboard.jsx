import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  const [severityFilter, setSeverityFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const response = await axios.get(
        "https://water-leakage-api-cxcg.onrender.com/issues"
      );

      setIssues(response.data);
    } catch (error) {
      console.error("Error fetching issues:", error);
    } finally {
      setLoading(false);
    }
  };

  // Assign Technician
  const assignTechnician = async (issueId, technician) => {
    try {
      await axios.patch(
        `https://water-leakage-api-cxcg.onrender.com/issues/${issueId}`,
        {
          technician: technician,
          status:
            technician === "Unassigned"
              ? "Pending"
              : "In Progress",
        }
      );

      alert("Technician assigned successfully!");
      fetchIssues();
    } catch (error) {
      console.error("Error assigning technician:", error);
      alert("Failed to assign technician.");
    }
  };

  // Mark Issue as Resolved
  const markAsResolved = async (issueId) => {
    try {
      await axios.patch(
        `https://water-leakage-api-cxcg.onrender.com/issues/${issueId}`,
        {
          status: "Resolved",
        }
      );

      alert("Issue marked as resolved!");
      fetchIssues();
    } catch (error) {
      console.error("Error resolving issue:", error);
      alert("Failed to update issue.");
    }
  };

  // Counts
  const pendingCount = issues.filter(
    (issue) => issue.status === "Pending"
  ).length;

  const inProgressCount = issues.filter(
    (issue) => issue.status === "In Progress"
  ).length;

  const resolvedCount = issues.filter(
    (issue) => issue.status === "Resolved"
  ).length;

  // Filters
  const filteredIssues = issues.filter((issue) => {
    const matchesSeverity =
      severityFilter === "All" ||
      issue.severity === severityFilter;

    const matchesLocation =
      locationFilter === "All" ||
      issue.location === locationFilter;

    return matchesSeverity && matchesLocation;
  });

  // Status styles
  const getStatusStyle = (status) => {
    if (status === "Resolved") {
      return "bg-green-100 text-green-700";
    }

    if (status === "In Progress") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-yellow-100 text-yellow-700";
  };

  // Severity styles
  const getSeverityStyle = (severity) => {
    if (severity === "High") {
      return "bg-red-100 text-red-700";
    }

    if (severity === "Medium") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-green-100 text-green-700";
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
              🛠️
            </div>

            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Admin Portal
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Maintenance Dashboard
              </h1>
            </div>

          </div>

          <p className="text-gray-600 mt-4">
            Manage reported water leakage and maintenance issues.
          </p>

        </div>

        {/* Statistics */}
        <div className="grid gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Total */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-500 font-medium">
              Total Issues
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              {issues.length}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              All reported issues
            </p>
          </div>

          {/* Pending */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-500 font-medium">
              Pending
            </p>

            <h2 className="text-4xl font-bold text-yellow-600 mt-2">
              {pendingCount}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Waiting for technician
            </p>
          </div>

          {/* In Progress */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-500 font-medium">
              In Progress
            </p>

            <h2 className="text-4xl font-bold text-blue-600 mt-2">
              {inProgressCount}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Currently being handled
            </p>
          </div>

          {/* Resolved */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-gray-500 font-medium">
              Resolved
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              {resolvedCount}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Successfully completed
            </p>
          </div>

        </div>

        {/* Reported Issues Section */}
        <div className="bg-white rounded-2xl shadow-sm mt-8 p-6 md:p-8">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Reported Issues
            </h2>

            <p className="text-gray-500 mt-1">
              Review, assign and resolve maintenance requests.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 rounded-xl p-5 mt-6">

            <h3 className="font-semibold text-gray-700">
              Filter Issues
            </h3>

            <div className="grid gap-4 mt-4 md:grid-cols-2">

              {/* Severity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Severity
                </label>

                <select
                  value={severityFilter}
                  onChange={(e) =>
                    setSeverityFilter(e.target.value)
                  }
                  className="w-full border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All">All Severities</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>

                <select
                  value={locationFilter}
                  onChange={(e) =>
                    setLocationFilter(e.target.value)
                  }
                  className="w-full border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All">All Locations</option>

                  {[
                    ...new Set(
                      issues.map((issue) => issue.location)
                    ),
                  ].map((location) => (
                    <option
                      key={location}
                      value={location}
                    >
                      {location}
                    </option>
                  ))}
                </select>
              </div>

            </div>

          </div>

          {/* Loading */}
          {loading && (
            <div className="text-center py-10">
              <p className="text-gray-500">
                Loading issues...
              </p>
            </div>
          )}

          {/* No Issues */}
          {!loading && filteredIssues.length === 0 && (
            <div className="text-center py-10">

              <div className="text-5xl">
                📭
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                No Issues Found
              </h3>

              <p className="text-gray-500 mt-1">
                No issues match the selected filters.
              </p>

            </div>
          )}

          {/* Issues */}
          {!loading && filteredIssues.length > 0 && (

            <div className="mt-6 space-y-5">

              {filteredIssues.map((issue) => (

                <div
                  key={issue.id}
                  className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
                >

                  {/* Issue Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">

                    <div>

                      <p className="text-sm text-gray-400">
                        Issue #{issue.id}
                      </p>

                      <h3 className="text-xl font-bold text-gray-800 mt-1">
                        {issue.location}
                      </h3>

                    </div>

                    <div className="flex flex-wrap gap-2">

                      {/* Severity */}
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getSeverityStyle(
                          issue.severity
                        )}`}
                      >
                        {issue.severity} Severity
                      </span>

                      {/* Status */}
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusStyle(
                          issue.status
                        )}`}
                      >
                        {issue.status || "Pending"}
                      </span>

                    </div>

                  </div>

                  {/* Description */}
                  <div className="mt-5">

                    <p className="text-sm font-semibold text-gray-500">
                      Description
                    </p>

                    <p className="text-gray-700 mt-1">
                      {issue.description}
                    </p>

                  </div>

                  {/* Details */}
                  <div className="grid gap-5 md:grid-cols-2 mt-6 pt-5 border-t">

                    <div>

                      <p className="text-sm text-gray-500">
                        Current Technician
                      </p>

                      <p className="font-semibold text-gray-800 mt-1">
                        {issue.technician || "Unassigned"}
                      </p>

                    </div>

                    <div>

                      <p className="text-sm text-gray-500">
                        Current Status
                      </p>

                      <p className="font-semibold text-gray-800 mt-1">
                        {issue.status || "Pending"}
                      </p>

                    </div>

                  </div>

                  {/* Technician Assignment */}
                  <div className="mt-6 pt-5 border-t">

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Assign Technician
                    </label>

                    <select
                      value={issue.technician || "Unassigned"}
                      onChange={(e) =>
                        assignTechnician(
                          issue.id,
                          e.target.value
                        )
                      }
                      className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Unassigned">
                        Unassigned
                      </option>

                      <option value="Ravi">
                        Ravi
                      </option>

                      <option value="Kumar">
                        Kumar
                      </option>

                      <option value="Arun">
                        Arun
                      </option>

                      <option value="Priya">
                        Priya
                      </option>
                    </select>

                  </div>

                  {/* Resolve */}
                  {issue.status !== "Resolved" && (
                    <button
                      onClick={() =>
                        markAsResolved(issue.id)
                      }
                      className="mt-5 w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      ✓ Mark as Resolved
                    </button>
                  )}

                  {/* Resolved */}
                  {issue.status === "Resolved" && (
                    <div className="mt-5 bg-green-50 border border-green-100 rounded-lg p-4">
                      <p className="font-semibold text-green-700">
                        ✓ Issue Resolved Successfully
                      </p>
                    </div>
                  )}

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;