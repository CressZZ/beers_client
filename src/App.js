import React, { Component } from 'react';
import { Home, Beers } from './pages';
import {Route } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/beer_list" component={Beers} />
                </div>
            )
        }
  }



