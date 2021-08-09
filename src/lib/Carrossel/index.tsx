import React, { FC, useRef, useState, useCallback, useEffect } from "react";
import "./style.css";

import leftIcon from "../assets/carrossel/left.svg";
import rightIcon from "../assets/carrossel/right.svg";

const Carrossel: FC<CarrosselProps> = ({ children, qty, timeout }) => {
  const content = useRef<HTMLDivElement>(null);

  const [canClick, setCanClick] = useState(true);

  const goBack = useCallback(() => {
    if (content.current !== null && canClick) {
      if (content.current.scrollLeft > 0) {
        let nextScroll = content.current.scrollLeft - 220;
        content.current.scroll(nextScroll, nextScroll);
      } else {
        content.current.scroll(220 * children.length, 220 * children.length);
      }
    }
    setCanClick(false);
  }, [canClick, children]);

  const goForward = useCallback(() => {
    if (content.current !== null && canClick) {
      if (
        content.current.scrollWidth - content.current.scrollLeft !==
        220 * qty
      ) {
        let nextScroll = content.current.scrollLeft + 220;
        content.current.scroll(nextScroll, nextScroll);
      } else {
        content.current.scroll(0, 0);
      }
    }
    setCanClick(false);
  }, [canClick, qty]);

  useEffect(() => {
    let valid: boolean = true;
    if (Array.isArray(children)) {
      valid = children.every(
        (element) => element.type.name === "CarrosselItem"
      );
    } else if (children.type.name !== "CarrosselItem") {
      valid = false;
    }

    if (!valid) {
      throw new Error(
        "The Carrossel component must have only children of type CarrosselItem component"
      );
    }
  }, [children]);

  useEffect(() => {
    if (qty <= 0) {
      throw new Error("The carrossel component must have at least qty = 1");
    }
  }, [qty]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timeout) {
      interval = setInterval(goForward, timeout);
    }

    return () => clearInterval(interval);
  }, [children, goForward, timeout]);

  useEffect(() => {
    let timeout = setTimeout(() => setCanClick(true), 500);
    return () => clearTimeout(timeout);
  });

  return (
    <>
      <div className="carrossel-container">
        <img
          className="carrossel-button"
          src={leftIcon}
          alt="< button"
          onClick={goBack}
        />
        <div
          className="carrossel-content"
          style={{ width: 220 * qty }}
          ref={content}
        >
          {children}
        </div>
        <img
          className="carrossel-button"
          src={rightIcon}
          alt="> button"
          onClick={goForward}
        />
      </div>
    </>
  );
};

export default Carrossel;
