import React from "react";
import Pagination from "./Pagination";

const EpisodesRicky = ({ episodeList, setEpisodeURL }) => {
  const { data, status } = episodeList;

  return (
    <>
      <h2>Episodes</h2>
      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          <Pagination setState={setEpisodeURL} data={data} />
          <div className="card_section">
            {data.results.map((dataPoint, dataIndex) => (
              <div key={dataIndex} className="card">
                <h3>Episode Name: {dataPoint.name}</h3>
                <p>Episode Number: {dataPoint.episode}</p>
                <p>Aired: {dataPoint.air_date}</p>
              </div>
            ))}
          </div>
          <Pagination setState={setEpisodeURL} data={data} />
        </>
      )}
    </>
  );
};

export default EpisodesRicky;
