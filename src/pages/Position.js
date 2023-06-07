import Header from "../components/Header";
import "../style/menu.css";
import "../style/position.css";
import Map from "../components/Map";
import React, { useState } from "react";

const App = () => {
	const [position, setPosition] = useState({ lat: 48.8566, lng: 2.3522 }); // Position initiale sur Paris

	const handleMapClick = (event) => {
		setPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
	};

	return (
		<div className="position">
			<Header />
			<Map position={position} onMapClick={handleMapClick} />
		</div>
	);
};

export default App;
