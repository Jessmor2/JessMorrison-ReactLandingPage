import React from "react";
import NavBar from "./Navbar.jsx";
import Jumbo from "./jumbo.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container-fluid col-10 ">
				<Jumbo />
				<div className="d-flex justify-content-around flex-wrap">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<br></br>
			<Footer />
		</>
	);
};

export default Home;
