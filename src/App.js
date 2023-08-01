import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import NavBar from "./components/common/navbar";
import Rental from "./components/rental";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import LoginForm from "./components/common/loginForm";
import "./App.css";
import RegisterForm from "./components/common/registerForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/movies/:id" Component={MovieForm} />
          <Route path="/movies" Component={Movies} />
          <Route path="/Rental" Component={Rental} />
          <Route path="/not-found" Component={NotFound} />
          <Route path="/customers" Component={Customers} />
          <Route path="/Login" Component={LoginForm} />
          <Route path="/register" Component={RegisterForm} />
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
