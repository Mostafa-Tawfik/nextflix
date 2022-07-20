import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </>
  );
}

export default App;
