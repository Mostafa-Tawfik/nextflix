import {Routes, Route, Navigate} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import ProtectedRoute from './helpers/ProtectedRoute';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ShowID from './Pages/ShowID';
import Search from './Pages/Search';
import Signup from './Pages/Signup';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/movie/:showID' element={<ShowID mediaType='movie'/>}/>
        <Route path='/tv/:showID' element={<ShowID mediaType='tv'/>}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/account' element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to ="/" replace/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
