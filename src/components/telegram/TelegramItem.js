import React from "react";
import { useEffect } from "react";
import "./style/style.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { UserId } from "../redux/actions/actionDec";

const TelegramItem = () => {
  const users = useSelector((state) => state.allReducers.payload?.data);

  const image = "https://i.pravatar.cc";

  const renderList = () => {
    return users?.map((user, index) => {
      return (
        <a href={`/product/${index + 1}`} key={index}>
          <div key={user.id}>
            <div className="ui items p-1 table-hover" id="csss" key={user.id}>
              <div className="item">
                <a className="ui tiny image">
                  <img
                    className="sty"
                    style={{ borderRadius: "50%", width: "70px" }}
                    src={image}
                    alt=""
                  />
                </a>
                <div className="content">
                  <a className="header">{(user.username, user.username)}</a>
                  <div className="description">
                    <p className="opasity">
                      Jenny is a student studying Media Management at
                      <div>Phone: {user.phone}</div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      );
    });
  };

  return <>{renderList()}</>;
};

export default TelegramItem;
