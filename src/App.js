import './App.css';
import Career from "./components/Career.js";
import Navbar from "./components/Navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
<BrowserRouter>
      
        <Navbar/>
      <Routes>
        <Route exact path="/career"  element={<Career/>}/>


      </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
