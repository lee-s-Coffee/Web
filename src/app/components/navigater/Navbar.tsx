import Logo from "./Logo";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-300">
      {/* Left: Logo */}
      <Logo />

      {/* Right: Navigation Items */}
      <div className="flex items-center">
        <NavItem href="/About" label="About" />
        <NavItem href="/education" label="교육" />
        <NavItem href="/bean" label="원두" />
      </div>
    </nav>
  );
}
