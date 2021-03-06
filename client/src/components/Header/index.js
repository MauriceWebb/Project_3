import React, { Component, Fragment } from 'react';
import Nav from '../subcomponents/Nav/index';
import Jumbotron from '../subcomponents/Jumbotron/index';
import SearchBar from '../subcomponents/SearchBar/index';
import './style.css';

class Header extends Component {
	state = {
		// page: this.props.page,
		latestQuery: ''
	};
	// functions...
	getLatestQuery = query => {
		this.setState({ latestQuery: query });
	};

	render() {
		return (
			<Fragment>
				<header className='d-flex flex-column justify-content-around py-2 ui_gradient2- bg-light bg-white round_corner shadow-sm'>
					<Nav page={this.props.page} getUserData={this.props.getUserData} />
					{/* if the current page is the home page, then render the following elements... */}
					{this.props.page === 'home' ? (
						<Fragment>
							<Jumbotron />{' '}
							<SearchBar
								getLatestQuery={this.getLatestQuery}
								updateResults={this.props.updateResults}
							/>
						</Fragment>
					) : null}
					{this.props.page === 'searchResults' || this.props.page === 'result' ? (
						<Fragment>
							<SearchBar
								getLatestQuery={this.getLatestQuery}
								updateResults={this.props.updateResults}
							/>
						</Fragment>
					) : null}
				</header>
			</Fragment>
		);
	}
}

export default Header;
