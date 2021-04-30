import React from "react";

const EpisodesRicky = ({ characterList, locationList, episodeList }) => {
  const { data, status } = episodeList;

  return (
    <> <h2>Episodes</h2>
    <div className="card_section">
     

      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          {data.results.map((dataPoint, dataIndex) => (
            <div key={dataIndex} className="card">
              <h3>Episode Name: {dataPoint.name}</h3>
              <p>Episode Number: {dataPoint.episode}</p>{" "}
              <p>Characters: eventually pull here</p>
            </div>
          ))}
        </>
      )}
    </div>
    </>
  );
};

export default EpisodesRicky;
