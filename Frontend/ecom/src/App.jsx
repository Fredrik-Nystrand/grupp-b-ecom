import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopView from './views/ShopView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShopList from './components/shop/ShopList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ShopView />
        <Footer />
        <ShopList />
      </BrowserRouter>
    </div>
  );
}

export default App;
