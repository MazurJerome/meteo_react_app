import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import Home from "./pages/Home";
import Error from "./pages/404";
import Position from "./pages/Position";
import Positions from "./pages/Positions";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
	return (
		<div className="App">
			<LoadScript googleMapsApiKey="AIzaSyCUx-2IBM3iqk3aXMAZ1TU_Xo92vHYzn8Y">
				<Routes>
					<Route exact="true" path="/" element={<Home />} />
					<Route exact="true" path="/Login" element={<Login />} />
					<Route exact="true" path="/Position" element={<Position />} />
					<Route exact="true" path="/Positions" element={<Positions />} />
					<Route exact="true" path="/User" element={<User />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</LoadScript>
		</div>
	);
}

export default App;
