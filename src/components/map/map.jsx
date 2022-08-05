import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
const Map = (props) => {
	const latitude = props.lat ? props.lat : 37.5;
	const longitude = props.lng ? props.lng : 127;

	const [location, setLocation] = useState({
		lat: latitude,
		lng: longitude,
	});

	useEffect(() => {
		console.log("map rendered");
		setLocation({
			lat: latitude,
			lng: longitude,
		});
	}, [props]);
	const changeLocation = ({ latLng }) => {
		setLocation({ lat: latLng.lat(), lng: latLng.lng() });
	};

	return (
		<LoadScript googleMapsApiKey="AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4">
			<GoogleMap
				mapContainerStyle={{ width: "100%", height: "500px" }}
				zoom={10}
				center={{ lat: location.lat, lng: location.lng }}
				onClick={(e) => changeLocation(e)}
			>
				<Marker position={{ lat: location.lat, lng: location.lng }}></Marker>
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
