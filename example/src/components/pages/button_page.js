import React from "react"
import Layout from "../layout"
import { Button } from "simpli"

const handleButtonClick = () => {
	return alert("🎉you clicked a button!")
}

const ButtonPage = () => {
	return (
		<Layout>
			<Button onClick={handleButtonClick} text="button text goes here" />
			<Button onClick={handleButtonClick}>
				<span className="icon">icon</span>
				<span>button text</span>
			</Button>
		</Layout>
	)
}

export default ButtonPage
