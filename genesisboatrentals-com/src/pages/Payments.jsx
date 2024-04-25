import { Button, Input, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DayPick from "../components/date/DayPick";

import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const Payments = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const [calender, setCalender] = useState("");




	
	const disabledDays = [
		new Date("2024-04-20"),
		new Date("2024-04-24"),
		new Date("2024-04-2"),
	];
	const handleChange = e => {
		const selectedDate = new Date(e.target.value);
		if (disabledDays.some(day => isSameDay(day, selectedDate))) {
			alert("You cannot select this date.");
			setCalender("");
		} else {
			setCalender(e.target.value);
		}
	};

	const isSameDay = (date1, date2) => {
		return (
			date1.getFullYear() === date2.getFullYear() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getDate() === date2.getDate()
		);
	};

	const handlePayment = async () => {
		const token = localStorage.getItem("boat-token");
		setLoading(true);

		try {
			const data = await axios.get("http://localhost:5000/api/me", {
				headers: { Authorization: `Bearer ${JSON.parse(token)}` },
			});
			console.log(data, "payments page");

			if (data.status === 223 || data.status === 222 || token === null) {
				setLoading(false);
				return navigate("/login");
			}

			const stripe = await loadStripe(
				"pk_test_51P7kWYLQFNBIVWJMp96CjHnMEPxhFihA2x3B3n1oVghqxmgkz17PWsKcXy1cCeEDYthgdhjbSn28Rw0iwjrKFKPi00PFxdd230",
			);
			const body = {
				price: 350,
				hours: 8,
				email: "test@example.com",
			};

			const headers = {
				"Content-Type": "application/json",
			};

			const response = await fetch("http://localhost:5000/payment", {
				method: "POST",
				headers: headers,
				body: JSON.stringify(body),
			});

			const session = await response.json();
			const result = await stripe.redirectToCheckout({
				sessionId: session.sessionId, // sessionId key should match the key sent by the server
			});

			if (result.error) {
				console.log(result.error, "error");
			}
			console.log(result, session, "payment received");
			setLoading(false);
		} catch (err) {
			console.log("frontend login error.⛔");
		}
	};

	return (
		// <AuthLayout>
		<div className='container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-10 p-3 md:p-0'>
			<div className='mx-auto md:mx-0 md:ml-auto'>
				<div className=' border rounded-lg shadow-lg'>
					<DayPick />
				</div>
			</div>
			<div className='mr-auto rounded-lg overflow-hidden border'>
				<h1 className='bg-gray-800 text-center text-white font-bold text-lg py-4'>
					BOAT AN APPOINTMENT
				</h1>

				<form className='p-5'>
					<Text mb='4px' ml={"4px"} mt={"8px"}>
						Name
					</Text>
					<Input size='md' placeholder='Name' />
					<Text mb='4px' ml={"4px"} mt={"8px"}>
						Email
					</Text>
					<Input size='md' placeholder='Email' />
					<Text mb='4px' ml={"4px"} mt={"8px"}>
						Phone Number
					</Text>

					<Input size='md' placeholder='Phone Number' />
					<Text mb='4px' ml={"4px"} mt={"8px"}>
						Date
					</Text>
					<Input
						// value={calender}
						// onChange={e => setCalender(e.target.value)}
						value={calender}
						onChange={handleChange}
						placeholder='Select Date and Time'
						size='md'
						type='date'
					/>
					<Text mb='4px' ml={"4px"} mt={"8px"}>
						Time
					</Text>
					<Input placeholder='Select Date and Time' size='md' type='time' />
					<Text mb='4px' ml={"4px"} mt={"8px"}>
						Message
					</Text>
					<Textarea size='md' placeholder='' />
					<Button
						onClick={handlePayment}
						isLoading={loading}
						isDisabled={loading}
						colorScheme='teal'
						mt={"8px"}
					>
						Confirm Booking
					</Button>
					{/* <Button
						onClick={() => {
							localStorage.removeItem("boat-token");
							navigate("/");
						}}
						colorScheme='green'
						mt={"8px"}
						ml={"10px"}
					>
						Log out
					</Button> */}
				</form>
			</div>
		</div>
		// </AuthLayout>
	);
};

export default Payments;
