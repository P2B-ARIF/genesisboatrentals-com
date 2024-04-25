<Swiper
				spaceBetween={0}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					// disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className='mySwiper'
				loop={true}
			>
				<SwiperSlide className='swiper-slide'>
					<img src={img1} alt='Slide 1' className='carousel-image' />
					<div className='overlay-text'>
						<h4 className='text-base font-shadows'>
							- Welcome to EL PATRON Restaurant -
						</h4>
						<h1 className='text-5xl md:text-7xl font-bold font-oswald w-2/3'>
							OUR PASSION IS IN OUR COFFEE
						</h1>
						<p className='w-1/2 text-sm md:text-base'>
							Harbourfront Seafood Restaurant is the perfect spot in Sydney to
							celebrate a special occasion or to simply head out for a bite to
							eat.
						</p>

						{/* <a
										href={pdf}
										className='md:mr-10 bg-lightYellow py-2 px-10 rounded-lg text-primary font-bold border border-primary text-sm'
									>
										VIEW ALL MENU
									</a> */}
					</div>
				</SwiperSlide>
			</Swiper>