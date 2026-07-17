import { FaDatabase } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <FaDatabase className="text-2xl text-cyan-400" />
        <h1 className="text-2xl font-bold">
          AI SQL Query Assistant
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;