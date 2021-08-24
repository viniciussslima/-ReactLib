import React, { FC, useRef, useState, useEffect } from "react";
import "./styles.css";

import { ListProps } from "viniciussslima";
import { nanoid } from "nanoid";

import DownIcon from "../assets/list/down.svg";

const List: FC<ListProps> = ({ title, collapsible, initOpen, children }) => {
  const listContent = useRef(true);

  const [show, setShow] = useState(!!initOpen);
  const [className, setClassName] = useState(() => {
    if (collapsible) {
      if (initOpen) {
        return "list-content";
      }

      return "list-content-hidden";
    }
    return "list-content";
  });

  useEffect(() => {
    let valid: boolean = true;
    if (Array.isArray(children)) {
      valid = children.every(
        (element) =>
          element.type.name === "ListItem" || element.type.name === "List"
      );
    } else if (
      children.type.name !== "ListItem" ||
      children.type.name === "List"
    ) {
      valid = false;
    }

    if (!valid) {
      throw new Error(
        "The List component must have only children of type ListItem component or List component"
      );
    }
  }, [children]);

  useEffect(() => {
    if (collapsible && (!title || !title.length)) {
      throw new Error("The List collapsible component must have an title");
    }
  }, [title, collapsible]);

  useEffect(() => {
    if (listContent.current) {
      listContent.current = false;
      return;
    }

    let timeout: NodeJS.Timeout;
    if (collapsible) {
      if (show) {
        setClassName("list-content");
      } else {
        setClassName("list-content-collapsible");
        timeout = setTimeout(() => {
          setClassName((className) => className + " list-content-hidden");
        }, 1000);
      }
    } else {
      setClassName("list-content");
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [show, collapsible]);

  const renderListItems = () => {
    if (Array.isArray(children)) {
      return children.map((element) => (
        <li key={nanoid()} className="list-item">
          {element}
        </li>
      ));
    } else {
      return <li className="list-item">{children}</li>;
    }
  };

  const renderList = () => {
    // if (collapsible) {
    //   if (show) {
    //     return renderListItems();
    //   }

    //   return null;
    // }

    return renderListItems();
  };

  return (
    <div className="list-container">
      {title && (
        <div className="list-title-container" onClick={() => setShow(!show)}>
          <span className="list-title">{title}</span>
          {collapsible && (
            <img
              className="list-down-icon"
              src={DownIcon}
              alt="arrow pointing down"
            />
          )}
        </div>
      )}
      <ul className={className} style={{ marginLeft: collapsible ? 5 : 0 }}>
        {renderList()}
      </ul>
    </div>
  );
};

export default List;
