import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSelectionWrapper } from './style'
import SelectionHeader from '@/components/selection-header'
import SelectionList from '@/components/section-list'
import SelectionFooter from '@/components/selection-footer'
const HomeSelectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSelectionWrapper>
      <SelectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SelectionHeader>
      <SelectionList roomList={infoData.list}></SelectionList>
      <SelectionFooter></SelectionFooter>
    </HomeSelectionWrapper>
  )
})

HomeSelectionV1.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSelectionV1
