import React, { memo } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Item from "../DragItem";
import Styles from "./style/index.module.less";

const Column = (props: any) => {
  const { row, index } = props;
  const getItemStyle = (isDragging: boolean, draggableStyle: any) => {
    return {
      userSelect: "none",
      // background: isDragging ? 'lightgreen' : 'grey',
      ...draggableStyle,
    };
  };
  return (
    <Draggable draggableId={row.columnId + ""} index={index} key={row.columnId}>
      {(columnsProvided: any, snapshot1: any) => (
        <div
          key={`dropable${row.columnId}`}
          ref={columnsProvided.innerRef}
          {...columnsProvided.draggableProps}
          className={Styles.Column}
        >
          <h3 {...columnsProvided.dragHandleProps}>{row.title}</h3>
          <Droppable droppableId={row.columnId + ""} type="task">
            {(provided: any, snapshot2: any): any => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={Styles.ColumnRow}
              >
                {row.list.map((item: any, index: number) => {
                  return (
                    <Draggable
                      draggableId={item.id + "_" + row.columnId}
                      index={index}
                      key={item.id}
                    >
                      {(providedItem: any, snapshot3: any) => (
                        <div
                          ref={providedItem.innerRef}
                          {...providedItem.draggableProps}
                          {...providedItem.dragHandleProps}
                          className={Styles.dragitem}
                        >
                          <Item list={item} />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default memo(Column);
