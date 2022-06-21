import React, { useRef, useState } from "react";
import Styles from "../style/index.module.less";

interface TabItemPropsType {
  displayName: string;
}

interface TabItemProps {
  name: string;
  label: string;
}

interface TabItem {
  props: TabItemProps;
  type: TabItemPropsType;
}

const Tab = ({ children, onChange }: any) => {
  const activeIndex = useRef<any>(null);
  const [, forceUpdate] = useState<any>({});
  // 提供tab使用
  const tabList: any = [];
  // 带渲染组件
  let renderChild: any = null;
  React.Children.forEach(children,(item: TabItem) => {
    if (React.isValidElement(item) && item.type.displayName === "tabItem") {
      const { props } = item;
      const { name = "", label = "" } = props;
      const tabItem = {
        name,
        label,
        active: name === activeIndex.current,
        component: item,
      };
      if (name === activeIndex.current) {
      
        renderChild = item;
      }
      tabList.push(tabItem);
    }

    // 初次渲染
    if (!renderChild && tabList.length > 0) {
      const fisrtChildren = tabList[0];
      renderChild = fisrtChildren.component;
      fisrtChildren.active = true;
    }
  });

  const changeTab = (name: any) => {
    activeIndex.current = name;
    forceUpdate({});
    onChange && onChange(name);
  };
  return <div className={Styles.tab}>
    <div className={Styles.header}>
      {
        tabList.map((tab: any, index: number) => (
          <div className={Styles.item} key={index}  onClick={() => changeTab(tab.name)} >
              <div className={Styles.text}  >{tab.label}</div>
              {tab.active && <div className={Styles.activeBr} ></div>}
          </div>
      ))
      }
    </div>
    <div>{renderChild}</div>
  </div>;
};

Tab.displayName = 'tab' 

export default Tab;
