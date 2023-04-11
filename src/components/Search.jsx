import "../style/Search.css";
import { NavLink } from "react-router-dom";
import icone_alert from "../images/icone_alert.svg";
import icone_user from "../images/icone_user.svg";
import icone_search from "../images/glass_search.svg";

function Search() {
	let date = new Date();
	date = date.toDateString();
	const date1 = date.split(" ");
	let date2 = [];

	if (date1[0] === "Mon") {
		date2[0] = "Lundi ";
	} else if (date1[0] === "Tue") {
		date2[0] = "Mardi ";
	} else if (date1[0] === "Wed") {
		date2[0] = "Mercredi ";
	} else if (date1[0] === "Thu") {
		date2[0] = "Jeudi ";
	} else if (date1[0] === "Fri") {
		date2[0] = "Vendredi ";
	} else if (date1[0] === "Sat") {
		date2[0] = "Samedi ";
	} else if (date1[0] === "Sun") {
		date2[0] = "Dimanche ";
	}

	if (date1[1] === "Jan") {
		date2[2] = "Janvier ";
	} else if (date1[1] === "Feb") {
		date2[2] = "Février ";
	} else if (date1[1] === "Mar") {
		date2[2] = "Mars ";
	} else if (date1[1] === "Apr") {
		date2[2] = "Avril ";
	} else if (date1[1] === "May") {
		date2[2] = "Mai ";
	} else if (date1[1] === "Jun") {
		date2[2] = "Juin ";
	} else if (date1[1] === "Jul") {
		date2[2] = "Juillet ";
	} else if (date1[1] === "Aug") {
		date2[2] = "Août ";
	} else if (date1[1] === "Sep") {
		date2[2] = "Septembre ";
	} else if (date1[1] === "Oct") {
		date2[2] = "Octobre ";
	} else if (date1[1] === "Nov") {
		date2[2] = "Novembre ";
	} else if (date1[1] === "Dec") {
		date2[2] = "Décembre ";
	}

	date2[1] = date1[2] + " ";
	date2[3] = date1[3];

	return (
		<section className="search">
			<div className="date">{date2}</div>
			<div className="search_bar">
				<button className="search_button">
					<img className="icone_button" src={icone_search} alt="" />
				</button>
				<input
					className="search_input"
					type="text"
					placeholder="Rechercher une position ici"
				/>
			</div>
			<nav className="link_icone">
				<NavLink className="searchbar_alert" to="/" exact="true">
					<img className="alert" src={icone_alert} alt="" />
				</NavLink>
			</nav>
			<nav className="link_icone">
				<NavLink className="searchbar_profil" to="/" exact="true">
					<img className="profil" src={icone_user} alt="" />
				</NavLink>
			</nav>
		</section>
	);
}
export default Search;
