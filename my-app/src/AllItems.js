
import React, { useState ,useEffect} from 'react';
import Items from './Items';

export default function AllItems() {
  let [fetchData, setfetchData] = useState("");

  const apiData = () => {
    fetch("https://624c8038c172b69d6925e371.mockapi.io/api/t/item")
      .then((res) => res.json())
      .then((response) => setfetchData(response));
    };
    useEffect(() => {
      apiData();
    }, []);
    // console.log(fetchData);
  return (
    <div className="allitem">
    <h3>
        ALL ITEMS
    </h3>
    <hr/>
    {fetchData && fetchData.length>0 && fetchData.map(i=><Items data={i}/>)}
    </div>
   
  )
}
