import Playground from "./components/Playground.jsx";
import ApolloNavbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Docs from "./components/Docs.jsx";
import "./style/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //  ApolloMatic
    // </div>
    <Router>
      <ApolloNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  );
}

export default App;
