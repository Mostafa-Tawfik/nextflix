import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProtectedRoute from './helpers/ProtectedRoute';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Login from './Pages/Login';
import MovieID from './Pages/MovieID';
import Signup from './Pages/Signup';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/movie/:movieID' element={<MovieID />}/>
        <Route path='/account' element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to ="/" replace/>}/>
      </Routes>
    </div>
  );
}

export default App;
