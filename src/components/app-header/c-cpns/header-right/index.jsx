import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'
const HeaderRight = memo(() => {
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    const windowHandleClick = () => {
      setIsShow(false)
    }
    window.addEventListener('click',windowHandleClick, true)
    return ()=>{
      window.removeEventListener('click',windowHandleClick)
    }
  }, [])
  const handleShowClick = (e) => {
    //阻止事件冒泡方法一
    // e.stopPropagation()
    setIsShow(true)
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <soan className="btn">注册</soan>
        <soan className="btn">
          <IconGlobal></IconGlobal>
        </soan>
      </div>
      <div className="profile" onClick={handleShowClick}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>
        {!isShow ? (
          ''
        ) : (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
