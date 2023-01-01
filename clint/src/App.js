import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import NavigationBar from './Pages/NavigationBar';

function App() {
  return (
    <div className="">
      <Fragment>
        <BrowserRouter>
        <NavigationBar/>
        
        <Routes>
          <Route path="/" element={<Home />} />

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
