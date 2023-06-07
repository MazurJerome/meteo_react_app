import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapComponent = ({ position, onMapClick }) => (
	<LoadScript googleMapsApiKey="AIzaSyCUx-2IBM3iqk3aXMAZ1TU_Xo92vHYzn8Y">
		<GoogleMap
			mapContainerStyle={{ width: "100%", height: "400px" }}
			center={position}
			zoom={8}
			onClick={onMapClick}
		></GoogleMap>
	</LoadScript>
);

export default MapComponent;
