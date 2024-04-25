import React, { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DayPick() {
	const [selected, setSelected] = useState(null);

	// T00:00:00Z
	const disabledDays = [
		new Date("2024-04-20"),
		new Date("2024-04-24"),
		new Date("2024-04-2"),
	];

	console.log(selected);

	let footer = (
		<p className='ml-2 flex'>See what dates the boat will be available</p>
	);
	if (selected) {
		footer = (
			<p className='font-bold text-gray-500 text-center'>
				Boat Book on Selected Date
			</p>
		);
		// <p>You picked {format(selected, "PP")}.</p>;
	}
	return (
		<DayPicker
			mode='single'
			selected={selected}
			onSelect={setSelected}
			disabled={disabledDays}
			footer={footer}
		/>
	);
}
