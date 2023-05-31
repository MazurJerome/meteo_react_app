import "../style/Prediction.css";

function Prediction() {
	return (
		<div className="Prediction">
			<h3>Prediction</h3>
			<div className="Prediction_dayBday">
				<div className="Prediction_dayBday_day-1">
					<p className="Day-1">lundi</p>
					<p className="temp">24°</p>
				</div>
				<div className="Prediction_dayBday_day0">
					<p className="Day0">mardi</p>
					<p className="temp">26°</p>
				</div>
				<div className="Prediction_dayBday_day1">
					<p className="Day1">mercredi</p>
					<p className="temp">28°</p>
				</div>
				<div className="Prediction_dayBday_day2">
					<p className="Day2">jeudi</p>
					<p className="temp">25°</p>
				</div>
				<div className="Prediction_dayBday_day3">
					<p className="Day3">vendredi</p>
					<p className="temp">22°</p>
				</div>
				<div className="Prediction_dayBday_day4">
					<p className="Day4">samedi</p>
					<p className="temp">24°</p>
				</div>
				<div className="Prediction_dayBday_day5">
					<p className="Day5">dimanche</p>
					<p className="temp">21°</p>
				</div>
			</div>
		</div>
	);
}

export default Prediction;
