import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY4OTMxNzksImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYzVmNmZjNTMtNjMwYS00ZDRiLTgzNjUtZTZlNGM2MzY1MjJjIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjUxIn0.tRw1Z-6pSjKqvYF0pajCHaDGKf0kv3IqX3Zb__d0Rq0";

export default function TrainDetails() {
  const { trainNumber } = useParams();
  const [trainDetails, setTrainDetails] = useState(null);

  useEffect(() => {
    async function fetchTrainDetails() {
      try {
        const response = await axios.get('http://104.211.219.98/train/trains/'+trainNumber, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        setTrainDetails(response.data);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }

    fetchTrainDetails();
  }, [trainNumber]);

  return (
    <div className="container">
    <h1>Train Details</h1>
    <p>For the train number {trainNumber}</p>
    {trainDetails ? (
      <table className="table">
        <thead>
          <tr>
          <th>Train Number</th>
         <th>Train Name</th>
         <th>Departure Time</th>
         <th>Price (Sleeper)</th>
         <th>Price (AC)</th>
         <th>Seats Available (Sleeper)</th>
         <th>Seats Available (AC)</th>
         <th>Delayed By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{trainDetails.trainNumber}</td>
            <td>{trainDetails.trainName}</td>
            <td>
              {trainDetails.departureTime.Hours}:
              {trainDetails.departureTime.Minutes}:
              {trainDetails.departureTime.Seconds}
            </td>
            <td>{trainDetails.price.sleeper}</td>
            <td>{trainDetails.price.AC}</td>
            <td>{trainDetails.seatsAvailable.sleeper}</td>
            <td>{trainDetails.seatsAvailable.AC}</td>
            <td>{trainDetails.delayedBy}</td>
          </tr>
        </tbody>
      </table>
    ) : (
      <p>Loading train details...</p>
    )}
  </div>
  );
}
