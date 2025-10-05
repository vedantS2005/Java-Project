import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import RestaurantDetail from './pages/RestaurantDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
    return ( <
        AppProvider >
        <
        Router >
        <
        div className = "App" >
        <
        Header / >
        <
        main className = "main-content" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/restaurants"
        element = { < Restaurants / > }
        /> <
        Route path = "/restaurant/:id"
        element = { < RestaurantDetail / > }
        /> <
        Route path = "/cart"
        element = { < Cart / > }
        /> <
        Route path = "/checkout"
        element = { < Checkout / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/profile"
        element = { < Profile / > }
        /> <
        /Routes> <
        /main> <
        Footer / >
        <
        /div> <
        /Router> <
        /AppProvider>
    );
}

export default App;