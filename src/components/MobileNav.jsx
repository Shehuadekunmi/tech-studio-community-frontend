import "../styles/MobileNav.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Link
      to={"/"}
      className="d-flex justify-content-center mobile-nav mb-3 mt-2 d-lg-none"
    >
      <img src={logo} alt="" />
    </Link>
  );
};

export default MobileNav;
