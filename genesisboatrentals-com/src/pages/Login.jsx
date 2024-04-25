import { Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleLogin = async () => {
		setLoading(true);

		try {
			const data = await axios.post("http://localhost:5000/api/login", {
				email,
				password,
			});
			console.log(data.data);
			if (data.status === 201) {
				localStorage.setItem("boat-token", JSON.stringify(data.data.token));
				console.log("succcesfully logined.");
				// if (location.state !== null) {
				navigate("/");
				toast.success("Successfully Login!");

				// }
			} else {
				alert(data.data.error + "⛔");
			}
			setLoading(false);
		} catch (error) {
			console.log("frontend login error.⛔");
		}
	};

	return (
		<>
			<div className='mr-auto rounded-lg overflow-hidden border w-full md:w-2/5 mx-auto my-20'>
				<h1 className='bg-gray-800 text-center text-white font-bold text-lg py-4'>
					Welcome!
				</h1>

				<form className='p-5'>
					<Text mb='4px' ml={"4px"} mt={"8px"}>
						Email
					</Text>
					<Input
						size='md'
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='Email'
						mb={"5"}
					/>
					<Text mb='4px' ml={"4px"} mt={"8px"}>
						Password
					</Text>
					<Input
						size='md'
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='Password'
						mb={"5"}
					/>

					<Button
						onClick={handleLogin}
						colorScheme='green'
						mt={"16px"}
						width={"full"}
						isLoading={loading}
						isDisabled={loading}
					>
						Login
					</Button>
					<Link to='/register' className='pt-2 flex text-blue-500 underline'>
						Do not have an account?
					</Link>
				</form>
			</div>
		</>
	);
};

export default Login;
