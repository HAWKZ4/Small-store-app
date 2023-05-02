import React from "react";
import Shade from "../../assets/shade.png";
import css from "./Virtual.module.css";
import ReactCompareImage from "react-compare-image";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";

const Virtual = () => {
  return (
    <div className={css.virtual}>
      <div className={css.left}>
        <span>VIRTUAL TRY-ON</span>
        <span>NEVER BUY THE WRONG SHADE AGAIN!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="" />
      </div>

      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
