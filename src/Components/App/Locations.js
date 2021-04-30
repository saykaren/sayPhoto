import React, { useState } from "react";
// import SpecificCharacterURL from "./SpecificCharacterURL";

const LocationsRicky = ({ characterList, locationList, episodeList }) => {
  const { data, status } = locationList;
  const [residentsShow, setResidentsShow] = useState(false);

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
                    Residents:{" "}
                    {residentsShow ? (
                      <div onClick={() => setResidentsShow(!residentsShow)}>
                        WHOOPS YOU SAW THAT?
                      </div>
                    ) : (
                      <div onClick={() => setResidentsShow(!residentsShow)}>
                        COMING SOON!
                      </div>
                    )}
                    {residentsShow &&
                      dataPoint.residents.map((resident, indexR) => (
                        <div key={indexR}>
                          {resident}
                          {/* {<SpecificCharacterURL indexUser={resident}/>} */}
                          {/* shouldn't do the above as that is too many fetches --- ask Dave how to get from cache */}
                        </div>
                      ))}
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
