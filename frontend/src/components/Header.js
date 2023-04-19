import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Logo from "../components/banner/logo1.gif";

// Navbar HEader of the Portal
export function Header(props) {
  const history = useHistory();

  function handleLogOut() {
    localStorage.removeItem("userToken");
    history.push("/login");
  }

  const decoration = { textDecoration: "none", color: "white" };
  return (
    <div>
      {/* nav */}

      {/*  */}

      <nav className="navbar sticky-top navbar-dark bg-dark flex ">
        <div className=" nav_links w-100 text-light d-flex">
          <div className="back-link">
            <Link to="/home" className="w-100" style={decoration}>
              {/* <h1 className="title">Home</h1> */}
              <img src={Logo} className="logo" width="60px"></img>
            </Link>
          </div>
          <Link to="/home" className="w-100" style={decoration}>
            <div className="h-title ">
              <h4 className=" head title">
                <i>Home</i>
              </h4>
            </div>
          </Link>

          <div className="nav-cart align-items-center ">
            <Link
              to="/checkout"
              className="d-flex fa fa-shopping-cart"
              style={decoration}
            >
              <span className="ms-1">{props.cartItems.length}</span>
            </Link>
          </div>

          <div>
            <button
              className="title logout logout-btn"
              style={decoration}
              onClick={() => handleLogOut()}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
