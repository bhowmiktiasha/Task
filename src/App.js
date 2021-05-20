import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import DashboardContainer from './Containers/DashboardContainer/DashboardContainer';
import { Grid } from '@material-ui/core';

function App() {
	return (
		<Router>
			<Grid container direction="column" alignItems="center" justify="center">
				
				<Switch>
					<Route path="/" exact component={DashboardContainer} />
					<Route path="/home" component={DashboardContainer} />
				</Switch>
			</Grid>
		</Router>
	);
}

export default App;
