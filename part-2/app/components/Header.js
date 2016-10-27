import React from 'react';
import Title from './Title/Title'


export default class Header extends React.Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}



	render() {
		return(
			<div>
				<h1>{this.props.title}</h1>
				<input onChange={this.handleChange}/>
			</div>
		)
	}
}
