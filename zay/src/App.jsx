import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from './components/TopBar';
import Home from './pages/Home';
import About from './pages/about';
import Footer from './components/Footer';
import Contact from './pages/Contact'
import Shop from './pages/Shop';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Viewproduct from './components/Viewproduct';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
<TopBar/>
      <Routes>
     
          <Route index element={<Home />} />
          <Route  path="/about" element={<About/>}/>
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/view/:id" element={<Viewproduct/>} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      
      </Routes>
      <Footer/>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
