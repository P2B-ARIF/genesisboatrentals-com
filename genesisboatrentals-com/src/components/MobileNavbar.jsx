import {
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const MobileNavbar = ({ navLinks }) => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<>
			<FaBars
				size={24}
				className='cursor-pointer md:hidden'
				onClick={() => setOpen(true)}
			/>
			{/* <Button colorScheme='blue' onClick={onOpen}>
				Open
			</Button> */}
			<Drawer onClose={() => setOpen(false)} isOpen={open}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader
						borderBottomWidth='1px'
						paddingY={7}
						display={"flex"}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<h6>Genesis Boat Rentals</h6>
						<DrawerCloseButton marginTop={4} />
						{/* <CloseButton
							onClose={(() => setOpen(false), console.log("hi"))}
							// className='focus:outline-none'
						/> */}
					</DrawerHeader>
					<DrawerBody>
						<div className='text-lg mt-10 flex flex-col gap-6 uppercase font-medium'>
							{navLinks?.map(nav => (
								<Link
									key={nav.name}
									to={nav.path}
									className='focus:outline-none focus:border-none hover:text-gray-800 hover:no-underline transition-all duration-300 ease-linear pl-0 hover:pl-2'
								>
									{nav.name}
								</Link>
							))}
							{localStorage.getItem("boat-token") && (
								<button
									onClick={() => {
										localStorage.removeItem("boat-token");
										navigate("/");
										setOpen(false);
									}}
									className='tracking-wider hover:outline-none hover:no-underline font-semibold py-2 lg:py-3 px-5 lg:px-7 text-base text-white bg-gray-800 hover:bg-white border hover:border-primary hover:text-primary transition-all duration-200 ease-linear'
								>
									Log Out
								</button>
							)}
						</div>
						<Divider paddingTop={10} />
						<div className='flex flex-col items-center mt-10'>
							<div className='flex flex-col items-start gap-2'>
								<h6 className='flex items-center gap-2'>
									<IoLocationSharp color='brown' />
									Venice, Nokomis, Sarasota Florida.
								</h6>
								<h6 className='flex items-center gap-2'>
									<IoMail color='brown' />
									genesisboatrentals@hotmail.com
								</h6>
							</div>
							<div className='mt-5 flex items-center gap-5 text-lg text-amber-800'>
								<FaFacebook className='cursor-pointer' />
								<FaYoutube className='cursor-pointer' />
								<FaInstagram className='cursor-pointer' />
							</div>
						</div>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default MobileNavbar;
