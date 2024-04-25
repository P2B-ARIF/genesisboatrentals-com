import React from "react";
import { FaCheck } from "react-icons/fa";
import controller from "./../assets/controller.png";
import boat from "./../assets/boat-png.png";
import BookModal from "./BookModal";
// bg-[#F4EFEC]
const BoatAbout = () => {
	return (
		<div className='container mx-auto relative my-52'>
			<div className=' p-6 bg-[#1F2937] w-full lg:w-2/3 ml-auto rounded-lg'>
				<div className='border-[1px] border-yellow-700 p-10 grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 md:py-20'>
					<div className='mx-auto'>
						<img src={controller} alt='' className='rotate hidden md:block' />
						<img src={boat} alt='' className='md:hidden' />
					</div>
					<div>
						<h5 className='text-lg uppercase font-semibold tracking-wider text-yellow-600 mb-10'>
							ABOUT THE BOAT
						</h5>

						<ul className='flex flex-col gap-2 text-gray-100'>
							<li className='flex items-center gap-2'>
								<FaCheck /> 22Ft Sun Tracker Pontoon
							</li>
							<li className='flex items-center gap-2'>
								<FaCheck /> Max capacity 10 people
							</li>
							<br />
							<b className='flex items-center gap-2'>Including : </b>
							<li className='flex items-center gap-2'>
								<FaCheck />
								Bluetooth Stereo
							</li>
							<li className='flex items-center gap-2'>
								<FaCheck /> GPS and Depth and Fish Finder
							</li>
							<li className='flex items-center gap-2'>
								<FaCheck />
								Provided Maps
							</li>
						</ul>
						{/* <button className='tracking-wider font-semibold py-2 px-8  text-base text-white bg-gray-800 my-5'>
							BOOK NOW
						</button> */}

						<BookModal color={"#F4EFEC"} />
					</div>
				</div>
			</div>

			<div className='absolute top-0 left-0 w-3/5 moving hidden md:block'>
				<img src={boat} alt='' className='w-full h-full rotate-6' />
			</div>
		</div>
	);
};

export default BoatAbout;
