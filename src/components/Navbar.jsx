import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-base-200 mb-8">
      <div className="navbar mx-auto max-w-6xl px-8">
        <div className="navbar-start">
          <Link to="/" className="btn btn-primary text-3xl items-center">
            C
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu bg-base-200 menu-horizontal">
            <li>
              <Link className="font-bold" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="font-bold" to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="font-bold" to={"/products"}>
                Products
              </Link>
            </li>
            <li>
              <Link className="font-bold" to={"/cart"}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEMEICON */}
          <label className="swap swap-rotate mt-1 items-center justify-center">
            <input type="checkbox" />
            {/* sun icon */}
            <BsSunFill className="swap-on fill-current w-4 h-4" />
            {/* moon icon */}
            <BsMoonFill className="swap-off fill-current w-4 h-4" />
          </label>
          {/* CART LINK */}
          <Link to="/cart" className="btn btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                10
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
