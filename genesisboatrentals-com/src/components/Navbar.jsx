import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/logo2.png";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
	const navigate = useNavigate();

	const navLinks = [
		{ path: "/", name: "Home" },
		{ path: "/about-us", name: "About Us" },
		{ path: "/boat", name: "Our Boat" },
		{ path: "/terms", name: "Terms & Conditions" },
	];

	return (
		<nav className=''>
			<div className='hidden md:block border-b-[1px]'>
				<div className='flex items-center justify-between container mx-auto'>
					<div className='flex items-center gap-10'>
						<h1 className='flex items-center gap-2'>
							<IoLocationSharp color='brown' />
							Venice, Nokomis, Sarasota Florida.
						</h1>
						<h1 className='flex items-center gap-2'>
							<IoMail color='brown' />
							genesisboatrentals@hotmail.com
						</h1>
					</div>
					<div className='flex items-center gap-5 text-lg text-amber-800'>
						<FaFacebook />
						<FaYoutube />
						<FaInstagram />
					</div>
				</div>
			</div>
			<div className='flex px-5 md:px-0 items-center justify-between container mx-auto py-3 pt-2'>
				<Link to={"/"}>
					<img src={logo} alt='' className='h-16 lg:h-20 overflow-hidden' />
				</Link>
				<div className='hidden text-base lg:text-lg md:flex gap-6 lg:gap-10 uppercase font-medium'>
					{navLinks?.map(nav => (
						<Link
							key={nav.name}
							to={nav.path}
							className='whitespace-nowrap focus:text-[#f05c07] hover:text-[#f05c07] transition-all duration-200 ease-linear'
						>
							{nav.name}
						</Link>
					))}
				</div>
				<div className='hidden md:flex items-center gap-5'>
					<Link
						to={`tel:+941-223-2316`}
						className='text-base lg:text-lg font-medium focus:text-[#f05c07] hover:text-primary'
					>
						+941-223-2316
					</Link>
					<Link
						to={"/contact-us"}
						className='tracking-wider hover:outline-none hover:no-underline font-semibold py-2 lg:py-3 px-5 lg:px-7 text-base text-white bg-gray-800 hover:bg-white border hover:border-primary hover:text-primary transition-all duration-200 ease-linear'
					>
						Contact Us
					</Link>
					{localStorage.getItem("boat-token") && (
						<button
							onClick={() => {
								localStorage.removeItem("boat-token");
								navigate("/");
							}}
							className='tracking-wider hover:outline-none hover:no-underline font-semibold py-2 lg:py-3 px-5 lg:px-7 text-base text-white bg-gray-800 hover:bg-white border hover:border-primary hover:text-primary transition-all duration-200 ease-linear'
						>
							Log Out
						</button>
					)}
					{/* <Link
						to={
							"https://boattests101.com/united-states/florida/florida-rental?mcid=Bxups2Kk"
						}
						target='_blank'
						className='tracking-wider hover:outline-none hover:no-underline hover:text-white font-semibold py-2 lg:py-3 px-5 lg:px-7 text-base text-white bg-gray-800'
					>
						LICENSE
					</Link> */}
				</div>

				<MobileNavbar navLinks={navLinks} />
			</div>
		</nav>
	);
};

export default Navbar;
