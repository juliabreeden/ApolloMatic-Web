
import Playground from './components/Playground.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    // <div className="App">
    //  ApolloMatic
    // </div>
    <Router>
      <Navbar/>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/playground' element = {<Playground/>} />
        </Routes>
    </Router>
    
  );
}

export default App;
