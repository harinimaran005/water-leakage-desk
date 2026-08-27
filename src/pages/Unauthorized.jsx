import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">

        <h1 className="text-3xl font-bold text-red-600">
          Access Denied
        </h1>

        <p className="text-gray-600 mt-4">
          You don't have permission to access this page.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>

      </div>
    </div>
  );
}

export default Unauthorized;