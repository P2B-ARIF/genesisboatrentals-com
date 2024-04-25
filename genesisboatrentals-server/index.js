require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { databaseConnect } = require("./database/MongoDB");
const userModel = require("./models/userModel");
const userRoute = require("./routes/userRoute");
const port = process.env.PORT || 5000;

const stripe = require("stripe")(
	"sk_test_51P7kWYLQFNBIVWJMo7CQwpisJRErTtPXsdsYnEE7mabmBMbneJRqj7jqmzyxQ9WMYZXS3xtUTprkBUl09zOSHlCb00x298gDpY",
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.get("/success", async (req, res) => {
    try {
        const sessionId = req.query.session_id; // Retrieve the session ID from the query parameters

        // Fetch the session details from Stripe
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        // Extract payment details from the session object
        const paymentDetails = {
            sessionId: sessionId,
            paymentIntentId: session.payment_intent,
            amount: session.amount_total,
            currency: session.currency,
            // Add any other payment details you want to store
        };

        // Save payment details to MongoDB
        const newPayment = await Payment.create(paymentDetails);

        console.log("Payment details saved to MongoDB:", newPayment);

        // Return a success response to the frontend
        res.status(200).json({ message: "Payment successful. Thank you!" });
    } catch (error) {
        console.error("Error processing payment success:", error);
        // Return an error response to the frontend
        res.status(500).json({ error: "An error occurred while processing the payment success." });
    }
});


app.post("/payment", async (req, res) => {
	const product = req.body;

	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price_data: {
						currency: "USD",
						product_data: {
							name: product.email, // Assuming product name is passed in the request
						},
						unit_amount: product.price * 100, // Assuming price is in cents
					},
					quantity: 1, // Assuming quantity is always 1
				},
			],
			mode: "payment",
			success_url: `http://localhost:5173/success`,
			cancel_url: "http://localhost:5173/cancel",
		});

		console.log(session.id, "session id"); // Optional: You can log the session for debugging purposes

		res.status(200).json({ sessionId: session.id });
	} catch (error) {
		console.error("Error creating checkout session:", error);
		res
			.status(500)
			.json({ error: "An error occurred while processing the payment" });
	}
});

app.get("/", (req, res) => {
	res.status(200).json({ msg: "hello world!" });
});

app.use("/api", userRoute);

databaseConnect();
app.listen(port, () => {
	console.log(`✅ Server is running at : http://localhost:5000`);
});
