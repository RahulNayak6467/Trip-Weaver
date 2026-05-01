import { NavLink } from "react-router-dom";
import logo from "../../public/logo.svg";
function Navbar() {
  return (
    <header className="bg-deep-ink relative z-1 py-5 px-5">
      <nav className="max-w-7xl  mx-auto ">
        <div className="flex justify-between  items-center text-white">
          <div className="text-2xl  font-display leading-2">
            <h1>Trip Weaver</h1>
          </div>
          <ul className="flex items-center gap-4 text-cream-light font-xl uppercase leading-2 ">
            <li>
              <a href="/">Home</a>
            </li>
            <li></li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
          <div>
            <a
              href="/trip"
              className="uppercase text-amber brightness-125 font-mono font-light border border-amber-light px-6 py-2 rounded-md"
            >
              Weave My trip
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
