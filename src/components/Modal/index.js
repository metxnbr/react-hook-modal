import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./styles.module.css";

const Modal = ({ children, show, layerStyle, pos, makeCloseItself }) => {
  const popEl = useRef(null);
  const [offset, setOffset] = useState({});

  useLayoutEffect(() => {
    // 弹窗弹出, 禁止窗口滚动
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [show]);

  const adjustPos = ({ offset, pos }) => {
    const { width, height } = offset;

    let { vertical, horizontal } = pos;

    horizontal = horizontal === "center" ? "50%" : `${horizontal}px`;
    vertical = vertical === "center" ? "50%" : `${vertical}px`;

    const marginLeft =
      horizontal === "center" ? { marginLeft: `-${width / 2}px` } : {};
    const marginTop =
      vertical === "center" ? { marginTop: `-${height / 2}px` } : {};

    return {
      left: horizontal,
      top: vertical,
      ...marginLeft,
      ...marginTop
    };
  };

  useLayoutEffect(() => {
    if (popEl && show) {
      const width = popEl.current.offsetWidth;
      const height = popEl.current.offsetHeight;
      const offset = adjustPos({ offset: { width, height }, pos });
      setOffset(offset);
    }
    return () => {};
  }, [show]);

  const wrapClass = show ? `${styles.wrap} ${styles.show}` : styles.wrap;

  return (
    <div className={wrapClass}>
      <div
        className={styles.layer}
        style={layerStyle}
        onClick={makeCloseItself}
      />
      <div className={styles["pop-wrap"]} ref={popEl} style={offset}>
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  show: false,
  makeCloseItself: () => {},
  pos: {
    vertical: "center",
    horizontal: "center"
  },
  layerStyle: {}
};

export default Modal;
