import { useState } from "react";
import axios from "axios";

function ReportIssue() {
  const [location, setLocation] = useState("");
  const [severity, setSeverity] = useState("Medium");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      await axios.post("http://localhost:5000/issues", {
        location,
        severity,
        description,
        status: "Pending",
        technician: "Unassigned",
      });

      alert("Issue reported successfully!");

      setLocation("");
      setSeverity("Medium");
      setDescription("");
    } catch (error) {
      console.error("Error reporting issue:", error);
      alert("Failed to report issue. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">

          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
            💧
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mt-5">
            Report Water Leakage
          </h1>

          <p className="text-gray-600 mt-2">
            Provide the details of the leakage or maintenance problem.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white mt-6 p-6 md:p-8 rounded-2xl shadow-sm"
        >

          {/* Location */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Location
            </label>

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Example: Kitchen, Room 203"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Severity */}
          <div className="mt-6">

            <label className="block font-semibold text-gray-700 mb-2">
              Severity
            </label>

            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

          </div>

          {/* Description */}
          <div className="mt-6">

            <label className="block font-semibold text-gray-700 mb-2">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the leakage problem..."
              required
              rows="6"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-7 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Issue"}
          </button>

        </form>

        {/* Helpful Note */}
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5">

          <p className="font-semibold text-blue-800">
            💡 Tip
          </p>

          <p className="text-sm text-gray-600 mt-1">
            Please provide an accurate location and clear description
            so the maintenance team can resolve the issue quickly.
          </p>

        </div>

      </div>

    </div>
  );
}

export default ReportIssue;