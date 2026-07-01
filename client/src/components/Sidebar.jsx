import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col p-6 shadow-xl">

      <h1 className="text-2xl font-bold mb-10">
        Referral System
      </h1>

      <nav>
        <Link
          to="/dashboard"
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg transition"
        >
          <FaHome />
          Dashboard
        </Link>
      </nav>

      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-3 text-red-400 hover:text-red-300 transition"
      >
        <FaSignOutAlt />
        Logout
      </button>

    </div>
  );
};

export default Sidebar;