import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./screens/search"
import Profile from "./screens/profile"

const App = () => (
    <Router>
        <div>
            <Route path="/" exact component={Search} />
            <Route path="/profile/:id" component={Profile} />
        </div>
    </Router>
)

export default App;
