import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";
import { router } from "./routes/Router";

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
			<Toaster />
		</>
	);
};

export default App;
