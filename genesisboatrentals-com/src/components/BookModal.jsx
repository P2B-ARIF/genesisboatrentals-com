import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookModal = ({ color }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className={`tracking-wider font-semibold py-2 px-8 text-base text-white my-5 ${
					color && color
				} bg-[#eb9b40ef] rounded-md`}
			>
				BOOK NOW
			</button>
			<Modal isOpen={open} onClose={() => setOpen(false)} size={"xl"}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>BOOKING PRICING PACKAGE</ModalHeader>
					<ModalCloseButton />
					<ModalBody textAlign={"center"}>
						<h1 className='text-xl font-semibold'>
							We are offering the following options
						</h1>

						<div className='grid grid-cols-3 gap-3 my-10 mb-5 text-gray-700'>
							<div className='border rounded-lg overflow-hidden shadow-md text-gray-800 hover:border-blue-500 transition-all duration-200 ease-linear'>
								{/* <div className='h-[90px] overflow-hidden'>
									<div className='custom-clip-path bg-gray-200 pt-4 bg-gradient-to-br from-blue-600 to-indigo-800 text-white font-semibold text-lg h-[130px]'>
										BASIC
									</div>
								</div> */}
								<div className='my-5'>
									The Boat Rental For <strong>4 Hours</strong>
								</div>
								<h1 className='text-3xl font-bold text-gray-700 mb-5 font-prata'>
									$350
								</h1>
								<Button colorScheme='blue' mb={"5"} variant='ghost' size='sm'>
									<Link
										to={"/payments?price=350&hours=4"}
										className='hover:text-gray-800 hover:no-underline'
									>
										Get Now
									</Link>
								</Button>
							</div>
							<div className='border rounded-lg overflow-hidden shadow-md text-gray-800 hover:border-green-500 transition-all duration-200 ease-linear'>
								{/* <div className='h-[90px] overflow-hidden'>
									<div className='custom-clip-path bg-gray-200 pt-4 bg-gradient-to-br from-green-500 to-green-800 text-white font-semibold text-lg h-[130px]'>
										STANDARD
									</div>
								</div> */}
								{/* <div className='my-5'>
									The Boat Rental For <strong>6 Hours</strong>
								</div> */}
								
								<div className='my-5'>
									The Boat Rental For <strong>6 Hours</strong>
								</div>

								<h1 className='text-3xl font-bold text-gray-700 mb-5 font-prata'>
									$400
								</h1>
								<Button colorScheme='green' mb={"5"} variant='ghost' size='sm'>
									<Link
										to={"/payments?price=400&hours=6"}
										className='hover:text-gray-800 hover:no-underline'
									>
										Get Now
									</Link>
								</Button>
							</div>
							<div className='border rounded-lg overflow-hidden shadow-md text-gray-800 hover:border-red-500 transition-all duration-200 ease-linear'>
								{/* <div className='h-[90px] overflow-hidden'>
									<div className='custom-clip-path bg-gray-200 pt-4 bg-gradient-to-br from-rose-600 to-indigo-800 text-white font-semibold text-lg h-[130px]'>
										PREMIUM
									</div>
								</div> */}
								<div className='my-5'>
									The Boat Rental For <strong>8 Hours</strong>
								</div>
								<h1 className='text-3xl font-bold text-gray-700 mb-5 font-prata'>
									$450
								</h1>
								<Button colorScheme='red' mb={"5"} variant='ghost' size='sm'>
									<Link
										to={"/payments?price=450&hours=8"}
										className='hover:text-gray-800 hover:no-underline'
									>
										Get Now
									</Link>
								</Button>
							</div>
							{/* <li className='font-prata text-center border-[1px] border-gray-400 rounded-lg w-full py-3'>
								<Link to={"/payments/:details"}>
									<Link to={"/package/350?hours=4"}>
									4 Hours <br />
									<span className='text-3xl font-bold text-gray-600 font-prata pt-2 flex justify-center'>
										$350
									</span>
								</Link>
							</li> */}
							{/* <li className='font-prata text-center border-[1px] border-gray-400 rounded-lg w-full py-3'>
								<button>
									6 Hours <br />
									<span className='text-3xl font-bold text-gray-600 font-prata pt-2 flex justify-center'>
										$400
									</span>
								</button>
							</li>
							<li className='font-prata text-center border-[1px] border-gray-400 rounded-lg w-full py-3'>
								<button>
									8 Hours <br />
									<span className='text-3xl font-bold text-gray-600 font-prata pt-2 flex justify-center'>
										$450
									</span>
								</button>
							</li> */}
						</div>

						<p className='text-red-500 font-medium mb-2'>Gas is not included</p>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default BookModal;
