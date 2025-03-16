import { ReactNode } from "react"

interface CenteredContentDivProps {
	children: ReactNode
	style?: React.CSSProperties;
}

function CenteredContentDiv( {children, style} : CenteredContentDivProps) {
	return (
		<div className={`w-1/2 h-1/2 flex flex-col items-center justify-center`} style={style}>
			{children}
		</div>
	)
}


export default CenteredContentDiv