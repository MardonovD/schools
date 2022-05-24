import React from "react";
import TelegramDescription from "./TelegramDescription";
import TelegramItem from "./TelegramItem";
import TelegramLeftMenu from "./TelegramLeftMenu";
import TelegramNews from "./TelegramNews";
const TelegramHome = () => {
  return (
    <div className="ui three column grid my-2  p-3 ">
      <TelegramLeftMenu />

      <TelegramNews />
      <TelegramDescription />
    </div>
  );
};

export default TelegramHome;
