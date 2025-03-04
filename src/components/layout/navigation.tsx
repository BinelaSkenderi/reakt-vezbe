import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div style={{ padding: "16px" }}>
      <Link to="/">Home</Link>
      <Link to="/Facts">Facts</Link>
      <Link to="/AboutUs">About us</Link>
    </div>
  );
}

export default Navigation;
