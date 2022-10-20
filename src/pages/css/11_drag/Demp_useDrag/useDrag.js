import { useCallback, useEffect, useState } from "react";
import { throttle } from "lodash";

// const debounce = lodash.throttle

const useDrag = ({ on }) => {
  const [position, setPosition] = useState({ x: null, y: null });

  const handleMousemove = useCallback(
    throttle((event) => {
      console.log(event, "--event");
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    }, 60),
    []
  );

  useEffect(() => {
    if (on) {
      window.addEventListener("mousemove", handleMousemove);
    } else {
		window.removeEventListener("mousemove", handleMousemove);
	}
    return () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, [on]);

  return position;
};

export default useDrag;
