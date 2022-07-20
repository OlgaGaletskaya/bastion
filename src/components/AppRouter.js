import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { publicRoutes } from '../Routes'


const AppRouter = () => {
  return (

    <Switch>
      {publicRoutes.map(({path, Component})=>
        <Route key={path} path={path} component={Component} exact/>
      )}
    </Switch>
  )
}

export default AppRouter    