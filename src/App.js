import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/mainPage/header/Header';

import Footer from "./Components/mainPage/Footer";

import Main from "./Components/mainPage/Main";
import Four04 from "./Components/Pages/Four04";
import Iphone from"./Components/Pages/Iphone"
import Mac from './Components/Pages/Mac';
import Productpage from "./Components/Pages/Productpage";


class App extends Component{
  render() {
    return (
      <div>
        <Header />

        <Routes>
          <Route index element={<Main />} />
          
          <Route path="/iphone" element={<Iphone />}></Route>
          <Route path="/iphone/:prodid" element={<Productpage />}></Route>
          <Route path="*" element={<Four04 />} />
        </Routes>

        <Footer />
      </div>
    );
  }
  
}

export default App;
