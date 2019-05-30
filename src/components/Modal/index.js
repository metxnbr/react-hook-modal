import React, { useLayoutEffect } from "react";
import styles from "./styles.module.css";

const Modal = ({
  children,
  show,
  layerStyle,
  enableLayerClose,
  makeCloseItself
}) => {
  useLayoutEffect(() => {
    // 弹窗弹出, 禁止窗口滚动
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [show]);

  const wrapClass = show ? `${styles.wrap} ${styles.show}` : styles.wrap;

  return (
    <div className={wrapClass}>
      <div
        className={styles.layer}
        style={layerStyle}
        onClick={makeCloseItself}
      />
      {children}
    </div>
  );
};

Modal.defaultProps = {
  show: false,
  makeCloseItself: () => {},
  layerStyle: {}
};

export default Modal;
