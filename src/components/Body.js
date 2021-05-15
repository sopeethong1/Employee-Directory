import React, { Component } from 'react';
import React from "react";
import API from "../utils/API";

export default class Body extends Component {
	
	state = {
		users: [],
		filteredUsers: [],
	};

	componentDidMount() {
	
		API.getUsers().then((res) => {
		
			const holdData = res.data.results.map((user) => {
				return user;
			});
			this.setState({
				users: holdData,
			});
			console.log(this.state.users);
		});
	}

	render() {
		return (
			<div className="container">
				<Table users={this.state.users} />
			</div>
		);
	}
}