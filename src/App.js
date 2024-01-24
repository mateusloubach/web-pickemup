import { useState } from "react";
import Map from "./pages/map";
import points from "./points.js";
import "./App.css";
import Home from "./pages/home";
import SignUpForm from "./pages/register";
import Destination from "./pages/destination";
import { Link, Route, Routes } from "react-router-dom";
import BookList from "./pages/bookList";
import Book from "./pages/book";
import NewBook from "./pages/newBook";
import { createTheme, ThemeProvider } from "@mui/material";
import themes from "./pages/theme";

// const token = localStorage.getItem("token") ?? "0"
const token = "12345";

export default function App() {
  let details = useState(points)[0];

  return (
    <ThemeProvider theme={themes}>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/personal" element={<SignUpForm />}>
            <Route index element={<BookList />} />
            <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
          </Route>
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