import React from "react";
import SpecificCharacterURL from "./SpecificCharacterURL";

const LocationsRicky = ({ characterList, locationList, episodeList }) => {
  const { data, status } = locationList;

  return (
    <div>
      <h2>Locations</h2>

      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          {data.results.map((dataPoint, dataIndex) => (
            <div key={dataIndex} className="card">
              <h3 key={`location{dataIndex}`}>
                Location Name: {dataPoint.name}
              </h3>
              <p key={`type{dataIndex}`}> Type: {dataPoint.type}</p>
              <div key={`residents{dataIndex}`}>
                Residents:{" "}
                {dataPoint.residents.map((resident, indexR) => (
                  <>
                    {/* {<SpecificCharacterURL indexUser={resident}/>} */}
                    {/* shouldn't do the above as that is too many fetches --- ask Dave how to get from cache */}
                  </>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LocationsRicky;
