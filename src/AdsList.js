import React, { useEffect, useState } from "react";
import axios from "axios";

const AdsList = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4545/Ads")
      .then(response => {
        setAds(response.data.Ads);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching ads:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading ads...</p>;

  return (
    <div>
      <h2>List of Ads</h2>
      <ul>
        {ads.map(ad => (
          <li key={ad._id}>
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            <p>Category: {ad.category}</p>
            <p>Price: ${ad.price}</p>
            <p>City: {ad.city}</p>
            <img src={ad.image} alt={ad.title} style={{ width: "200px", height: "150px" }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdsList;
