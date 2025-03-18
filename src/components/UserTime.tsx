import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import { useEffect, useState } from "react";

// Extend dayjs with plugins
dayjs.extend(utc);        // Extend with UTC first
dayjs.extend(timezone);   // Then extend with timezone

// Automatically detect the visitor's timezone
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function UserTime() {
	const [currentDate, setCurrentDate] = useState(dayjs().tz(userTimezone))

	
	useEffect(() => {
		const IntervalId = setInterval(() => {setCurrentDate(dayjs().tz(userTimezone))}, 1000)
		return () => clearInterval(IntervalId)
	}, [])

	return (
		<div className="text-[5rem]/[6.5rem] font-semibold self-end text-right w-[7ch]">
			{currentDate.format("HH:mm:ss")}
		</div>
	)
}


export default UserTime