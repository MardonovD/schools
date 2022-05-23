import React from "react";

const TelegramLeftMenu = () => {
  return (
    <div>
      <input placeholder="search" className="form-control" />
      <div className="ui items">
        <div className="item">
          <a className="ui tiny image">
            <img src="/images/avatar/large/stevie.jpg" />
          </a>
          <div className="content">
            <a className="header">Stevie Feliciano</a>
            <div className="description">
              <p>
                Stevie Feliciano is a <a>library scientist</a> living in New
                York City. She likes to spend her time reading, running, and
                writing.
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <a className="ui tiny image">
            <img src="/images/avatar/large/veronika.jpg" />
          </a>
          <div className="content">
            <a className="header">Veronika Ossi</a>
            <div className="description">
              <p>
                Veronika Ossi is a set designer living in New York who{" "}
                <a>enjoys</a> kittens, music, and partying.
              </p>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default TelegramLeftMenu;
