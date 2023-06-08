import Header from "../components/Header";
import "../style/User.css";

function User() {
	return (
		<div>
			<div className="menu_Body">
				<Header />

				<div className="body">
					<div className="main">
						<div className="signup">
							<div className="User_body">
								<h1>User</h1>
								<p>Nom d'utilisateur : </p>
								<p>Prénom :</p>
								<p>Nom :</p>
								<p>E-mail :</p>
								<p>Position sauvegardé :</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default User;
