import React, { useEffect } from "react";
import axios from "axios";
import { UserId } from "../redux/actions/actionDec";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style/style.css";

const TelegramDescription = () => {
  const params = useParams().productId;
  const dispatch = useDispatch();

  const data = useSelector((state) => state);
  console.log(data);

  const axiosId = async () => {
    const resId = await axios.get(`https://fakestoreapi.com/users/${params}`);
    const resData = resId.data;

    dispatch(UserId(resData));
  };

  useEffect(() => {
    axiosId();
  }, []);

  return (
    <div className="column border">
      <div className="user">
        <div className="ui feed">
          <div className="event ">
            <div className="label">
              <img
                style={{ width: "100px" }}
                src="https://i.pravatar.cc"
                alt="rasm NO"
              />
            </div>
            <div className="content ps-5">
              <h2>Coworkers</h2>
              <div className="ps-3">
                <p>salom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramDescription;
