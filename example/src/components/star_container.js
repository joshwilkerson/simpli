import React, { Fragment, useState } from "react"
import Star from "./star"

const StarContainer = () => {
	const [starsHover, setStarsHover] = useState(true)
	const [starsSize, setStarsSize] = useState(24)
	const [starsSpacing, setStarsSpacing] = useState(4)

	let stars = []
	for (let i = 0; i < 500; i++) {
		stars.push(
			<Star
				key={i}
				starsHover={starsHover}
				starsSize={starsSize}
				starsSpacing={starsSpacing}
			/>
		)
	}

	return (
		<Fragment>
			<div className="stars-settings">
				<div>
					<input
						type="checkbox"
						id="stars-action"
						value={starsHover}
						checked={starsHover}
						onChange={() => setStarsHover(!starsHover)}
					/>
					<label htmlFor="stars-action">
						Hover {starsHover ? "true" : "false"}
					</label>
				</div>

				<div>
					<label htmlFor="stars-size">Size</label>
					<input
						type="number"
						id="stars-size"
						value={starsSize}
						onChange={e => setStarsSize(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="stars-spacing">Spacing</label>
					<input
						type="number"
						id="stars-spacing"
						value={starsSpacing}
						onChange={e => setStarsSpacing(e.target.value)}
					/>
				</div>
			</div>
			<div className="stars-container">{stars}</div>
		</Fragment>
	)
}

export default StarContainer
