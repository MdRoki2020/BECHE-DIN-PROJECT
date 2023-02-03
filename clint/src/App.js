import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeLayout from './Layout/HomeLayout';
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
import ProductsLayout from './Layout/ProductsLayout';
import SearchProductLayout from './Layout/SearchProductLayout';
import SendOtp from './AccountRecover/SendOtp';
import VerifyOtp from './AccountRecover/VerifyOtp';
import CreatePassword from './AccountRecover/CreatePassword';
import AdminAuthCheck from './Pages/Admin/AdminAuthCheck';
import Page404 from './Pages/Page404';

function App() {
  return (
      <Fragment>
        <BrowserRouter>
        
        <Routes>
          {/* for user */}
          <Route path="/" element={<HomeLayout />} />
          <Route path="/Products/:categories" element={<ProductsLayout />} />
          <Route path="/ProductDetails/:id" element={<ProductDetailsLayout />} />
          <Route path="/PostAuth" element={<PostAuthLayout />} />
          <Route path="/UserSignup" element={<UserSignupLayout />} />
          <Route path="/UserSignin" element={<UserSigninLayout />} />
          <Route path="/AllAds" element={<AllAdsLayout />} />
          <Route path="/Shipping/:id" element={<ShippingLayout />} />
          <Route path="/SearchProducts" element={<SearchProductLayout />}/>
          <Route path="*" element={<Page404/>}/>

          {/* for publisher */}
          <Route path="/PublisherDashboard" element={<PublisherDashboardLayout />} />
          <Route path="/PostAds" element={<PostAdLayout />} />

          {/* for admin */}
          <Route path="/AdminAuthCheck" element={<AdminAuthCheck />}/>
          <Route path="/AdminDashboard" element={<AdminDashboardLayout />} />
          <Route path="/PublisherList" element={<PublisherListLayout />}/>
          <Route path="/ProductList" element={<LaptopListLayout />}/>
          <Route path="/FindOut" element={<FindOutLayout />}/>

          {/* for recovery password */}
          <Route path="/sendOtp" element={<SendOtp />}/>
          <Route path="/verifyOtp" element={<VerifyOtp />}/>
          <Route path="/createPassword" element={<CreatePassword />} />
          
        </Routes>

        </BrowserRouter>
      </Fragment>
  );
}

export default App;
