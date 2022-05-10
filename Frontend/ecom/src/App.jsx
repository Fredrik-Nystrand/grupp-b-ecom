import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopView from './views/ShopView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterView from './views/RegisterView'
import LoginView from './views/LoginView'
import ProductDetailsView from './views/ProductDetailsView'
import UserProfileView from './views/UserProfileView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <ShopView /> } />
          <Route path="/login" element={ <LoginView /> } />
          <Route path="/register" element={ <RegisterView /> } />
          <Route path="/details" element={ <ProductDetailsView /> } />
          <Route path="/user" element={ <UserProfileView /> } />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
