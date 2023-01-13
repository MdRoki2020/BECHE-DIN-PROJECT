import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeLayout from './Layout/HomeLayout';
import LaptopItemsLaout from './Layout/LaptopItemsLaout';
import PostAuthLayout from './Layout/PostAuthLayout';
import ProductDetailsLayout from './Layout/ProductDetailsLayout';
import UserSignupLayout from './Layout/UserSignupLayout';
import AllAdsLayout from './Layout/AllAdsLayout';
import UserSigninLayout from './Layout/UserSigninLayout';
import ShippingLayout from './Layout/ShippingLayout';
import PostAdLayout from './Layout/PostAdLayout'
import PublisherDashboardLayout from './Layout/PublisherDashboardLayout';
import AdminDashboardLayout from './Layout/AdminDashboardLayout';
import PublisherListLayout from './Layout/PublisherListLayout';
import LaptopListLayout from './Layout/LaptopListLayout';
import FindOutLayout from './Layout/FindOutLayout';

function App() {
  return (
    <div className="">
      <Fragment>
        <BrowserRouter>
        
        <Routes>
          {/* for user */}
          <Route path="/" element={<HomeLayout />} />
          <Route path="/laptopItems" element={<LaptopItemsLaout />} />
          <Route path="/ProductDetails" element={<ProductDetailsLayout />} />
          <Route path="/PostAuth" element={<PostAuthLayout />} />
          <Route path="/UserSignup" element={<UserSignupLayout />} />
          <Route path="/UserSignin" element={<UserSigninLayout />} />
          <Route path="/AllAds" element={<AllAdsLayout />} />
          <Route path="/Shipping" element={<ShippingLayout />} />

          {/* for publisher */}
          <Route path="/PublisherDashboard" element={<PublisherDashboardLayout />} />
          <Route path="/PostAds" element={<PostAdLayout />} />

          {/* for admin */}
          <Route path="/AdminDashboard" element={<AdminDashboardLayout />} />
          <Route path="PublisherList" element={<PublisherListLayout />}/>
          <Route path="LaptopList" element={<LaptopListLayout />}/>
          <Route path="FindOut" element={<FindOutLayout />}/>


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
