import React from "react";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);

  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
      {/* <p>{ status }</p> */}

      {status === "error" && <div>Error Fetching Data</div>}
      {status === "Loading" && <div>Loading Data....</div>}
      {status === "success" && (
        <>
          {data.results.map((dataPoint, dataIndex) => (
            <div key={dataIndex} className="card">
              <h3>Name: {dataPoint.name}</h3>{" "}
              <p>Climate: {dataPoint.climate}</p>{" "}
              <p>Terrain: {dataPoint.terrain}</p>{" "}
            </div>
          ))}
          {/* {data.previous && (<button onClick={()=>fetchNextPlanets(data.previous)}>Previous</button>)}
               {data.next && (<button onClick={()=>fetchNextPlanets(data.previous)}>Next</button>)} */}
        </>
      )}

      {/*     
           {data.results[0] && <div>{data.results.map((planetData, pIndex)=>(
               <div key={pIndex}>Name {planetData.name}</div>
           ))}</div>}  */}
    </div>
  );
};

export default Planets;
