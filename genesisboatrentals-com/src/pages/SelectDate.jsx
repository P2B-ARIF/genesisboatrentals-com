import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go after @fullcalendar/core
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SelectDate() {
	const [selectedDate, setSelectedDate] = useState(null);
	const navigate = useNavigate("");

	const handleDateClick = info => {
		// alert('Date: ' + info.dateStr);
		console.log("Date: " + info.dateStr); // You can handle date click event here
		setSelectedDate(info.dateStr);

		navigate("/payments/350?hours=4&date=2024-04-22");
	};

	// const handleDateClick = clickInfo => {
	// 	setSelectedDate(clickInfo.dateStr);
	// };

	return (
		<div className='container mx-auto my-10'>
			<div className='calendar-container'>
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					initialView='dayGridMonth'
					headerToolbar={{
						left: "prev,next today",
						center: "title",
						right: "",
					}}
					events={[
						{ title: "Event 1", date: "2024-04-21" },
						{ title: "Event 2", date: "2024-04-22" },
						// Add more events as needed
					]}
					selectable={true}
					// select={handleDateRangeSelect}
					dateClick={handleDateClick}
					select={selectInfo => {
						// This ensures that only one date is selected at a time
						setSelectedDate(selectInfo.startStr);
					}}
					height={"80vh"}
					eventClassNames='initial-date'
				/>
				{/* <Input placeholder='Select Date and Time' size='md' type='datetime-local'  /> */}
			</div>
		</div>
	);
}

export default SelectDate;

// const [selectedRange, setSelectedRange] = useState(null);
// const handleDateRangeSelect = selectInfo => {
// 	setSelectedRange({
// 		start: selectInfo.startStr,
// 		end: selectInfo.endStr,
// 	});
// };

// console.log(selectedRange, "r");
