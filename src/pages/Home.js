import Header from "../components/Header";
import Search from "../components/Search";
import Widget from "../components/Widget";
import Overwiew from "../components/Overwiew";
import Prediction from "../components/Prediction";
import "../style/menu.css";

function Home() {
	return (
		<div>
			<div className="menu_Body">
				<Header />
				<body>
					<Search />
					<div className="body_top">
						<div className="body_widget">
							<Widget />
						</div>
						<div className="weather_overwiew">
							<Overwiew />
						</div>
					</div>
					<div className="weather_prediction">
						<Prediction />
					</div>
				</body>
			</div>
		</div>
	);
}

export default Home;
