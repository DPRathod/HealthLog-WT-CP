// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <>
      <Router>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home/> } />
              {/* <Route exact path="/" element={<Login/> } /> */}
              {/* <Route exact path="/" element={<Register/> } /> */}
              


            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
