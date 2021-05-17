import React from "react";
import MultipleCharacter from "./MultipleCharacter";
import Pagination from "./Pagination";
import MultipleCharacterFetch from "./MultipleCharacterFetch";

const LocationsRicky = ({ locationList, setLocationURL }) => {
  const { data, status } = locationList;

  return (
    <>
      <h2>Locations</h2>

      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          <Pagination setState={setLocationURL} data={data} />
          <div className="card_section">
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
                  <div>
                    <MultipleCharacter
                      buttonName={"Residents"}
                      buttonNoShow={"Uninhabited"}
                      indexUser={dataPoint.residents.map(
                        (urlResident, index) => `${urlResident.slice(42)}`
                      )}
                      category="character/"
                    />
                  </div>
                </section>
              </div>
            ))}
          </div>
          <Pagination setState={setLocationURL} data={data} />
        </>
      )}
    </>
  );
};

export default LocationsRicky;
