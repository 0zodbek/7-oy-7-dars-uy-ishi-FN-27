import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage, setTheme } from "./redux/settingsSlice";
import { addToCart, removeFromCart } from "./redux/cartSlice";
import { useTranslation } from "react-i18next";
import Email from "../public/images/email.svg";
import Telefon from "../public/images/Calling.svg";
import House from "../public/images/Buildinghouse.svg";
import Logo from "../public/images/logo.svg";

function App() {
  const dispatch = useDispatch();
  const { t } = useTranslation(); 
  const language = useSelector((state) => state.settings.language);
  const theme = useSelector((state) => state.settings.theme);
  const cartItems = useSelector((state) => state.cart.items);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  const handleThemeToggle = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  const handleAddToCart = () => {
    if (name && age && email) {
      dispatch(addToCart({ id: Date.now(), name, age, email }));
      setName("");
      setAge("");
      setEmail("");
    }
  };

  const handleRemoveFromCart = (id) => dispatch(removeFromCart(id));

  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-white" : "bg-gray-800"} text-${theme === "light" ? "black" : "white"}`}>
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-8" />
          <span className="text-3xl font-bold">Brave</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            {t("Templates")}
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            {t("Features")}
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            {t("Pricing")}
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            {t("Resources")}
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <select
            onChange={handleLanguageChange}
            className="border border-gray-300 rounded p-1 text-gray-700"
          >
            <option value="en">English</option>
            <option value="uz">O'zbekcha</option>
          </select>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            {t("Start Free Trial")}
          </button>
          <button onClick={handleThemeToggle} className="ml-4 bg-gray-500 text-white py-2 px-4 rounded-lg">
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto text-center py-20">
        <h2 className="text-lg font-semibold text-gray-500">Contact Us</h2>
        <h1 className="text-4xl font-bold mt-2">
          Say <span className="text-blue-600">Hello!</span> We're always here to help.
        </h1>
        <p className="text-gray-600 mt-4 w-[700px] mx-auto">
          Interested in learning more about SmartMoving? Give us a call or send an email and one of our team members will be happy to assist you.
        </p>

        <div className={`flex w-full mb-6 justify-between ${theme === "light" ? "bg-white" : "bg-transparent"}`}>
  <div className={`flex items-center justify-start p-5 rounded-lg shadow-md w-[420px] ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
    <img width={40} height={40} src={Telefon} alt="Phone icon" />
    <div className="ml-8">
      <span className={`block text-start font-semibold ${theme === "light" ? "text-black" : "text-white"}`}>CALL US</span>
      <p className={`text-start text-3xl font-semibold ${theme === "light" ? "text-black" : "text-white"}`}>+1 (214) 960 4130</p>
    </div>
  </div>
  <div className={`flex p-5 items-center rounded-lg shadow-md w-[420px] ${theme === "light" ? "bg-white" : "bg-transparent"}`}>
    <img width={40} height={40} src={Email} alt="Email icon" />
    <div className="ml-8">
      <span className={`block text-start font-semibold ${theme === "light" ? "text-black" : "text-white"}`}>Email Us</span>
      <p className={`text-start text-3xl font-semibold ${theme === "light" ? "text-black" : "text-white"}`}>hello@aiinfo.com</p>
    </div>
  </div>
</div>
<div className={`bg-white p-5 flex rounded-lg shadow-md ${theme === "light" ? "bg-white" : "bg-transparent"}`}>
  <img src={House} alt="House icon" />
  <div className="ml-8 bg-transparent">
    <span className={`block font-semibold text-start ${theme === "light" ? "text-black" : "text-white"}`}>HEADQUARTERS</span>
    <p className={`text-start text-3xl font-semibold ${theme === "light" ? "text-black" : "text-black"}`}>12720 Hillcrest Road Suite 980, Dallas, TX 75230</p>
  </div>
</div>


      </main>

      <div className="h-96 bg-cover bg-center bg-slate-900 text-white py-16 text-center mt-10 mb-2">
        <h2 className="text-2xl font-semibold">Sign up for your free 14 day trial now!</h2>
        <button className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg">Get Started for free</button>
      </div>

      <footer className="p-4 bg-gray-800 text-white text-center">
        <div className="mt-10 w-96">
          <h2 className="text-2xl font-semibold">Add to Cart</h2>
          <div className="flex flex-col space-y-4 mt-4">
            <input 
              type="text" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded p-2 text-black"
            />
            <input 
              type="text" 
              placeholder="Age" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border border-gray-300 rounded p-2 text-black"
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded p-2 text-black"
            />
            <button 
              onClick={handleAddToCart} 
              className="bg-green-500 text-white py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <ul className="mt-4 space-y-2 m-auto text-center">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center w-96 border rounded-md p-2">
              <span>{item.name}, Age: {item.age}, Email: {item.email}</span>
              <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500 border p-2 rounded-md bg-slate-100">Remove</button>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default App;
