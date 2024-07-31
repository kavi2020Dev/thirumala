import React, { lazy } from 'react'
import Loadable from '../components/loadable/loadable'

const Header = Loadable(lazy(() => import('../components/ui/header')))

const RouterSetup = () => {
  return (
   <>
    <Header/>
    
   </> 
  )
}

export default RouterSetup