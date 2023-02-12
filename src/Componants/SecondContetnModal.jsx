import { useEffect, useRef, useState } from "react";
import "reactjs-popup/dist/index.css";

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

export default function SecondContetnModal({
  visible,
  children,
  duration = 300,
  animateEnter = false,
  from = { opacity: 0 },
}) {
  const childRef = useRef(children);
  const [test, setTest] = useState();

  const [state, setState] = useState(
    visible ? (animateEnter ? ENTERING : VISIBLE) : HIDDEN
  );

  if (visible) {
    childRef.current = children;
  }

  useEffect(() => {
    if (!visible) {
      setState(LEAVING);
    } else {
      setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
    }
  }, [visible]);

  useEffect(() => {
    if (test) {
      setState(LEAVING);
    }
  }, [test]);

  useEffect(() => {
    if (state === LEAVING) {
      const timer = setTimeout(() => {
        setState(HIDDEN);
      }, duration);
      return () => {
        clearTimeout(timer);
      };
    } else if (state === ENTERING) {
      //   document.body.offsetHeight;
      setState(VISIBLE);
    }
  }, [state]);

  if (state === HIDDEN) {
    return null;
  }
  let className = "fade out";
  if (state === VISIBLE) {
    className = "fade";
  }
  let style = {
    transitionDuration: `${duration}ms`,
    transitionProperty: "opacity transform",
  };
  if (state !== VISIBLE) {
    if (from.opacity !== undefined) {
      style.opacity = from.opacity;
    }
    style.transform = `translateX(${from.x ?? 0}px)`;
  }

  return (
    <div className={className}>
      {childRef.current}
      <button className="btn1">bouton</button>
    </div>
  );
}
