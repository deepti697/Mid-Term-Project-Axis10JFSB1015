import React from "react";
import { Link } from "react-router-dom";
import '../css/Dashboard.css';

function Button1() {
  return (
    <Link to="/signup">
      <button className="btn">Logout</button>
    </Link>
  );
}

export default Button1;