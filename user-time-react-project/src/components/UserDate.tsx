import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

// Extend dayjs with plugins
dayjs.extend(utc);        // Extend with UTC first
dayjs.extend(timezone);   // Then extend with timezone

// Automatically detect the visitor's timezone
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function UserDate() {
	const currentDate = dayjs().tz(userTimezone);
	
	return (
		<div className="self-end">
		{currentDate.format("dddd, D MMMM, YYYY")}
		</div>
	)
}


export default UserDate