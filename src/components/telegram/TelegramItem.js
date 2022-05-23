import React from "react";
import { useEffect } from "react";
import { UserAction } from "../redux/actions/actionDec";
import { connect, useSelector } from "react-redux";

const TelegramItem = () => {
  // const users = useSelector((state) => state);

  // const data = users.allReducers.payload.data;

  // console.log(users.allReducers.payload);

  return (
    <div className="ui items">
      <div className="item">
        <a className="ui tiny image">
          <img src="/images/avatar/large/jenny.jpg" />
        </a>
        <div className="content">
          <a className="header">Jenny </a>
          <div className="description">
            <p>
              Jenny is a student studying Media Management at
              <a>the New School</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const connectt = (state) => {
  return state;
};
export default connect(connectt, UserAction)(TelegramItem);
