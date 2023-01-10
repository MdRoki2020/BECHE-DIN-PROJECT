import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LaptopItems from './Pages/LaptopItems';
import NavigationBar from './Pages/NavigationBar';
import PostAds from './Pages/PostAds';
import ProductDetails from './Pages/ProductDetails';
import UserSignup from './Pages/UserSignup';
import AllAds from './Pages/AllAds';
import UserSignin from './Pages/UserSignin';
import Shipping from './Pages/Shipping';

function App() {
  return (
    <div className="">
      <Fragment>
        <BrowserRouter>
        <NavigationBar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laptopItems" element={<LaptopItems />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/PostAds" element={<PostAds />} />
          <Route path="/UserSignup" element={<UserSignup />} />
          <Route path="/UserSignin" element={<UserSignin />} />
          <Route path="/AllAds" element={<AllAds />} />
          <Route path="/Shipping" element={<Shipping />} />

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
