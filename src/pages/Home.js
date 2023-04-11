import Header from "../components/Header";
import Search from "../components/Search";
import Widget from "../components/Widget";
import "../style/menu.css";

function Home() {
	return (
		<div>
			<div className="menu_Body">
				<Header />
				<body>
					<Search />
					<div className="body_top">
						<div className="widget">
							<Widget />
						</div>
						<div className="weather_overwiew"></div>
					</div>
					<div className="weather_prediction"></div>
					<div className="body_bottom">
						<div className="average_weekly_temperature"></div>
						<div className="average_daily_rainfall"></div>
					</div>
				</body>
			</div>
		</div>
	);
}

export default Home;
