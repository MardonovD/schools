import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TelegramItem from "./telegram/TelegramItem";
import TelegramHome from "./telegram/TelegramHome";
import TelegramLeftMenu from "./telegram/TelegramLeftMenu";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelegramHome />} />
          {/* <Route path="page1" element={< te/>} />
          <Route path="page2" element={<Page2 />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
