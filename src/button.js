import React from 'react'
import { string } from 'prop-types'

const Button = props => {
  return <button>{props.text}</button>
}

Button.propTypes = {
  text: string
}

Button.defaultProps = {
  text: 'button'
}

export default Button
