import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ClimateChange from '../components/ClimateChange.jsx';
import Main from '../components/Main.jsx';
import RecycleTracker from '../components/RecycleTracker.jsx';
import NotFound from '../components/NotFound.jsx';
import Recycling from '../components/Recycling.jsx';

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route exact path="/climate" component={ClimateChange} />
			<Route exact path="/tracker" component={RecycleTracker} />
			<Route exact path="/recycle" component={Recycling} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default AppRouter;
