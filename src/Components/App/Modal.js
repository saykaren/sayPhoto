import React from "react";
import SpecificCharacterURL from "./SpecificCharacterURL";

const openSpecific = (pullUrl, setModal, modal) => {
  return (
    <SpecificCharacterURL
      indexUser={pullUrl}
      className={modal ? "modal" : "modal-close"}
      setModal={setModal}
      modal={modal}
    />
  );
};

export default openSpecific;
