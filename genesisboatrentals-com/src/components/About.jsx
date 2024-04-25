import React from "react";
import { GiFishingBoat } from "react-icons/gi";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className='container mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20 items-center'>
			{/* Left Side */}
			<div className='text-center w-5/6 mx-auto'>
				<h5 className='text-lg uppercase font-semibold tracking-wider text-yellow-600'>
					About US
				</h5>
				<h1 className='spacing-lg font-prata text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold my-5 lg:my-8 w-full lg:w-4/5 mx-auto'>
					We are here to help you get sealife
				</h1>
				<p className='text-lg'>
					Our family-owned boat company in Sarasota, Florida, embodies the
					essence of personalized service and local expertise. With a
					deep-rooted connection to the area&apos;s waterways, our business
					offers a unique perspective on exploring the stunning coastlines of
					Sarasota. From fishing charters to sunset cruises, our company prides
					itself on providing unforgettable experiences for visitors and locals
					alike.
				</p>
			</div>
			{/* Right Side */}
			<div className='lg:border-l-[1px] h-full border-[#f7cfba] p-10 text-center'>
				<h1 className='spacing text-xl md:text-2xl lg:text-3xl xl:text-5xl font-prata w-full md:w-2/3 lg:w-4/5 mx-auto mb-1 font-semibold my-5 lg:my-8'>
					{/* Florida Boating Temporary Certificate */}
					Get Your Boating License
				</h1>
				<p className='text-lg'>
					Boaters wishing to rent a boat or a PWC in Florida that were born in
					or after 1988, and who do not possess a Boaters Safety Card (also
					generally referred to as a Lifetime Boating License)
				</p>
				<div className='mt-10'>
					<Link
						to={
							"https://boattests101.com/united-states/florida/florida-rental?mcid=Bxups2Kk"
						}
						target='_blank'
						className='tracking-wider hover:outline-none hover:no-underline font-semibold py-2 lg:py-3 px-5 lg:px-7 text-base text-white bg-gray-800 hover:bg-white border hover:border-primary hover:text-primary transition-all duration-200 ease-linear'
					>
						APPLY NOW
					</Link>
				</div>
				{/* <h4 className='spacing text-xl md:text-2xl lg:text-3xl xl:text-4xl font-prata w-full md:w-2/3 mx-auto mb-1 font-semibold'>
					We are offering the following options:
				</h4>
				<p className='text-red-500 font-bold'>Gas is not included</p>
				<ul className='flex flex-col gap-3 mt-10 text-lg lg:text-2xl font-bold text-gray-700'>
					<li>4 Hours - $350</li>
					<li>6 Hours - $400</li>
					<li>8 Hours - $450</li>
				</ul> */}

				{/* <div className='border-b-[1px] border-[#f7cfba] p-10 grid grid-cols-3 gap-5 items-center'>
					<span className='text-6xl text-center font-semibold text-gray-400'>
						01
					</span>
					<GiFishingBoat className='text-7xl mx-auto ml-10' />
					<h4 className='text-lg font-semibold whitespace-nowrap'>
						Luxury Cruises
					</h4>
				</div>
				<div className='border-b-[1px] border-[#f7cfba] p-10 grid grid-cols-3 gap-5 items-center'>
					<span className='text-6xl text-center font-semibold text-gray-400'>
						02
					</span>
					<GiFishingBoat className='text-7xl mx-auto ml-10' />
					<h4 className='text-lg font-semibold whitespace-nowrap'>
						Luxury Cruises
					</h4>
				</div>
				<div className='p-10 grid grid-cols-3 gap-5 items-center'>
					<span className='text-6xl text-center font-semibold text-gray-400'>
						03
					</span>
					<GiFishingBoat className='text-7xl mx-auto ml-10' />
					<h4 className='text-lg font-semibold whitespace-nowrap'>
						Luxury Cruises
					</h4>
				</div> */}
			</div>
		</div>
	);
};

export default About;
