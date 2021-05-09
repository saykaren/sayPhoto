import React, { useState } from "react";
import ModalCharacter from "./ModalCharacter";

const FilteredSection = ({ data }) => {
  const [filtered, setFiltered] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const editSearch = (e) => {
    setSearchTerm(e);
    setFiltered(
      data.filter((x) =>
        x.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    );
  };

  return (
    <>
      {filtered && (
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => editSearch(e.currentTarget.value)}
          placeholder="Character Name"
        />
      )}
      <div className="card_section">
        {filtered &&
          filtered.map((dataPointFiltered, dataIndex) => (
            <div key={dataIndex} className="card alignTogether">
              <ModalCharacter dataDetails={dataPointFiltered} />
            </div>
          ))}
      </div>
    </>
  );
};

export default FilteredSection;
