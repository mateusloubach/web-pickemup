import { useState } from 'react';
import Map from './components/map';
import './App.css';
import points from './points';

// const token = localStorage.getItem("token") ?? "0"
const token = "12345";

export default function App() {
  let details = useState(points)[0];

  // useEffect(() => {
  //   async function getPoints() {
  //     let response = await fetch(`http://localhost:5000?token=${token}`)
  //     let details = await response.json()

  //     setDetails(details)
  //   }

  //   getPoints()
  // }, [])

  return (
    <div className="App">
      {details ? <Map details={details} token={token} /> : <p>Loading...</p>}
    </div>
  );
}