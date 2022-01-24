import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Aboutus from './main_routes/AboutUs';
import Cartpage from './main_routes/CartPage';
import ContactUs from './main_routes/ContactUs';
import DetailsPage from './main_routes/DetailsPage';
import HomePage from './main_routes/HomePage';
import Login from './main_routes/Login';
import Notfound from './main_routes/NotFound';
import Payedpage from './main_routes/PayedPage';
import Paymentpage from './main_routes/PaymentPage';
import Profilepage from './main_routes/ProfilePage';
import ShopPage from './main_routes/ShopPage';
import SignUp from './main_routes/SignUp';
import Header from './shared/Header';
import EditPage from './main_routes/EditPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<Aboutus />} path='/about_us' />
        <Route element={<Cartpage />} path='/shop/cart' />
          <Route element={<DetailsPage />} path='/shop/:id' />
        <Route element={<ShopPage />} path='/shop'>
        </Route>
        <Route element={<Paymentpage />} path='/payment' />
        <Route element={<ContactUs />} path='/contact_us' />
        <Route element={<Login />} path='/login' />
        <Route element={<SignUp />} path='/sign_up' />
        <Route path='/profile/edit' element={<EditPage />} />
        {/* <Route path='/profile/order:id' element={<Orderdetails />} /> */}
        <Route path='/profile' element={<Profilepage />} />
        <Route path='/done' element={<Payedpage />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
