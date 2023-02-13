type CardContainerProps = {
	children: React.ReactNode
}

const CardContainer = ({children}: CardContainerProps) => {
	return <div className="card-container">{children}</div>
}

export {CardContainer}
