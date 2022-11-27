import React, { memo } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./style/index.module.less";
import { RootState, Dispatch } from "../../../module/store";
import { Kanban } from "../../../components/index";

const ProjectKanban = () => {
  const userState = useSelector((state: RootState) => state.trello); //取得store下面的login model，后面就可以userState.userInfo取得userInfo里面的内容了

  const dispatch = useDispatch() as Dispatch; //取得dispatch

  return (
    <div className={Styles.KanbanBox}>
      <Kanban />
    </div>
  );
};

export default memo(ProjectKanban);
