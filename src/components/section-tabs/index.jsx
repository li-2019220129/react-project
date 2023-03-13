import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SelectionWrapper } from './style'
import classNames from 'classnames'
const SelectionTabs = memo((props) => {
  const { tabNames = [],tabClick } = props
  const [currentState, setCurrentState] = useState(0)
  function itemClickHandle(i,name) {
    setCurrentState(i)
    tabClick(i,name)
  }
  return (
    <SelectionWrapper>
      {tabNames.map((item, index) => {
        return (
          <div
            key={item}
            className={classNames('item', { active: index === currentState })}
            onClick={() => itemClickHandle(index,item)}
          >
            {item}
          </div>
        )
      })}
    </SelectionWrapper>
  )
})

SelectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func,
}

export default SelectionTabs
