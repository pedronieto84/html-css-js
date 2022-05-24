import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Link} from "react-router-dom";


export default function App() {
  return (
    <><div>
      <h1>Hola Mundo</h1>
    </div><nav>
        <Link to='/Menu'>Menu</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Pie'>Pie</Link>
      </nav></>
  );
}
