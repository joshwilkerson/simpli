import React from 'react'
import { string, any, func } from 'prop-types'
import styled from '@emotion/styled'

const Button = ({ children, text = 'button text', onClick }) => {
  const Button = styled.button`
    background: #333;
    color: #fff;
    outline: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: .2s all ease;

    &:hover {
      background: #666;
    }
  `

  return <Button onClick={onClick}>{children || text}</Button>
}

Button.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  children: any
}

export default Button
