import React from "react";

const Pagination = ({ setState, data }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setState(data.info.prev)}
        disabled={!data.info.prev}
        className={!data.info.prev ? "button-disabled" : "button"}
      >
        Previous
      </button>

      <button
        onClick={() => setState(data.info.next)}
        disabled={!data.info.next}
        className={!data.info.next ? "button-disabled" : "button"}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
