import React, { Fragment, useState, useEffect } from "react";
import "./Loader.css";
import $ from 'jquery'

const Loader = () => {
  const [imageChange, setImageChange] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      $(".circular").fadeOut(200);
    }, 12300);

    setTimeout(() => {
      setImageChange(!imageChange);
    }, 11000);
  }, []);

  return (
    <Fragment>
      <div className="circular">
        <div className="inner">
          {imageChange && <div className="bg__img1"></div>}
          {!imageChange && <div className="bg__img2"></div>}
        </div>
        <div className="outer"></div>
        <div className="circle">
          <div className="dot">
            <span></span>
          </div>
          <div className="bar left">
            <div className="progress"></div>
          </div>
          <div className="bar right">
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Loader;
