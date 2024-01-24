import { useState } from "react";
import Map from "./pages/map/map";
import points from "./utils/points";
import "./styles/App.css";
import Home from "./pages/home/home";
import SignUpForm from "./pages/registerPage/forms/personal";
import Destination from "./pages/registerPage/forms/destination";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import themes from "./utils/theme";
import MapPage from "./pages/map/mapPage";
import Form from "./pages/form/form";
import DatePickerField from "./pages/registerPage/formFields/datePickerField";

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
    <ThemeProvider theme={themes}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/personal" element={<SignUpForm />} />
          <Route path="/register" element={<Form />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/picker" element={<DatePickerField />} />
          <Route
            path="/map"
            element={<Map details={details} token={token} />}
          />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}