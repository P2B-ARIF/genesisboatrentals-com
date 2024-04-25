import React from "react";

export const AboutUs = () => {
	return (
		<div className='my-40 container mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20 items-center'>
			{/* Left Side */}
			<div className='text-center w-5/6 mx-auto'>
				<h5 className='text-lg uppercase font-semibold tracking-wider text-yellow-600'>
					About US
				</h5>
				<h1 className='font-prata leading-8 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold my-5 lg:my-8 w-full lg:w-4/5 mx-auto'>
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
			<div className='border-l-[1px] h-full border-[#f7cfba] p-10 text-center'>
				<h4 className='text-lg font-semibold'>
					We are offering the following options:
				</h4>
				<p className='text-red-500 font-bold'>Gas is not included</p>
				<ul className='flex flex-col gap-3 mt-10 text-lg lg:text-2xl font-bold text-gray-700'>
					<li>4 Hours - $350</li>
					<li>6 Hours - $400</li>
					<li>8 Hours - $450</li>
				</ul>

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
