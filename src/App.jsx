
import './App.css';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Master from './components/master/Master';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

function App() {



  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/signup' element={<Signup />}/>
          <Route exact path='/home' element={<Master />}/>
          <Route exact path='/' element={<Master />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
