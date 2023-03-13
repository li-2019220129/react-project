import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import SelectionHeader from '@/components/selection-header'
import SelectionList from '@/components/section-list'
import SelectionTabs from '@/components/section-tabs'
import { HomeSelectionWrapperV2 } from './style'
import SelectionFooter from '@/components/selection-footer'
const HomeSelectionV2 = memo((props) => {
  const { infoData } = props
  //数据转换
  const tabNames = infoData.dest_address?.map((item) => {
    return item.name
  })
  const [currentName, setName] = useState(tabNames[0])
  const tabClick = useCallback((index, name) => {
    // setName(tabNames[i])
    setName(name)
  }, [])
  return (
    <HomeSelectionWrapperV2>
      <SelectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SelectionHeader>
      <SelectionTabs tabNames={tabNames} tabClick={tabClick}></SelectionTabs>
      <SelectionList
        itemWidth={`33.33%`}
        roomList={infoData.dest_list?.[currentName]}
      ></SelectionList>
       <SelectionFooter name={currentName}></SelectionFooter>
    </HomeSelectionWrapperV2>
  )
})

HomeSelectionV2.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSelectionV2
