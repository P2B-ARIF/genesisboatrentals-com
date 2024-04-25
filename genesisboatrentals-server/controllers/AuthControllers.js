require("dotenv").config();
const { responseReturn } = require("../middleware/responseReturn");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class customerAuth {
	getMe = async (req, res) => {
		const { _id } = req.user;
		if (!req.user) return responseReturn(res, 222, { error: "please Login." });

		const user = await userModel.findById(_id);
		responseReturn(res, 200, { success: "sucessfully getted.", user });
	};

	login = async (req, res) => {
		const { email, password } = req.body;

		const find = await userModel.findOne({ email });
		if (!find) return responseReturn(res, 222, { error: "not found" });

		const passwordChecker = await bcrypt.compare(password, find.password);
		if (!passwordChecker)
			return responseReturn(res, 222, { error: "password invalid." });

		const token = await jwt.sign({_id : find._id , email : find.email}, process.env.LOGIN_TOKEN_SECRET, {
			expiresIn: process.env.LOGIN_TOKEN_EXPRIED,
		});

		responseReturn(res, 201, {
			success: "login succesed.✅",
			token,
			user: find,
			tsecret: process.env.LOGIN_TOKEN_SECRET,
			texprie: process.env.LOGIN_TOKEN_EXPRIED,
		});
	};

	register = async (req, res) => {
		const { name, email, password } = req.body;

		try {
			// const users = await userModel.find({});
			// responseReturn(res, 201, users);
			const find = await userModel.findOne({ email });
			if (find)
				return responseReturn(res, 222, { error: "user already exists" });

			const hashPassword = await bcrypt.hash(password, 10);

			const user = await userModel.create({
				name,
				email,
				password: hashPassword,
			});

			responseReturn(res, 201, { success: "user created.", user });
		} catch (error) {
			responseReturn(res, 222, { error: "register page error.⛔" });
		}
	};
}

module.exports = new customerAuth();
