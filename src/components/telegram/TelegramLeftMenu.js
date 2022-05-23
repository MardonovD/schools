import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UserAction } from "../redux/actions/actionDec";
// import ActionType from "../redux/contants/action-type";
import { useEffect } from "react";
import React from "react";
import TelegramItem from "./TelegramItem";

const TelegramLeftMenu = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state);

  const userAxios = async () => {
    const respons = await axios.get("https://fakestoreapi.com/users");
    dispatch(UserAction(respons));
  };

  useEffect(() => {
    userAxios();

    console.log(users.allReducers.payload);
  }, []);

  return (
    <div className="column ">
      <input placeholder="search" className="form-control" />
      <TelegramItem />
    </div>
  );
};

export default TelegramLeftMenu;
