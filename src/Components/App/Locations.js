import React from "react";
import LocationModal from "./LocationModal";

const LocationsRicky = ({ characterList, locationList, episodeList }) => {
  const { data, status } = locationList;

  return (
    <>
      <h2>Locations</h2>
      <div className="card_section">
        {status === "error" && <div>Error Fetching Data</div>}
        {status === "Loading" && <div>Loading Data....</div>}
        {status === "success" && (
          <>
            {data.results.map((dataPoint, dataIndex) => (
              <div key={dataIndex} className="card">
                <h3 key={`location{dataIndex}`}>
                  Location Name: {dataPoint.name}
                </h3>
                <section>
                  <p key={`type{dataIndex}`}> Type: {dataPoint.type}</p>
                  <p key={`dimension{dataIndex}`}>
                    {" "}
                    Dimension: {dataPoint.dimension}
                  </p>
                  <p key={`creation{dataIndex}`}>
                    {" "}
                    Created: {dataPoint.created.slice(0, 10)}
                  </p>
                  <div key={`residents{dataIndex}`}>
                    <LocationModal residents={dataPoint.residents} />
                  </div>
                </section>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default LocationsRicky;
