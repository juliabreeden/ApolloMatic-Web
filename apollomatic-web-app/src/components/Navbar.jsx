
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
          <li>
            <NavLink to = "/">home</NavLink>
          </li>
          <li>
            <NavLink to = "/playground">Playground</NavLink>
          </li>
        </ul>
       
    )
};

export default Navbar; 