import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
	return (
		<main>
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	);
};

export default MainLayouts;
