import "../style/Prediction.css";
import sun from "../images/icone_sun.svg";
import rain from "../images/icone_rain.svg";
import lightning from "../images/lightning.svg";

function Prediction() {
	return (
		<div className="Prediction">
			<h3>Prediction</h3>
			<div className="Prediction_cards">
				<div className="Prediction_dayBday">
					<div className="card">
						<img className="wheather_icon" src={lightning} alt="" />
						<p className="day">lundi</p>
						<p className="temp">24°</p>
					</div>
				</div>
				<div className="Prediction_dayBday">
					<div className="card">
						<img className="wheather_icon" src={sun} alt="" />
						<p className="day">mardi</p>
						<p className="temp">24°</p>
					</div>
				</div>
				<div className="Prediction_dayBday">
					<div className="card">
						<img className="wheather_icon" src={lightning} alt="" />
						<p className="day">mercedi</p>
						<p className="temp">24°</p>
					</div>
				</div>
				<div className="Prediction_dayBday">
					<div className="card">
						<img className="wheather_icon" src={sun} alt="" />
						<p className="day">jeudi</p>
						<p className="temp">24°</p>
					</div>
				</div>
				<div className="Prediction_dayBday">
					<div className="card">
						<img className="wheather_icon" src={rain} alt="" />
						<p className="day">vendredi</p>
						<p className="temp">24°</p>
					</div>
				</div>
				<div className="Prediction_dayBday">
					<div className="card">
						<img className="wheather_icon" src={lightning} alt="" />
						<p className="day">samedi</p>
						<p className="temp">24°</p>
					</div>
				</div>
				<div className="Prediction_dayBday">
					<div className="card">
						<img className="wheather_icon" src={lightning} alt="" />
						<p className="day">dimanche</p>
						<p className="temp">24°</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Prediction;
