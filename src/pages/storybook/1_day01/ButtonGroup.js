import React from "react";
import classNames from "classnames";

const ButtonGroup = (props) => {
  const { children, className, btnType, backgroundColor, style, buttons, orientation, Wrap = "div", ...rest } = props;
  const classes = classNames("btn-default", className, {
    [`btn-${btnType}`]: btnType,
  });

  const styles = {
    ...style,
    display: "flex",
    flexDirection: orientation === "horizontal" ? "row" : "column",
    backgroundColor,
  };

  return (
    <Wrap {...rest} className={classes} style={styles}>
      {buttons?.map((item, index) => {
        if (orientation === "horizontal") {
          return <button key={index} {...item} />;
        } else {
          return (
            <div key={index}>
              <button key={index} {...item} />
            </div>
          );
        }
      })}
    </Wrap>
  );
};

export default ButtonGroup;
