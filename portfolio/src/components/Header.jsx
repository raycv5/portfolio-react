import "../assets/styles/style.css";
import logo from "../assets/images/code-typing.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="left-header">
          <img src={logo} alt="" className="header-img"></img>
        </div>
        <div className="right-header">
          <h1>
            Unlocking the Potential of the{" "}
            <span className="span-blue">Web</span>
          </h1>
          <p>
            <span className="span-blue underline">Web dev</span>eloper on a
            mission to create polished online solutions. Crafting exceptional
            websites, one line of <span className="span-blue">code</span> at a
            time, to bring ideas to <span className="span-blue">life</span>.
          </p>
          <a href="https://google.com">
            <p>
              <i className="fa-solid fa-arrow-right"></i> Hire Me
            </p>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
