import React from "react";
import boat from "./../assets/hero2.jpg";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 relative h-[110vh] md:h-[90vh]'>
			<div className='relative z-[1]'>
				<img src={boat} alt='' className='w-full h-full relative z-[1]' />
			</div>
			<div className='bg-[#F7F1EF] hidden md:block'></div>

			<div className='absolute z-[2] w-full'>
				<div className='relative container ml-auto md:flex items-center my-10 md:my-20 mr-20'>
					<div className='bg-[#cca062e5] p-5 w-full md:w-1/4'>
						<div className='border-[1px] border-yellow-500 p-5 md:p-10 flex flex-col gap-3'>
							<IoMdCall size={40} style={{ color: "white" }} />
							<span className='text-white'>Call us for any inquiry</span>
							<Link
								to={`tel:+012 345 6789`}
								className='text-2xl font-medium text-white'
							>
								+012 345 6789
							</Link>
						</div>
					</div>
					<div className='w-full md:w-2/3 bg-[#ffffffcb] p-10 md:p-20'>
						<h5 className='text-lg uppercase font-semibold tracking-wider text-yellow-600'>
							CONTACT US
						</h5>

						<h1 className='text-4xl font-semibold my-5 font-prata'>Get in Touch</h1>
						<div className='flex flex-col gap-5'>
							<div className='md:flex items-center gap-5'>
								<input
									type='text'
									placeholder='NAME'
									className='mb-5 md:mb-0 w-full border-[2px] p-3 border-gray-700 focus:border-yellow-500 outline-none focus:outline-none rounded-lg'
								/>
								<input
									type='text'
									placeholder='YOUR MAIL'
									className='w-full border-[2px] p-3 border-gray-700 focus:border-yellow-500 outline-none focus:outline-none rounded-lg'
								/>
							</div>
							<div className='md:flex items-center gap-5'>
								<input
									type='text'
									placeholder='PHONE'
									className='mb-5 md:mb-0 w-full border-[2px] p-3 border-gray-700 focus:border-yellow-500 outline-none focus:outline-none rounded-lg'
								/>
								<input
									type='text'
									placeholder='SUBJECT'
									className='w-full border-[2px] p-3 border-gray-700 focus:border-yellow-500 outline-none focus:outline-none rounded-lg'
								/>
							</div>
							<textarea
								name=''
								id=''
								rows='8'
								placeholder='MESSAGE'
								className='w-full border-[2px] p-3 border-gray-700 focus:border-yellow-500 outline-none focus:outline-none rounded-lg '
							></textarea>
							<button className='tracking-wider font-medium py-3 w-full text-base text-white bg-gray-800'>
								MESSAGE
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
