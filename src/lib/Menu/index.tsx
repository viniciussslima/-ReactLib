import React, { FC, useCallback, useEffect } from "react";
import "./style.css";

const Menu: FC<MenuProps> = ({ show, onHide, anchor, children }) => {
  const hide = useCallback(
    (event: Event) => {
      if (event.target !== anchor) {
        onHide();
      }
    },
    [anchor, onHide]
  );

  useEffect(() => {
    let valid: boolean = true;
    if (Array.isArray(children)) {
      valid = children.every((element) => element.type.name === "MenuItem");
    } else if (children.type.name !== "MenuItem") {
      valid = false;
    }

    if (!valid) {
      throw new Error(
        "The Menu component must have only children of type MenuItem component"
      );
    }
  }, [children]);

  useEffect(() => {
    if (show) {
      document.addEventListener("click", hide);
    } else {
      document.removeEventListener("click", hide);
    }

    return () => document.removeEventListener("click", hide);
  }, [hide, show]);

  return (
    <>
      {anchor && show ? (
        <ul
          className="menu-container"
          style={{
            minWidth: anchor.offsetWidth,
            left: anchor.offsetLeft,
            top: anchor.offsetTop + anchor.offsetHeight + 2,
          }}
        >
          {children}
        </ul>
      ) : null}
    </>
  );
};

export default Menu;
