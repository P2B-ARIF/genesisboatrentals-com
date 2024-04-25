import React from "react";

import scratch from "./../assets/scratch.png";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
	return (
		<div className='relative'>
			<div className='h-[88vh] w-full overflow-hidden container mx-auto relative'>
				{/* <img
					src={heroImage}
					alt=''
					className='w-full h-full object-cover object-center absolute z-[-1]'
				/>
				<div className='relative z-[13] h-full'>
					<div className='px-5 md:px-10 lg:p-16 absolute top-[50%] -translate-y-[50%] left-0 z-[14] w-full md:w-1/2 lg:w-2/3'>
						<h1 className='font-prata text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold lg:font-extrabold text-gray-800'>
							Genesis Boat Rentals
						</h1>
						<p className='text-lg mt-10'>
							Renting a pontoon in Southwest Florida allows you to be the
							captain of your own adventure. It&apos;s a great way to spend
							quality time with family and friends while exploring local
							sandbars, beautiful waters, beaches, wildlife, and waterfront
							restaurants. It offers the freedom to create your own itinerary
							and make lasting
						</p>
					</div>
				</div> */}

				<HeroCarousel />
			</div>
			<div>
				<img
					src={scratch}
					alt=''
					className='w-full h-[150px] z-[3] object-cover relative -top-20'
				/>
			</div>
		</div>
	);
};

export default Hero;
