import React, { useState, memo, useMemo, useEffect, useRef } from "react";
import { Input } from "antd";
import { dataList } from "./constant";
import Styles from "./style/index.module.less";
interface AtInputProps {
  list?: any[];
}

// 匹配空格正则
const spaceReg = new RegExp(/\s+/g);

const { TextArea } = Input;

const AtInput: React.FC<AtInputProps> = () => {
  const [content, setContent] = useState<string>("");
  const [atIndex, setAtIndex] = useState<number>(0);
  const [cursorIndex, setCursorIndex] = useState<number>(0);
  const [list, setList] = useState<any>(dataList);
  const [htmlStr, setHtmlStr] = useState<string>("");
  const [blockOfset, setBlockOfset] = useState<any>({
    offsetLeft: 0,
    offsetTop: 0,
  });
  const popRef = useRef<any>(null);
  const TextAreaRef = useRef<any>(null)
  const [listModalVisible, setListModalVisible] = useState(false);

  const textAreaChange = (e: any) => {
    setContent(e.target.value);
    setCursorIndex(e.target.selectionEnd - 1);
  };

  const getAtList = (str: string) => {
    const searchList = dataList.filter((item: any) => {
      if (item.name.includes(str)) {
        return item;
      }
    });
    setList(searchList || []);
  };

  const popPosition = () => {
    if (document.getElementById("atid")) {
        const atBlock: any = document.getElementById("atid");
        let offset = {
          offsetLeft: atBlock?.offsetLeft,
          offsetTop: atBlock?.offsetTop + 30,
        };
        setBlockOfset(offset);
      }
  }

  useEffect(() => {
    popPosition()
  }, [htmlStr]);

  useEffect(() => {
    handleChange();
  }, [content, cursorIndex]);

  useEffect(() => {
    function handler(event: { target: any }) {
      if (!popRef?.current.contains(event.target)) {
        setListModalVisible(false);
      }
    }

    window.addEventListener("click", handler);
    window.addEventListener("mousedown", handler);
    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    function handleResize(){
        const popdom: any = document.getElementById('popList')
       let distanceBottom = window.innerHeight - (popdom.offsetTop - window.pageYOffset) - popdom.offsetHeight
       if (distanceBottom <= 0) {
        let offset = {
            ...blockOfset,
            offsetTop: -popdom.offsetHeight
          };
          setBlockOfset(offset);
       }  else if (distanceBottom >= popdom.offsetHeight) {
        popPosition()
       }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [blockOfset])

  const handleChange = () => {
    const ati = content.substring(0, cursorIndex + 1).lastIndexOf("@");
    setAtIndex(ati);
    const searchStr = content.substring(ati + 1, cursorIndex + 1);
    if (
      (ati === cursorIndex ||
        (!/ /.test(searchStr) && searchStr && !/\n/gi.test(searchStr))) &&
      ati !== -1
    ) {
      getAtList(searchStr);
      const htmlAtposition =
        content.substring(0, ati + 2) + "<span id='atid'>@</span>";
      setHtmlStr(htmlAtposition);
      setListModalVisible(true);
    } else {
      setListModalVisible(false);
    }
  };

  const selectAtdata = (item: any) => {
    const strbefore = content.substring(0, atIndex+1);
    const strafter = content.substring(cursorIndex+1, content.length);
    const mergeStr = `${strbefore}${item.name} ${strafter}`
    console.log('>>>>>strbefore', strbefore, strafter, mergeStr)
    setContent(mergeStr)
    setListModalVisible(false)
    TextAreaRef.current.focus()
  };

  return (
    <div ref={popRef} className={`${Styles.atComponent}`}>
      <TextArea
        ref={TextAreaRef}
        onChange={textAreaChange}
        onClick={(e: any) => {
          setCursorIndex(e.target.selectionEnd - 1);
        }}
        value={content}
      ></TextArea>
      <div
        className={`${Styles.hideBlock}`}
        dangerouslySetInnerHTML={{ __html: htmlStr }}
      ></div>
      {listModalVisible ? (
        <>
          <ul
          id='popList'
            className={`${Styles.datalist}`}
            style={{
              left: blockOfset.offsetLeft + "px",
              top: blockOfset.offsetTop + "px",
            }}
          >
            <li>请输入关键字搜索</li>
            {list.map((item: any) => {
              return (
                <li key={item.id} onClick={() => {
                    selectAtdata(item)
                }}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default memo(AtInput);
