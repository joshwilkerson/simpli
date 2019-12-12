import React, { Fragment, useState } from "react"
import Star from "./star"

const StarContainer = () => {
	const [starsHover, setStarsHover] = useState(true)

	const totalStars = 500
	let stars = []
	for (let i = 0; i < totalStars; i++) {
		stars.push(<Star key={i} />)
	}

	return (
		<Fragment>
			<div className="stars-settings">
				<input
					type="checkbox"
					id="stars-action"
					value={starsHover}
					checked={starsHover}
					onChange={() => setStarsHover(!starsHover)}
				/>
				<label htmlFor="stars-action">Hover</label>
			</div>
			<div className="stars-container">{stars}</div>
		</Fragment>
	)
}

export default StarContainer
