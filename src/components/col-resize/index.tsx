import React, { useEffect, MutableRefObject, useRef } from "react";
import { ColResizeProps } from "./interface";
import "./style/index.less";

const ColResize = (props: ColResizeProps) => {
  const { initWidth, minWidth, MaxWidth, setSideWidth } = props;

  const dragResizeRef = useRef<any>(null);
  useEffect(() => {
    const { current } = dragResizeRef;
    const handleMouseDown = (e: any) => {
      current.style.background =
        "linear-gradient(135deg, #fc7bc2 0%, #377aff 46%, #377aff 100%, #8d7ae4 100%)";
      const resize = (e: any) => {
        let newSideWidth = e.clientX;
        if (newSideWidth <= minWidth) {
          newSideWidth = minWidth;
        }
        if (newSideWidth >= MaxWidth) {
          newSideWidth = MaxWidth;
        }
        setSideWidth(newSideWidth);
      };
      const resizeUp = () => {
        document.removeEventListener("mousemove", resize);
        document.removeEventListener("mouseup", resizeUp);
        current.style.background = "transparent";
      };
      document.addEventListener("mouseup", resizeUp);
      document.addEventListener("mousemove", resize);
    };
    current?.removeEventListener("mousedown", handleMouseDown);
    current?.addEventListener("mousedown", handleMouseDown);
    return () => {
      current?.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return <div className={`sideMenuSize`} ref={dragResizeRef}></div>;
};

export default ColResize;
