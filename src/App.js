import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/404";
import APropos from "./pages/APropos";
import Composants from "./pages/Composants";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact="true" path="/" element={<Home />} />
				<Route path="*" element={<Error />} />
				<Route exact="true" path="/APropos" element={<APropos />} />
				<Route exact="true" path="/Composants/:id" element={<Composants />} />
			</Routes>
		</div>
	);
}

export default App;
