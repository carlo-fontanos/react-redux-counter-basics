import React, { Component } from 'react';

export default class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<button
					title="Down"
					onClick={this.props.decrement}
				>-</button>
				<span
					style={styles.counter}>
					{this.props.count}
				</span>
				<button
					title="Up"
					onClick={this.props.increment}>
				+</button>
				<p>
					<button
						title="Up"
						onClick={this.props.reset}>
					Reset</button>
				</p>
				<p>Current value now: <span style={styles.value}>{ this.props.count }</span></p>
				<p>Current value multiplied by two: <span style={styles.value}>{ this.props.count * 2 }</span></p>
			</div>
		);
	}
}

const styles = {
	counter: {
		padding: 30,
		alignSelf: 'center',
		fontSize: 26,
		fontWeight: 'bold',
	},
	value: {
		color: 'red',
		fontWeight: 'bold'
	}
};