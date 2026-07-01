import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-8">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center gap-6">
        <FaBell className="text-xl cursor-pointer" />
        <FaUserCircle className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;