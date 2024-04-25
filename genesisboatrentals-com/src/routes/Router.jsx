import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import OurBoat from "../pages/OurBoat";
import ContactUs from "../pages/ContactUs";
import Terms from "../pages/Terms";
import SelectDate from "../pages/SelectDate";
import Payments from "../pages/Payments";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Success from "./../pages/Success";
import Cancel from "./../pages/Cancel";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayouts />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about-us", element: <AboutUs /> },
			{ path: "/boat", element: <OurBoat /> },
			{ path: "/contact-us", element: <ContactUs /> },
			{ path: "/terms", element: <Terms /> },

			{ path: "/package/:package", element: <SelectDate /> },
			{ path: "/payments", element: <Payments /> },

			{ path: "/register", element: <Register /> },
			{ path: "/login", element: <Login /> },

			{ path: "/success", element: <Success /> },
			{ path: "/cancel", element: <Cancel /> },
		],
	},
]);
