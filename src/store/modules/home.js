import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHotrecommenddestData,
} from '@/services'
export const fetchHomeDataAction = createAsyncThunk(
  'fetchData',
  (payload, { dispatch, getState }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGooPriceInfoAction(res))
    })
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then((res) => {
      dispatch(changedisCountInfoAction(res))
    })
    getHotrecommenddestData().then(res=>{
      dispatch(changeHotrecommenddestAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    highScoreInfo: {},
    goodPriceInfo: {},
    disCountInfo: {},
    hotrecommendInfo: {},
  },
  reducers: {
    changeGooPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changedisCountInfoAction(state, { payload }) {
      state.disCountInfo = payload
    },
    changeHotrecommenddestAction(state, { payload }) {
      state.hotrecommendInfo = payload
    },
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload
    // },
  },
})
export const {
  changeGooPriceInfoAction,
  changeHighScoreInfoAction,
  changedisCountInfoAction,
  changeHotrecommenddestAction,
} = homeSlice.actions
export default homeSlice.reducer
