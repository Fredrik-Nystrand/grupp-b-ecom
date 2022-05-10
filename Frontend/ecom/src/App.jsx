import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopView from './views/ShopView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminView from './views/AdminView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <AdminView />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
