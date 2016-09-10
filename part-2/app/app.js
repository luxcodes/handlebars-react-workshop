import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';

export default class App extends React.Component {
	constructor() {
		super();
		this.changeTitle = this.changeTitle.bind(this);
		this.state = {
			title: 'Coolest',
			name: 'Justin',
			age: 20
		}
	}

	changeTitle(title) {
		this.setState({title: title});
	}


	render() {
		return(
			<div>
				<Header changeTitle={this.changeTitle} title={this.state.title}/>
				<h1>{this.state.name}</h1>
				<h1>{this.state.age}</h1>
			</div>
		)
	}
}

render(<App/>, document.getElementById('app'))