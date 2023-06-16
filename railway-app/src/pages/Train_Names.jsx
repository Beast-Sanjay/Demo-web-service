import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY4ODQ5ODQsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYzVmNmZjNTMtNjMwYS00ZDRiLTgzNjUtZTZlNGM2MzY1MjJjIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjUxIn0.E7jOiHzn2QBRvzjIf3umfdqoVtYfK7fRcyeYDvLcFQE";


export default function TrainNames() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    async function getTrains() {
      try {
        const res = await axios.get('http://104.211.219.98/train/trains', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setResponse(res.data);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }

    getTrains();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">Train Names</h1>
      {response && response.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Train Name</th>
              <th scope="col">Train Number</th>
            </tr>
          </thead>
          <tbody>
            {response.map((train, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                <Link to={{ pathname: `/train/${train.trainNumber}`, state: { train } }}>
  {train.trainName}
  </Link>


                </td>
                <td>{train.trainNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No trains available</p>
      )}
    </div>
  );
}
