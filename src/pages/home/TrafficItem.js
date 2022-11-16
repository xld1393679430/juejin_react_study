import React, { useState, useEffect, useMemo, useRef } from "react";
import classNames from "classnames";
import "./index.css";

const map = {
  1: "red",
  2: "green",
  3: "yellow",
};

const TrafficItem = ({ title, time, index: idx, len = 3 }) => {
  const cur = useRef(0);
  const [index, sertIndex] = useState(cur.current);

  useEffect(() => {
    setInterval(() => {
      if (cur.current >= len - 1) {
        cur.current = 0;
      } else {
        cur.current++;
      }
      sertIndex(cur.current);
    }, time);
  }, [time]);

  const classes = useMemo(() => {
    return classNames("item", {
      [map[index + 1]]: index === idx,
    });
  }, [index, idx]);

  return <div className={classes}></div>;
};

export default TrafficItem;
