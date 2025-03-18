import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import { useState } from "react";

// Extend dayjs with plugins
dayjs.extend(utc);        // Extend with UTC first
dayjs.extend(timezone);   // Then extend with timezone

// Automatically detect the visitor's timezone
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function UserTimeZone() {
	const [displayedTimezone] = useState(userTimezone.replace(/_/g, " "))

	return (
		<div className="text-zinc-500 self-end">
		{displayedTimezone}
		</div>
	)
}


export default UserTimeZone