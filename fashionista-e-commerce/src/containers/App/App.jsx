import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import "./App.css";

import Home from '../Home'
import Product from '../Product'
import Topbar from '../../components/TopBar';


export default function App() {

  

    return (
        <BrowserRouter>
            <Topbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/product/:name" component={Product} />
            </Switch>
        </BrowserRouter>
    )
};