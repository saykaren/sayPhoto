import React from 'react';



const CharacterCard = ({dataPoint, dataIndex}) => {
    return ( 
        
            <div key={dataIndex} className="card">
              <h3>Name: {dataPoint.name}</h3>
              <img src={dataPoint.image} />
              <p>Origin: {dataPoint.origin.name}</p>{" "}
              <p>Status: {dataPoint.status}</p>
            </div>
         
     );
}
 
export default CharacterCard;