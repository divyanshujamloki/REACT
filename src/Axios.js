import React, { useState, useEffect } from 'react';

export default function Axios() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://realtor.p.rapidapi.com/locations/v2/auto-complete';
      const queryParams = {
        input: 'new york',
        limit: '10'
      };

      const headers = {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
      };

      const queryString = new URLSearchParams(queryParams).toString();
      const fullUrl = `${url}?${queryString}`;

      try {
        const response = await fetch(fullUrl, {
          method: 'GET',
          headers: headers
        });

        if (response.ok) {
          const data = await response.json();
          setApiData(data);
        } else {
          console.error('Request failed:', response.status);
        }
      } catch (error) {
        console.error('Request failed:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Axios</h1>
      {apiData && (
        <ul>
          {apiData.data.autocomplete.map((item) => (
            <li key={item.place_id}>{item.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
