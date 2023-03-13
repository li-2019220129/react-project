import PropTypes from 'prop-types'
import Rating from '@mui/material/Rating'
import React, { memo } from 'react'
import { ItemWarp } from './style'
const RoomItem = memo((props) => {
  const { itemData,itemWidth='25%' } = props
  return (
    <ItemWarp verifyColor={itemData?.verify_info?.text_color || '#39576a'}
    itemWidth={itemWidth} >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">
          {itemData?.verify_info?.messages.join(' · ')}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            size="small"
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: '#008A05' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData?.bottom_info && (
            <span className="extra">· {itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWarp>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
}

export default RoomItem
