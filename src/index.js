import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Home } from './module/Home';
import { Header } from './module/Header';
import { Posts } from './module/Posts';
import { Photos } from './module/Photos';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
    <Router>
        <div>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/photos" component={Photos} />
        </div>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
