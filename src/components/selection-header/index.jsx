import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import PropTypes from 'prop-types'
const SelectionHeader = memo((props) => {
  const { title, subtitle } = props
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  )
})
SelectionHeader.prototype = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default SelectionHeader
