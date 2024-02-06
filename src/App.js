import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sale from './router/sale/Sale'
import Home from './router/home/Home';
import ShopBy from './router/shop-by-category/ShopBy'
import ShopByPlatform from './router/shop-by-platform/ShopByPlatform'
import Support from './router/support/Support'
import Not from './router/not/Not'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/shopby' element={<ShopBy/>}/>
        <Route path='/shopByPlatform' element={<ShopByPlatform/>}/>
        <Route path='/Support' element={<Support/>}/>
        <Route path='*' element={<Not/>}/>
      </Routes>
      <Footer/>
</div>
  );
}

export default App;
