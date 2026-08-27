import { useNavigate } from "react-router-dom";

function ResidentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">

          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Resident Portal
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Welcome to your Dashboard 👋
          </h1>

          <p className="text-gray-600 mt-3 max-w-2xl">
            Report water leakage problems and easily track the progress
            of your maintenance requests.
          </p>

        </div>

        {/* Quick Actions */}
        <div className="mt-8">

          <h2 className="text-2xl font-bold text-gray-800">
            Quick Actions
          </h2>

          <p className="text-gray-500 mt-1">
            What would you like to do?
          </p>

        </div>

        {/* Cards */}
        <div className="mt-5 grid gap-6 md:grid-cols-2">

          {/* Report Issue Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">

            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
              💧
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-5">
              Report Water Leakage
            </h3>

            <p className="text-gray-500 mt-2 leading-relaxed">
              Found a water leakage or maintenance problem?
              Submit the details so our maintenance team can take action.
            </p>

            <button
              onClick={() => navigate("/report")}
              className="mt-6 w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Report New Issue
            </button>

          </div>

          {/* My Issues Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">

            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
              📋
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-5">
              My Issues
            </h3>

            <p className="text-gray-500 mt-2 leading-relaxed">
              Check the issues you have reported and track their
              current status and assigned technician.
            </p>

            <button
              onClick={() => navigate("/my-issues")}
              className="mt-6 w-full sm:w-auto bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              View My Issues
            </button>

          </div>

        </div>

        {/* Information Section */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">

          <h3 className="text-lg font-bold text-blue-800">
            How it works
          </h3>

          <div className="mt-4 grid gap-4 md:grid-cols-3">

            <div>
              <p className="font-semibold text-gray-800">
                1. Report
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Submit your leakage or maintenance issue.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                2. Track
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Monitor the progress of your reported issue.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                3. Resolve
              </p>
              <p className="text-sm text-gray-600 mt-1">
                The maintenance team resolves the issue.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ResidentDashboard;