import React from "react";
import About from "../components/About";
import BoatAbout from "../components/BoatAbout";
import Contact from "../components/Contact";
import Hero from "./../components/Hero";

const Home = () => {
	return (
		<div>
			<Hero />
			<About />
			<BoatAbout />
			<Contact />
		</div>
	);
};

export default Home;
