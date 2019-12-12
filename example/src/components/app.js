import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { IndexPage, ButtonPage, BannerPage, CheckboxPage } from "./routes"

const App = () => {
	return (
		<BrowserRouter basename="/simpli">
			<Switch>
				<Route exact path="/" component={IndexPage} />
				<Route path="/button" component={ButtonPage} />
				<Route path="/banner" component={BannerPage} />
				<Route path="/checkbox" component={CheckboxPage} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
