import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import "../style/Error.css";

function Error() {
	return (
		<div>
			<div className="menu_Body">
				<Header />
				<div className="error-container">
					<h1 className="error">404</h1>
					<p className="error-message">
						Oups! La page que vous demandez n'existe pas.
					</p>
					<NavLink className="error-home" to="/" exact="true">
						Retourner sur la page d’accueil
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Error;
