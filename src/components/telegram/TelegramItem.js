import React from "react";
import { useEffect } from "react";
import "./style/style.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TelegramItem = () => {
  const users = useSelector((state) => state.allReducers.payload?.data);
  const image = "https://i.pravatar.cc";
  const renderList = () => {
    return users?.map((user) => {
      return (
        <Link to="desc">
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
        </Link>
      );
    });
  };

  return <>{renderList()}</>;
};

export default TelegramItem;
