import React from "react";
import TelegramDescription from "./TelegramDescription";
import TelegramItem from "./TelegramItem";
import TelegramLeftMenu from "./TelegramLeftMenu";
import TelegramNews from "./TelegramNews";
const TelegramHome = () => {
  return (
    <div className="d-flex justify-content-between">
      <TelegramLeftMenu />

      <TelegramNews />
      <TelegramDescription />
    </div>
  );
};

export default TelegramHome;
