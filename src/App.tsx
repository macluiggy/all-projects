//import logo from "./logo.svg";
import "./App.scss";
import Main from "./Main/";

function App() {
  return (
    <div className="App">
      <header id="header">
        <a href="https://macluiggy.github.io" className="title">
          Luiggy Macias Portfolio
        </a>
        <nav>
          <ul>
            <li>
              <a href="https://macluiggy.github.io">Home</a>
            </li>
            <li>
              <a href="/" className="active">
                All Projects
              </a>
            </li>
            <li>
              <a href="https://macluiggy.github.io/resume-builder/">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
      <Main />
    </div>
  );
}

export default App;
