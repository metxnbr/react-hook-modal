import React from "react";
import Modal from "./components/Modal";
import PopupB from "./components/PopupB";

export default ({ show, makeClose }) => {
  return (
    <Modal show={show} pos={{ vertical: 50, horizontal: 'middle' }}>
      <PopupB makeClose={makeClose} />
    </Modal>
  );
};
