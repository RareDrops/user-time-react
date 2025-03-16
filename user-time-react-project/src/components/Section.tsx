import { ReactNode } from "react"

interface SectionProp {
	children: ReactNode
}

function Section({ children } : SectionProp) {
	return (
		<section className="w-screen h-screen flex items-center justify-center">
		{children}
		</section>
	)
}


export default Section