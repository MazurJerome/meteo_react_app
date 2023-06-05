import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/404";
import Settings from "./pages/Settings";
import Position from "./pages/Position";
import Login from "./pages/Login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact="true" path="/" element={<Home />} />
				<Route exact="true" path="/Settings" element={<Settings />} />
				<Route exact="true" path="/Login" element={<Login />} />
				<Route exact="true" path="/Position" element={<Position />} />
				<Route exact="true" path="/Position/:id" element={<Position />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
