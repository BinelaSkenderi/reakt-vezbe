import './App.css';
import Navigation from './components/layout/navigation';
import Footer from './components/layout/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/page/home';
import Facts from './components/page/facts';
import AboutUs from './components/page/aboutUs';

function App () {
 
 return (
  <BrowserRouter>
    <Navigation/>
     <div style={{height:"100vh"}}>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='facts' element={<Facts/>} />
        <Route path='AboutUs' element={<AboutUs/>} />
        <Route path='*' element={<p>Not found</p>} />
      </Routes>
     </div>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
