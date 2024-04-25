import React from "react";
import { Link } from "react-router-dom";
import OpenWeatherMap from "../components/OpenWeatherMap";

const Terms = () => {
	return (
		<div className='container mx-auto text-center w-full md:w-4/5 lg:w-2/3 xl:w-1/2 p-3 my-5 text-lg'>
			<h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-5'>
				Rental Terms & Conditions
			</h1>
			<img
				src='https://cannons.com/wp-content/uploads/Rentals-Page/icon_Lifesaver.svg'
				alt=''
				className='inline-block my-10 mb-5 h-[60px] aspect-square'
			/>
			<h5>US Coast Guard safety equipment and charts are included for free.</h5>
			<img
				src='https://cannons.com/wp-content/uploads/Rentals-Page/26-years.svg'
				className='inline-block my-10 mb-5 h-[60px] aspect-square'
				alt=''
			/>
			<p>
				The renter must be at least 26 years of age with previous boating and
				navigation experience.
			</p>
			<p>
				If you were born after January 1, 1988 the State of Florida requires you
				to present a valid boating license at the time of rental.
			</p>
			<strong>
				Get your boating license{" "}
				<Link
					to={
						"https://boattests101.com/united-states/florida/florida-rental?mcid=Bxups2Kk"
					}
					target='_blank'
					className='text-blue-500'
				>
					Here
				</Link>
			</strong>{" "}
			<br />
			<img
				src='https://cannons.com/wp-content/uploads/Rentals-Page/icon_Boat-Safety-Card.svg'
				className='inline-block my-10 mb-5 h-[60px] aspect-square'
				alt=''
			/>
			<p>
				Anyone born after January 1, 1988 must have a valid boater’s safety card
				as required by law.
			</p>
			<img
				src='https://cannons.com/wp-content/uploads/Rentals-Page/icon_ID-CC.svg'
				className='inline-block my-10 mb-5 h-[60px] aspect-square'
				alt=''
			/>
			<p>
				The renter is required to present a valid driver’s license and matching
				credit card. Credit cards accepted: American Express, Master Card, Visa
				and Discover credit cards and debit cards. Boat rental payment is taken
				upon booking and a five hundred dollar deposit is taken on the day of
				the rental.
			</p>
			<img
				src='https://cannons.com/wp-content/uploads/Rentals-Page/icon_fuel.svg'
				className='inline-block my-10 mb-5 h-[60px] aspect-square'
				alt=''
			/>
			<p>Fuel, taxes and rental fees are additional costs.</p>
			<img
				src='https://cannons.com/wp-content/uploads/Rentals-Page/fishing-pole-svgrepo-com.svg'
				className='inline-block my-10 mb-5 h-[60px] aspect-square'
				alt=''
			/>
			<p>Optional accessories available: fishing poles ($13 per day).</p>
			<img
				src='https://cannons.com/wp-content/uploads/Rentals-Page/icon-sun.svg'
				className='inline-block my-10 mb-5 h-[60px] aspect-square'
				alt=''
			/>
			<p>
				Bow riders and deck boats are equipped with a bimini top cover. Center
				console boats have a T-top cover.
			</p>
			<h2>Cancellation Policy</h2>
			<img
				src='https://cannons.com/wp-content/uploads/Rentals-Page/cancel.svg'
				className='inline-block my-10 mb-5 h-[60px] aspect-square'
				alt=''
			/>
			<p>
				Boat Rental Sarasota cancellations must be made by phone 48 hours in
				advance of rental date. We do not charge if cancellation is due to bad
				weather and we reserve the right to cancel at any time.
			</p>
			<img
				src='https://cannons.com/wp-content/uploads/Rentals-Page/icon_refund.svg'
				className='inline-block my-10 mb-5 h-[60px] aspect-square'
				alt=''
			/>
			<p>
				Cancellations must be made by phone (941-203-1204) at least 48 hours in
				advance of time of the scheduled rental. Renters who cancel at least 48
				hours prior to the time of the scheduled rental will receive a full
				refund. Renters who cancel less than 48 hours prior to the time of the
				scheduled rental will be refunded, less a $200 cancellation fee. No
				shows will be charged full rental price plus taxes.
			</p>
			<OpenWeatherMap />
		</div>
	);
};

export default Terms;
