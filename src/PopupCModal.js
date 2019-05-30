import React from "react";
import Modal from "./components/Modal";
import PopupC from "./components/PopupC";

export default ({ show, makeClose }) => {
  return (
    <Modal show={show} layerStyle={{backgroundColor: '#fff'}}>
      <PopupC makeClose={makeClose} />
    </Modal>
  );
};
