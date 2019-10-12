import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from "./nav"

import { IndexPage, ButtonPage, BannerPage } from "./routes"

const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route path="/" exact>
					<IndexPage />
				</Route>
				<Route path="/button">
					<ButtonPage />
				</Route>
				<Route path="/banner">
					<BannerPage />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
