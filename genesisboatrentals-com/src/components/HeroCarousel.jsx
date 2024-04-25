import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hero1 from "./../assets/hero1.jpg";
import hero2 from "./../assets/hero2.jpg";
import hero3 from "./../assets/hero3.jpg";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import BookModal from "./BookModal";
const HeroCarousel = () => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				// navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				{[1, 2, 3].map(i => (
					<SwiperSlide key={i}>
						<img
							src={i == 1 ? hero1 : i == 2 ? hero2 : hero3}
							alt=''
							className=''
						/>
						<div className='overlay-text'></div>
						<div className='absolute top-[45%] -translate-y-[50%] left-0 md:left-10 lg:left-20 z-[2] text-left w-4/5 md:w-2/3 p-4'>
							<h1 className='font-prata text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold lg:font-extrabold text-gray-100'>
								Genesis Boat Rentals
							</h1>
							<p className='text-base mt-10 text-gray-100'>
								Renting a pontoon in Southwest Florida allows you to be the
								captain of your own adventure. It&apos;s a great way to spend
								quality time with family and friends while exploring local
								sandbars, beautiful waters, beaches, wildlife, and waterfront
								restaurants. It offers the freedom to create your own itinerary
								and make lasting
							</p>
							{/* <button className='tracking-wider font-semibold py-2 px-8  text-base text-white bg-orange-600 my-5'>
								BOOK NOW
							</button> */}
							<BookModal color={"bg-orange-600"} />
						</div>
					</SwiperSlide>
				))}
				{/* <SwiperSlide>
					<div className="relative">
						<img src={heroImage} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img src={heroImage} alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="relative">
						<img src={heroImage} alt='' />
					</div>
				</SwiperSlide> */}
			</Swiper>
		</>
	);
};

export default HeroCarousel;
