import React from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink exact to="/" activeClassName="active">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/button" activeClassName="active">
						Button
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/banner" activeClassName="active">
						Banner
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
export default Nav
