import Playground from "./components/Playground.jsx";
import ApolloNavbar from "./components/Navbar.jsx";
import AboutUs from "./components/About-Us.jsx";
import ApolloFooter from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
// import "./style/App.css";
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
        <Route path="/playground" element={<Playground />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <ApolloFooter />
    </Router>
  );
}

export default App;
