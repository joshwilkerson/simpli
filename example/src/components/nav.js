import React from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {
	return (
		<nav style={{ padding: "1em", border: "1px solid blue" }}>
			<ul>
				<li>
					<NavLink exact to="/" activeClassName="active">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/button" activeClassName="active">
						Button
					</NavLink>
				</li>
				<li>
					<NavLink to="/banner" activeClassName="active">
						Banner
					</NavLink>
				</li>
				<li>
					<NavLink to="/checkbox" activeClassName="active">
						Checkbox
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
export default Nav
