class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div class="text-center bg-dark fixed-top">
					<button class="btn btn-secondary m-1">RANDOMIZE COLORS</button>
				</div>
				<div>
					<Color />
				</div>
			</div>
		);
	}
}
