import React, { memo } from 'react'
import '@/assets/css/index.less'
import AppHeader from './components/app-footer'
import AppFooter from './components/app-header'
import { useRoutes } from 'react-router-dom'
import routes from './router'
const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader></AppHeader>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <AppFooter></AppFooter>
    </div> 
  )
})

export default App
