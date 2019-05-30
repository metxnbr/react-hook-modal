import React from "react";
import Modal from "./components/Modal";
import PopupA from "./components/PopupA";

export default ({ show, makeClose, makeCloseItself }) => {
  return (
    <Modal show={show} makeCloseItself={makeCloseItself}>
      <PopupA makeClose={makeClose} />
    </Modal>
  );
};
