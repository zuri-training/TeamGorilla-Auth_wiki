import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Library from './pages/Library/Library';
import FAQ from './pages/FAQ/FAQ';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import AuthLibrary from './pages/Library/AuthLibrary';

function App() {
  return (
    <div className="App">
      <Header />
       {/* <Footer />  */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/team' element={<Team/>}/>          
        </Routes>
      </BrowserRouter>
      {/* <AuthLibrary /> */}
      {/* <Footer />  */}
    </div>
  );
}

export default App;
