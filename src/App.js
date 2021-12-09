
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/home';
import Login from './Components/login';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/login' element={<Login    ></Login>}   />
        <Route  path='/home'  element={<Home></Home>}   ></Route>
        </Routes>

    </div>
  );
}

export default App;
