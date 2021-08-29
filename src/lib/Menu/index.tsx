import React, { FC, useState, useRef, useCallback, useEffect } from "react";
import "./style.css";

import { MenuProps } from "viniciussslima";

const Menu: FC<MenuProps> = ({ show, onHide, anchor, children }) => {
  const [position, setPosition] = useState<DOMRect>();

  const menuRef = useRef<HTMLUListElement>(null);

  const hide = useCallback(
    (event: Event) => {
      const node = menuRef.current;
      if (
        node &&
        event.target !== node &&
        !node.contains(event.target as HTMLElement) &&
        event.target !== anchor
      ) {
        onHide();
      }
    },
    [anchor, onHide]
  );

  useEffect(() => {
    if (anchor) {
      setPosition(anchor.getBoundingClientRect());
    }
  }, [anchor]);

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
      {position && show ? (
        <ul
          className="menu-container"
          style={{
            minWidth: position.width,
            left: position.x,
            top: position.y + position.height + 2,
          }}
          ref={menuRef}
        >
          {children}
        </ul>
      ) : null}
    </>
  );
};

export default Menu;
