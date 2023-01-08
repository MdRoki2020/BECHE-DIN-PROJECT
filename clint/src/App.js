import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LaptopItems from './Pages/LaptopItems';
import NavigationBar from './Pages/NavigationBar';
import PostAds from './Pages/PostAds';
import ProductDetails from './Pages/ProductDetails';
import MyAccount from './Pages/MyAccount';
import AllAds from './Pages/AllAds';

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
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/AllAds" element={<AllAds />} />

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
