import { ReactNode } from "react"

interface CenteredContentDivProps {
	children: ReactNode
	style?: React.CSSProperties;
}

function CenteredContentDiv( {children, style} : CenteredContentDivProps) {
	return (
		<div className={`flex flex-col items-center justify-around`} style={style}>
			{children}
		</div>
	)
}


export default CenteredContentDiv