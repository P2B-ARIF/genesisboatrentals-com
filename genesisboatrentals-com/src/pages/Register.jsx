import { Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleRegister = async () => {
		setLoading(true);
		try {
			const data = await axios.post("http://localhost:5000/api/register", {
				name,
				email,
				password,
			});
			console.log(data.data);
			if (data.status === 201) {
				navigate("/login");
				toast.success("Successfully Registered!");
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
			<div className='mr-auto rounded-lg overflow-hidden border w-full md:w-2/5 mx-auto my-16'>
				<h1 className='bg-gray-800 text-center text-white font-bold text-lg py-4'>
					Welcome!
				</h1>

				<form className='p-5'>
					<Text mb='4px' ml={"4px"} mt={"6px"}>
						Name
					</Text>
					<Input
						size='md'
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder='Name'
						mb={"3"}
					/>
					<Text mb='4px' ml={"4px"} mt={"6px"}>
						Email
					</Text>
					<Input
						size='md'
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='Email'
						mb={"3"}
					/>
					<Text mb='4px' ml={"4px"} mt={"6px"}>
						Password
					</Text>
					<Input
						size='md'
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='Password'
						mb={"3"}
					/>

					<Button
						onClick={handleRegister}
						colorScheme='green'
						mt={"14px"}
						width={"full"}
						isLoading={loading}
						isDisabled={loading}
					>
						Register
					</Button>
					<Link to='/login' className='pt-2 flex text-blue-500 underline'>
						Already Have an account?
					</Link>
				</form>
			</div>
		</>
	);
};

export default Register;
