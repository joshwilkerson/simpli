import React from "react"
import Nav from "./nav"
import { any } from "prop-types"

const Layout = ({ children }) => {
	return (
		<div className="page">
			<Nav />
			{children}
		</div>
	)
}

Layout.propTypes = {
	children: any,
}

export default Layout
