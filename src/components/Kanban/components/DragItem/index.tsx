import React, { memo } from "react";
import Styles from "./style/index.module.less";
const DragItem = (props: any) => {
  const {
    list: { title },
  } = props;
  return <div className={Styles.Item}>{title}</div>;
};

export default memo(DragItem);
