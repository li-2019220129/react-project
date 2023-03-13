import LzyRequest from '..'

export function getHomeGoodPriceData() {
  return LzyRequest.get({
    url:'/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return LzyRequest.get({
    url:'/home/highscore'
  })
}

export function getHomeDiscountData(){
  return LzyRequest.get({
    url:'/home/discount'
  })
}

export function getHotrecommenddestData(){
  return LzyRequest.get({
    url:'/home/hotrecommenddest'
  })
}