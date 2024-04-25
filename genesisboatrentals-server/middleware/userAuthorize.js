const { responseReturn } = require("./responseReturn");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.userAuthorize = async (req, res, next) => {
	const bearerToken = req.headers.authorization;
	if (!bearerToken) responseReturn(res, 222, { error: "token not found." });

	const token = bearerToken.split(" ")[1];

	const user = await jwt.verify(
		token,
		process.env.LOGIN_TOKEN_SECRET,
		async (err, verifiedJwt) => {
			if (err) {
				res.status(223).json({ error: "jwt token expried" });
				return;
			}
			
			return verifiedJwt;
		},
	);

	if (user) {
		req.user = user;
		next();
	}
};
