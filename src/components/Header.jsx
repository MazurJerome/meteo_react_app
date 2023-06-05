import "../style/Header.css";
import { NavLink } from "react-router-dom";
import logo from "../images/LOGO.svg";

function Header() {
	return (
		<header>
			<div className="Head">
				<img src={logo} className="App-logo-head" alt="logo" />

				<div className="Menu">
					<nav>
						<i></i>
						<NavLink className="navbar_Dashbord" to="/" exact="true">
							Dashbord
						</NavLink>
					</nav>
					<nav>
						<NavLink className="navbar_Map" to="/Position" exact="true">
							Map
						</NavLink>
					</nav>
					<nav>
						<NavLink
							className="navbar_Saved_Location"
							to="/Position"
							exact="true"
						>
							Positions sauvegardées
						</NavLink>
					</nav>
				</div>
			</div>
			<div className="Head">
				<div className="Menu">
					<h2>System</h2>
					<nav>
						<NavLink className="navbar_Setteing" to="/Settings" exact="true">
							Setting
						</NavLink>
					</nav>
					<nav>
						<NavLink className="navbar_Logout_account" to="/Login" exact="true">
							Logout account
						</NavLink>
					</nav>
				</div>
			</div>
		</header>
	);
}
export default Header;
