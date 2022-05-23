import React from "react";

const TelegramItem = () => {
  return (
    <div className="ui items">
      <div className="item">
        <a className="ui tiny image">
          <img src="/images/avatar/large/jenny.jpg" />
        </a>
        <div className="content">
          <a className="header">Jenny Hess</a>
          <div className="description">
            <p>
              Jenny is a student studying Media Management at
              <a>the New School</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramItem;
