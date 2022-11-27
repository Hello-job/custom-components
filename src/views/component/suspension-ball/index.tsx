import React, { useState, useEffect, useRef } from "react";
import Styles from "./index.module.less";

const Ball = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  //   const { current: ballDom } = ballRef || {};
  const ballDom = document.getElementById("ball");
  useEffect(() => {
    const handleMove = (e: any) => {
      const currentMove = (e: any) => {
        if (ballDom) {
          let left = e.clientX - ballDom?.clientWidth / 2;
          let top = e.clientY - ballDom?.clientHeight / 2;
          if (left < 0) {
            left = 0;
          } else if (left > document.body.clientWidth - ballDom?.clientWidth) {
            left = document.body.clientWidth - ballDom?.clientWidth;
          }
          if (top < 0) {
            top = 0;
          } else if (top > document.body.clientHeight - ballDom?.clientHeight) {
            top = document.body.clientHeight - ballDom?.clientHeight;
          }
          ballDom.style.left = left + "px";
          ballDom.style.top = top + "px";
        }
      };
      const setUp = () => {
        ballDom && ballDom.removeEventListener("mousemove", currentMove);
        ballDom && ballDom.removeEventListener("mouseup", setUp);
        ballDom && ballDom.removeEventListener("mousemove", handleMove);
      };
      ballDom && ballDom.addEventListener("mousemove", currentMove);
      ballDom && ballDom.addEventListener("mouseup", setUp);
    };
    ballDom && ballDom.addEventListener("mousedown", handleMove);
  }, []);

  return <div className={Styles.ball} id="ball" ref={ballRef}></div>;
};

export default Ball;
