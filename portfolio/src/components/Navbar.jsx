import "../assets/styles/style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="https://www.google.com/">
            RAYHAN<span className="span-blue">AW</span>
          </a>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="https://www.google.com/">Work</a>
          </li>
          <li>
            <a href="https://www.google.com/">About</a>
          </li>
          <li>
            <a href="https://www.google.com/">Blog</a>
          </li>
          <li>
            <a href="https://www.google.com/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
