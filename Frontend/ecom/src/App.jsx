import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getProducts } from './store/actions/productsActions'
import { checkAuth} from './store/actions/authActions'

import ShopView from './views/ShopView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminView from './views/AdminView';
import RegisterView from './views/RegisterView'
import LoginView from './views/LoginView'
import ProductDetailsView from './views/ProductDetailsView'
import UserProfileView from './views/UserProfileView';
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import ProtectedUserRoutes from './routes/ProtectedUserRoutes';
import ProtectedAdminRoutes from './routes/ProtectedAdminRoutes';
import CheckoutView from './views/CheckoutView';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
    dispatch(checkAuth())
    
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <ShopView /> } />
          <Route path="/login" element={ <LoginView /> } />
          <Route path="/register" element={ <RegisterView /> } />
          <Route path="/details/:id" element={ <ProductDetailsView /> } />
          <Route path="/cart" element={ <ShoppingCart /> } />
          <Route path="/user" element={
            <ProtectedUserRoutes>
              <UserProfileView />
            </ProtectedUserRoutes>
          } />

          <Route path="/checkout" element={
            <ProtectedUserRoutes>
              <CheckoutView />
          </ProtectedUserRoutes>
          } />

          <Route path="/admin" element={
            <ProtectedAdminRoutes>
              <AdminView />
          </ProtectedAdminRoutes>
          } />

          <Route path="/user/:id" element={
            <ProtectedAdminRoutes>
              <UserProfileView />
            </ProtectedAdminRoutes>
          } />
          
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
