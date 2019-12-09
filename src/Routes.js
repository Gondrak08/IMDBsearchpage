import React from 'react'
import {BrowserRouter,  Switch, Route} from 'react-router-dom'
import Main from './pages/main'
import Product from './pages/product'
import Search from './pages/search'

const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Search}  />
            <Route path='/products/:id' component={Product}  />
        </Switch>
    </BrowserRouter>
)

export default Routes