import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "../style/Map.css";

const Map = () => {
	const [position, setPosition] = React.useState({
		lat: 48.8566,
		lng: 2.3522,
	});

	const handleMapClick = React.useCallback((event) => {
		setPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
	}, []);

	return (
		<GoogleMap
			mapContainerStyle={{ width: "100%" }}
			center={position}
			zoom={8}
			onClick={handleMapClick}
		>
			{/* Le marqueur sera placé à la position où l'utilisateur a cliqué */}
			<Marker position={position} />
		</GoogleMap>
	);
};

export default Map;
