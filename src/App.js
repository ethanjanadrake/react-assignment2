import React, { Component } from 'react';

import './App.css';
import CharComponent from './CharComponent/CharComponent';
import CharCount from './CharCount/CharCount';
import ValidatorComponent from './ValidatorComponent/ValidatorComponent';

class App extends Component {
	state = {
		counter : { text: '', count: 0 },
		charArr : []
	};

	changeHandler = (event) => {
		const counter = this.state.counter;
		const text = event.target.value;
		counter.count = text.length;
		counter.text = text;

		const charArr = text.split('');
		('');

		this.setState({ counter: counter, charArr: charArr });
	};

	render() {
		let chars = (
			<div>
				{this.state.charArr.map((char, index) => {
					return <CharComponent char={char} key={index} />;
				})}
			</div>
		);

		return (
			<div>
				<CharCount chars={this.state.counter.count} changed={(event) => this.changeHandler(event)} />
				<ValidatorComponent response={this.state.counter.count >= 8 ? 'Valid Length' : 'Invalid Length'} />
				<ul>{chars}</ul>
			</div>
		);
	}
}

export default App;
