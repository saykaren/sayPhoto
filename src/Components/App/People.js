import React from 'react';
import {useQuery, QueryClient} from 'react-query';



const fetchPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people/');
    return res.json();
}


const People = () => {
    const {data, status} = useQuery('People', fetchPeople);

    console.log(data);
    return ( <div>
        <h2>People</h2>
        {/* <p>{ status }</p> */}

           {status === 'error' && (
               <div>Error Fetching Data</div>
           )} 
              {status === 'Loading' && (
               <div>Loading Data....</div>
           )} 
              {status === 'success' && (
                  <>
               {data.results.map((dataPoint, dataIndex)=>
                <div key={dataIndex} className="card">
                    <h3>Name: {dataPoint.name}</h3> <p>Eye Color: {dataPoint.eye_color}</p> <p>Birth Year: {dataPoint.birth_year}</p> </div>
              
               )}
               {/* {data.previous && (<button onClick={()=>fetchNextPeople(data.previous)}>Previous</button>)}
               {data.next && (<button onClick={()=>fetchNextPeople(data.previous)}>Next</button>)} */}
               </>
              
           )} 



    </div> );
}
 
export default People;