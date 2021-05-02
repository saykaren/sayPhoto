import React from "react";
import SpecificCharacterURL from "./SpecificCharacterURL";

const openSpecific = (pullUrl, setModal, modal) => {
  console.log(pullUrl);
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
