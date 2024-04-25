const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/payment", (req, res) => {
	res.status(200).send({ message: "OK" });
});

app.get("/", () => {
	res.status(200).send({ message: "OK" });
});

app.listen(port, (req, res) => {
	console.log("Server listening on port " + port);
});
