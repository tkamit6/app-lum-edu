import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import '../node_modules/bootstrap-icons/icons/'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Footer } from './component/Footer';
import Register from './component/Register';
import Services from './component/Services';
import Blog from './component/Blog';
import { Maintainece } from './component/Maintainece';
import Create from './component/Create';
import Read from './component/Read';

function App() {
  
  return (
    <div className="App">    
      <header className="App-header">
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='/blog' element={<Blog/>} />
              <Route path='/create' element={<Create/>} />
              <Route path='/read' element={<Read/>} />
              <Route path='*' element={<Maintainece />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
