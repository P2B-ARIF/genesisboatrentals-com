import React from "react";
import { FaCheck } from "react-icons/fa";
import controller from "./../assets/controller.png";
import boat from "./../assets/boat-png.png";
import BookModal from "../components/BookModal";

const OurBoat = () => {
	return (
		<div className='container mx-auto relative my-32 md:my-52'>
			<div className='bg-[#F4EFEC] p-6 w-full lg:w-2/3 ml-auto'>
				<div className='border-[1px] border-yellow-700 p-10 grid grid-cols-1 lg:grid-cols-2 gap-5 py-20'>
					<div className='mx-auto'>
						<img src={controller} alt='' className='rotate' />
					</div>
					<div>
						<h5 className='text-lg uppercase font-semibold tracking-wider text-yellow-600 mb-10'>
							ABOUT THE BOAT
						</h5>

						<ul className='flex flex-col gap-2'>
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

						<BookModal />
					</div>
				</div>
			</div>

			<div className='absolute top-0 left-0 w-3/5 moving'>
				<img src={boat} alt='' className='w-full h-full rotate-6' />
			</div>
		</div>
	);
};

export default OurBoat;
