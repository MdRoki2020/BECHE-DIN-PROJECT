import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeLayout from './Layout/HomeLayout';
import LaptopItemsLaout from './Layout/LaptopItemsLaout';
import PostAdLayout from './Layout/PostAdLayout';
import ProductDetailsLayout from './Layout/ProductDetailsLayout';
import UserSignupLayout from './Layout/UserSignupLayout';
import AllAdsLayout from './Layout/AllAdsLayout';
import UserSigninLayout from './Layout/UserSigninLayout';
import ShippingLayout from './Layout/ShippingLayout';

import AdminDashboardLayout from './Layout/AdminDashboardLayout';

function App() {
  return (
    <div className="">
      <Fragment>
        <BrowserRouter>
        {/* <NavigationBar/> */}
        {/* <AdminNavigation /> */}
        
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/laptopItems" element={<LaptopItemsLaout />} />
          <Route path="/ProductDetails" element={<ProductDetailsLayout />} />
          <Route path="/PostAds" element={<PostAdLayout />} />
          <Route path="/UserSignup" element={<UserSignupLayout />} />
          <Route path="/UserSignin" element={<UserSigninLayout />} />
          <Route path="/AllAds" element={<AllAdsLayout />} />
          <Route path="/Shipping" element={<ShippingLayout />} />


          <Route path="/AdminDashboard" element={<AdminDashboardLayout />} />


          {/* <Route path="/sendOtp" element={<SendOtp />}/>
          <Route path="/verifyOtp" element={<VerifyOtp />}/>
          <Route path="/createPassword" element={<CreatePassword />} /> */}
          
        </Routes>

        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
