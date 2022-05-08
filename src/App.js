
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/home';
import Locations from './Components/pages/Locations';
import Tips from './Components/pages/Tips';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/locations' exact element={<Locations />} />
      <Route path='/tips' exact element={<Tips />} />
      <Route path='/sign-up' exact element={<SignUp />} />
    </Routes>
    <Footer />

    </Router>

    </>
  );
}

export default App;
