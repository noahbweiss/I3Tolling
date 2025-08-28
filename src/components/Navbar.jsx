import { NavLink } from "react-router";

{"optional - could be used for active link styling"}
function navLinkClass({ isActive }) {
  return isActive ? "text-yellow-100" : "hover:text-gray-300";
}

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyWebsite</h1>
      <ul className="flex gap-6">
        <li><NavLink to="/" className="hover:text-gray-300">Home</NavLink></li>
        <li><NavLink to="/about" className="hover:text-gray-300">About</NavLink></li>
        <li><NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink></li>
      </ul>
    </nav>
  );
}
