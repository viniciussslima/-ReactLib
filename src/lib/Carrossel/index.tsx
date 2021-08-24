import React, { FC, useRef, useState, useCallback, useEffect } from "react";
import "./style.css";

import { CarrosselProps } from "viniciussslima";
import { nanoid } from "nanoid";

import leftIcon from "../assets/carrossel/left.svg";
import rightIcon from "../assets/carrossel/right.svg";

const Carrossel: FC<CarrosselProps> = ({
  height,
  itemWidth,
  space,
  qty,
  timeout,
  children,
}) => {
  const content = useRef<HTMLDivElement>(null);

  const [canClick, setCanClick] = useState(true);

  const goBack = useCallback(() => {
    if (content.current !== null && canClick) {
      if (content.current.scrollLeft > 0) {
        let nextScroll = content.current.scrollLeft - itemWidth;
        content.current.scroll(nextScroll, nextScroll);
      } else {
        content.current.scroll(
          itemWidth * children.length,
          itemWidth * children.length
        );
      }
    }
  }, [itemWidth, canClick, children]);

  const goForward = useCallback(() => {
    if (content.current !== null && canClick) {
      if (
        content.current.scrollWidth - content.current.scrollLeft !==
        itemWidth * qty
      ) {
        let nextScroll = content.current.scrollLeft + itemWidth;
        content.current.scroll(nextScroll, nextScroll);
      } else {
        content.current.scroll(0, 0);
      }
    }
  }, [itemWidth, canClick, qty]);

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
  }, []);

  return (
    <>
      <div className="carrossel-container" style={{ height }}>
        <img
          className="carrossel-button"
          src={leftIcon}
          alt="< button"
          onClick={goBack}
        />
        <div
          className="carrossel-content"
          style={{ width: itemWidth * qty }}
          ref={content}
        >
          {Array.isArray(children) ? (
            children.map((item) => (
              <div
                key={nanoid()}
                className="carrossel-item-container"
                style={{ width: itemWidth, padding: `0px ${space}px` }}
              >
                {item}
              </div>
            ))
          ) : (
            <div
              className="carrossel-item-container"
              style={{ width: itemWidth }}
            >
              {children}
            </div>
          )}
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
