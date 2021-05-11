import React from "react";

const Pagination = ({ setState, data }) => {
  return (
    <div className="pagination">
      {data.info.prev && (
        <button onClick={() => setState(data.info.prev)}>
          Previous
        </button>
      )}
      {data.info.next && (
        <button onClick={() => setState(data.info.next)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
