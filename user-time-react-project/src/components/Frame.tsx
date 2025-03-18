import { ReactNode } from "react"

interface FrameProps {
	children: ReactNode
}

function Frame( {children} : FrameProps) {
	return (
		<div className="w-1/2 h-1/2 flex items-center justify-center bg-primary-color border-5 rounded-2xl">
			{children}
		</div>
	)
}


export default Frame