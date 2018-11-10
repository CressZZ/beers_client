import React, { Component } from 'react';
import { Home, Beers, Cart } from './pages';
import {Route } from 'react-router-dom'
import Header from './Header.js'

export default class App extends Component {
    render() {
        return (
                <div>
                    <Header />
                    <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/beer_list" component={Beers} />
                    <Route exact path="/cart" component={Cart} />
                    </div>
                </div>

            )
        }
  }



