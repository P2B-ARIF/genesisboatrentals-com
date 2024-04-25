import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdCall, IoMdMailOpen } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
	return (
		<footer className='bg-[#011425] p-10 px-5 md:p-20 md:px-20 mt-32'>
			<div className='container mx-auto grid md:grid-cols-4 text-gray-200'>
				<div className=''>
					<h1 className='text-lg mb-2 md:mb-8'>About Us</h1>
					<p className='my-3 md:my-5'>
						We strongly support best practice sharing across our operations
						around the world
					</p>
					<button className='tracking-wider font-medium py-3 px-7 text-base text-white bg-gray-800'>
						MESSAGE
					</button>
				</div>
				<div>
					<h1 className='text-lg mb-2 md:mb-8 mt-8 md:mt-0'> Contact Us</h1>
					<ul className='flex flex-col gap-2 md:gap-3'>
						<li className='flex items-center gap-2'>
							<IoMdCall />
							+941-223-2316
						</li>
						<li className='flex items-center gap-2'>
							<IoMdMailOpen />
							genesisboatrentals@hotmail.com
						</li>
						<li className='flex items-center gap-2'>
							<IoLocationSharp /> Venice, Nokomis, Sarasota Florida.
						</li>
					</ul>
				</div>
				<div>
					<h1 className='text-lg mb-2 md:mb-8 mt-8 md:mt-0'> Contact Us</h1>

					<ul className='flex flex-col gap-2 md:gap-3'>
						<li className='flex items-center gap-2'>
							<MdKeyboardDoubleArrowRight />
							Home
						</li>
						<li className='flex items-center gap-2'>
							<MdKeyboardDoubleArrowRight />
							About Us
						</li>
						<li className='flex items-center gap-2'>
							<MdKeyboardDoubleArrowRight />
							Blog
						</li>
						<li className='flex items-center gap-2'>
							<MdKeyboardDoubleArrowRight />
							Contact Us
						</li>
					</ul>
				</div>
				<div>
					<h1 className='text-lg mb-2 md:mb-8 mt-8 md:mt-0'>Subscribe Now</h1>

					<p className='my-4 md:my-5'>
						We strongly support best practice sharing across our operations
					</p>

					<input
						type='text'
						placeholder='PHONE'
						className='w-full border-[2px] rounded-lg p-3 border-gray-700 focus:border-yellow-500 outline-none focus:outline-none'
					/>
				</div>
			</div>
			<div className='flex items-center justify-between mt-10 text-white container mx-auto'>
				<p>© Copyrights reserved by kodesolution</p>
				<div className='flex gap-5'>
					<FaInstagram />
					<FaFacebookF />
					<FaYoutube />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
