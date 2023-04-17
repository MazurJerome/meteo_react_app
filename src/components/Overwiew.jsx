import "../style/Overwiew.css";

import icone_fleche from "../images/icone_fleche.svg";
import icone_wind from "../images/icone_wind.svg";
import icone_rain from "../images/icone_rain.svg";
import icone_sun from "../images/icone_sun.svg";
import icone_pressure from "../images/icone_pressure.svg";

function Overwiew() {
	return (
		<div className="Overwiew">
			<div className="Overwiew_head">
				<h2>Weather overwiew</h2>
				<div className="Overwiew_head_slide">
					<img className="fleche_left" src={icone_fleche} alt="" />
					<div> Air temperature</div>
					<img className="fleche_right" src={icone_fleche} alt="" />
				</div>
			</div>
			<div className="Overwiew_body">
				<div className="Overwiew_body_top">
					<div className="Overwiew_body_case">
						<img className="Overwiew_body_icone" src={icone_wind} alt="" />
						<div className="Overwiew_body_content">
							<div className="Overwiew_body_content_title">Wind speed</div>
							<div className="Overwiew_body_content_donnees">12km/h</div>
						</div>
					</div>
					<div className="Overwiew_body_case">
						<img className="Overwiew_body_icone" src={icone_rain} alt="" />
						<div className="Overwiew_body_content">
							<div className="Overwiew_body_content_title">Rain chance</div>
							<div className="Overwiew_body_content_donnees">24%</div>
						</div>
					</div>
				</div>
				<div className="Overwiew_body_bottom">
					<div className="Overwiew_body_case">
						<img className="Overwiew_body_icone" src={icone_pressure} alt="" />
						<div className="Overwiew_body_content">
							<div className="Overwiew_body_content_title">Pressure</div>
							<div className="Overwiew_body_content_donnees">720 hpa</div>
						</div>
					</div>
					<div className="Overwiew_body_case">
						<img className="Overwiew_body_icone" src={icone_sun} alt="" />
						<div className="Overwiew_body_content">
							<div className="Overwiew_body_content_title">uv index</div>
							<div className="Overwiew_body_content_donnees">2</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Overwiew;
