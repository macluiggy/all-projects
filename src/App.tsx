//import logo from "./logo.svg";
import "./App.scss";
import Main from "./Main/";

function App() {
  return (
    <div className="App">
      <header id="header">
        <a href="index.html" className="title">
          Luiggy Macias Portfolio
        </a>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="generic.html" className="active">
                All Projects
              </a>
            </li>
            <li>
              <a href="resume.pdf">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
      <Main />
    </div>
  );
}

export default App;
