import React, { Component } from 'react';
import { Home, Beers, Cart, CartEmpty } from './pages';
import {Route } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
                <div>
                    <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/beer_list" component={Beers} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/cart_empty" component={CartEmpty} />

                    </div>
                </div>

            )
        }
  }



