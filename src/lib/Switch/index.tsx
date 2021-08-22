import React, { FC } from "react";
import "./style.css";

import { SwitchProps } from "viniciussslima";

/**
 *
 * @param check boolean
 * @param onChange (value: boolean) => void
 * @param text string
 * @param checkColor color
 * @param unCheckColor color
 *
 */

const Switch: FC<SwitchProps> = ({
  check,
  onChange,
  text,
  checkColor = "green",
  unCheckColor = "#808080",
}) => {
  return (
    <div className="switch-container">
      <div className="switch-content" onClick={() => onChange(!check)}>
        <div
          className="switch-line"
          style={
            check
              ? { backgroundColor: checkColor }
              : { backgroundColor: unCheckColor }
          }
        ></div>
        {check ? (
          <div
            className="switch-circle-right"
            style={
              check
                ? { borderColor: checkColor }
                : { borderColor: unCheckColor }
            }
          ></div>
        ) : (
          <div
            className="switch-circle-left"
            style={
              check
                ? { borderColor: checkColor }
                : { borderColor: unCheckColor }
            }
          ></div>
        )}
      </div>
      <span>{text}</span>
    </div>
  );
};

export default Switch;
