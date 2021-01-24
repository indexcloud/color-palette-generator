const Color = props => {
	let hex = props.color.hex;
	let isLocked = props.color.isLocked;

	return (
		<div
			style={{backgroundColor: hex}}
			className="w-100 d-flex flex-column align-items-center justify-content-center"
		>
			<h1>{hex}</h1>
			<button className={isLocked ? "btn btn-dark" : "btn btn-outline-dark"} onClick={props.toggle}>
				{isLocked ? "UNLOCK" : "LOCK"}
			</button>
		</div>
	);
};
