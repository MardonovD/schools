import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page1 from "./telegram/TelegramItem";
import Home from "./telegram/TelegramHome";
import Page2 from "./telegram/TelegramLeftMenu";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
