import Header from "../components/Header";
import Search from "../components/Search";
import "../style/menu.css";

function Home() {
	return (
		<div className="menu_Body">
			<Header />
			<Search />
		</div>
	);
}

export default Home;
