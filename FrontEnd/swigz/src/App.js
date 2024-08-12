import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import { Exploremenu } from "./components/Exploremenu/Exploremenu";
import { Footer } from "./components/Footer/Footer";
import { AppDownload } from "./components/App/AppDownload";
import { ChatBot } from "./components/Chat/ChatBot";
import { Cart } from "./components/pages/Cart/Cart";
import { PlaceOrder } from "./components/pages/PlaceOrder/PlaceOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Fooddisplay } from "./components/Fooddisplay/Fooddisplay";
import Home from "./components/Home/Home";
import { LoginContext } from "./components/Login/LoginContext";
import { ContactUs } from "./components/ContactUS/ContactUs";
import Reels from "./components/Reels/Reels";
import { Nutrients } from "./components/Nutrients/Nutrients";
import NutriForm from "./components/NutriForm/NutriForm";
import PaymentComponent from "./components/Payment/Payment";
import { About } from "./components/About/About";
import { Content } from "./components/content/content";

function App() {
  const [currlogin, SetCurrlogin] = useState("");
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false);
  const [showReel, SetShowReel] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
      Max_Fat: 0,
      Max_Cholesterol: 0,
      Max_Sugar: 0
  });
  const[login,setLogin] = useState(null); 
  const [result,setResult] = useState([]);
  return (
    <LoginContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        showLogin,
        setShowLogin,
        showReel,
        SetShowReel,
        currlogin,
        SetCurrlogin,
        formData,
        setFormData,
        result,setResult,
        login,setLogin
      }}
    >
      <div className="App">
        <BrowserRouter>
          {showLogin ? <Login /> : <></>}
          {showReel ? <Reels /> : <></>}
          <NavBar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/menu"
              element={
                <Exploremenu category={category} setCategory={setCategory} />
              }
            />
            <Route path="/content" element={<Content />} />
            <Route path="/mobile-app" element={<AppDownload />} />
            <Route path="/contact us" element={<ContactUs />} />
            <Route path="/basket_icon" element={<Cart />}/>
            <Route path="/placeorder" element={<PlaceOrder />}/>
            <Route path="/nutriform" element={<NutriForm/>}/>
            <Route path="/nutrient" element={<Nutrients/>}/>
            <Route path="/payment" element={<PaymentComponent />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </BrowserRouter>
        {/* <PaymentComponent /> */}
        {/* <Nutrients/> */}
      </div>
    </LoginContext.Provider>
  );
}

export default App;
