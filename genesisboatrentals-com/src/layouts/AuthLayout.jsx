import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AuthLayout({ children }) {
	const token = localStorage.getItem("boat-token");
	const [status, setStatus] = useState("");

	const navigate = useNavigate();

	if (token) {
		axios
			.get("http://localhost:5000/api/me", {
				headers: { Authorization: `Bearer ${JSON.parse(token)}` },
			})
			.then(res => {
				setStatus(res.status);
			});
	}

	if (status === 200) {
		return children;
	} else if (status === 223 || status === 222 || token === null) {
        return <Navigate to={'/login'} state={"/payments/:details"} />
	}
}

export default AuthLayout;
