import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="GGUMBI Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
