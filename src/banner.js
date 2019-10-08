import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'

const Banner = props => {
  const Banner = styled.div`
    padding: 1em 1.5em;
    border: 1px solid #ce4a35;
    background: #fecbc3;
    border-radius: 4px;
    color: #333;
    font-weight: bold;
  `
  return <Banner>Banner: {props.text}</Banner>
}

Banner.propTypes = {
  text: string
}

Banner.defaultProps = {
  text: 'banner text'
}

export default Banner
