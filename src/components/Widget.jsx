import "../style/Widget.css";
import icone_location from "../images/icone_location.svg";
import icone_fleche from "../images/icone_fleche.svg";

function Widget() {
	return (
		<div className="widget">
			<div className="widget_header">
				<div className="widget_location">
					<img
						className="widget_location_icone_location"
						src={icone_location}
						alt=""
					/>
					<p>Location</p>
				</div>
				<p className="widget_date">today</p>
			</div>
			<div className="widget_body">
				<div className="widget_body_degrees">25°</div>
				<div className="widget_body_meteo">sunny</div>
			</div>
			<div className="widget_categories">
				<div className="widget_categories_slide">
					<img className="fleche_left" src={icone_fleche} alt="" />
					<div> Air temperature</div>
					<img className="fleche_right" src={icone_fleche} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Widget;
