import React, { memo } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./components/Column";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Dispatch } from "../../module/store";
import { data } from "./constant";
import Styles from "./style/index.module.less";

interface KanbanProps {
  data?: any;
}

const Kanban: React.FC<KanbanProps> = () => {
  const projectList = useSelector(
    (state: RootState) => state.trello.projectList
  );
  const dispatch = useDispatch() as Dispatch; //取得dispatch

  const sortData = (
    list: any[],
    sourceIndex: number,
    destinationIndex: number,
    sourceItem: any
  ) => {
    list.splice(sourceIndex, 1);
    list.splice(destinationIndex, 0, sourceItem);
    return list;
  };

  const onDragEnd = (Draginfo: any) => {
    const { destination, source, type } = Draginfo;
    const destinationIndex = destination.index;
    const sourceIndex = source.index;
    let newProjectList = JSON.parse(JSON.stringify(projectList));
    if (type === "column") {
      const sourceItem = projectList[sourceIndex];
      sortData(newProjectList, sourceIndex, destinationIndex, sourceItem);
    } else if (type === "task") {
      //  泳道内移动
      if (destination.droppableId === source.droppableId) {
        let columnItem = newProjectList.find(
          (item: any) => item.columnId === +destination.droppableId
        );
        const { list } = columnItem;
        const sourceItem = list[sourceIndex];
        sortData(list, sourceIndex, destinationIndex, sourceItem);
      } else {
        let columnItem = newProjectList.find(
          (item: any) => item.columnId === +source.droppableId
        );
        const { list } = columnItem;
        const sourceItem = list[sourceIndex];
        list.splice(sourceIndex, 1);
        let destinationColumnItem = newProjectList.find(
          (item: any) => item.columnId === +destination.droppableId
        );
        const { list: destList } = destinationColumnItem;
        destList.splice(destinationIndex, 0, sourceItem);
      }
    }
    dispatch.trello.increment(newProjectList);
  };

  const onDragStart = (e: any) => {};

  const onDragUpdate = (e: any) => {};
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      key="trelloDragDropContext"
    >
      <Droppable droppableId="droppableId" direction="horizontal" type="column">
        {(provided) => (
          <div
            id={"com_widget_trello_setshowfilter"}
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={Styles.DragContent}
          >
            {projectList.map((item: any, i: number) => {
              return <Column row={item} key={item.columnId} index={i} />;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default memo(Kanban);
