import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBaner from './c-cpns/home-baner'
import HomeSelectionV1 from './c-cpns/home-selection-v1'
import HomeSelectionV2 from './c-cpns/home-selection-v2'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { isObjectEmpty } from '@/utils/is-object-empty'
const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, disCountInfo,hotrecommendInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      disCountInfo: state.home.disCountInfo,
      hotrecommendInfo:state.home.hotrecommendInfo
    }),
    shallowEqual
  )

  const dispath = useDispatch()
  useEffect(() => {
    dispath(fetchHomeDataAction())
  }, [dispath])

  return (
    <HomeWrapper>
      <HomeBaner></HomeBaner>
      <div className="content">
        {isObjectEmpty(disCountInfo) && (
          <HomeSelectionV2 infoData={disCountInfo}></HomeSelectionV2>
        )}
        {isObjectEmpty(hotrecommendInfo) && (
          <HomeSelectionV2 infoData={hotrecommendInfo}></HomeSelectionV2>
        )}
        {isObjectEmpty(goodPriceInfo) && (
          <HomeSelectionV1 infoData={goodPriceInfo}></HomeSelectionV1>
        )}
        {isObjectEmpty(highScoreInfo) && (
          <HomeSelectionV1 infoData={highScoreInfo}></HomeSelectionV1>
        )}
      </div>
    </HomeWrapper>
  )
})
export default Home
