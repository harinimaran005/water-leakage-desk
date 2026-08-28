import { useEffect, useState } from "react";
import axios from "axios";

function MyIssues() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const getStatusStyle = (status) => {
    if (status === "Resolved") {
      return "bg-green-100 text-green-700";
    }

    if (status === "In Progress") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-yellow-100 text-yellow-700";
  };

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

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">

          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
            📋
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mt-5">
            My Reported Issues
          </h1>

          <p className="text-gray-600 mt-2">
            Track the status of your reported water leakage issues.
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="bg-white rounded-xl shadow-sm mt-6 p-8 text-center">
            <p className="text-gray-500">
              Loading your issues...
            </p>
          </div>
        )}

        {/* No Issues */}
        {!loading && issues.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm mt-6 p-8 text-center">

            <div className="text-5xl">
              📭
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              No Issues Reported
            </h2>

            <p className="text-gray-500 mt-2">
              You haven't reported any maintenance issues yet.
            </p>

          </div>
        )}

        {/* Issues */}
        {!loading && issues.length > 0 && (
          <div className="mt-6 space-y-5">

            {issues.map((issue) => (

              <div
                key={issue.id}
                className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
              >

                {/* Top Section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                  <div>
                    <p className="text-sm text-gray-500">
                      Issue #{issue.id}
                    </p>

                    <h2 className="text-xl font-bold text-gray-800 mt-1">
                      {issue.location}
                    </h2>
                  </div>

                  {/* Severity */}
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold w-fit ${getSeverityStyle(
                      issue.severity
                    )}`}
                  >
                    {issue.severity} Severity
                  </span>

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
                <div className="mt-6 border-t pt-5 grid gap-5 md:grid-cols-2">

                  {/* Status */}
                  <div>

                    <p className="text-sm text-gray-500">
                      Current Status
                    </p>

                    <span
                      className={`inline-block mt-2 px-4 py-2 rounded-full text-sm font-semibold ${getStatusStyle(
                        issue.status
                      )}`}
                    >
                      {issue.status || "Pending"}
                    </span>

                  </div>

                  {/* Technician */}
                  <div>

                    <p className="text-sm text-gray-500">
                      Assigned Technician
                    </p>

                    <p className="font-semibold text-gray-800 mt-2">
                      {issue.technician || "Not assigned yet"}
                    </p>

                  </div>

                </div>

                {/* Progress Message */}
                <div className="mt-5">

                  {issue.status === "Pending" && (
                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                      <p className="font-semibold text-yellow-800">
                        ⏳ Waiting for Maintenance
                      </p>

                      <p className="text-sm text-yellow-700 mt-1">
                        Your issue has been received and is waiting
                        for a technician to be assigned.
                      </p>
                    </div>
                  )}

                  {issue.status === "In Progress" && (
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                      <p className="font-semibold text-blue-800">
                        🔧 Work in Progress
                      </p>

                      <p className="text-sm text-blue-700 mt-1">
                        A technician has been assigned and is working
                        on your issue.
                      </p>
                    </div>
                  )}

                  {issue.status === "Resolved" && (
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                      <p className="font-semibold text-green-800">
                        ✅ Issue Resolved
                      </p>

                      <p className="text-sm text-green-700 mt-1">
                        Your maintenance issue has been successfully resolved.
                      </p>
                    </div>
                  )}

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default MyIssues;