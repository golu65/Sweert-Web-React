import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import Header from './Components/Home/Header';
import Footer from './Components/Home/Footer';
import HomeFour from './Components/Pages/HomeFour';
import HomeNine from './Components/Pages/HomeNine';
import HomeThree from './Components/Pages/HomeThree';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/categoery' element={<HomeFour/>} />
          <Route path='/recipe' element={<HomeNine/>} />
          <Route path='/sweethtooth' element={<HomeThree/>} />
        
        </Routes>
        <Footer/>
      </BrowserRouter>
   
    </>
  );
}

export default App;
