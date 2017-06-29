import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Faq from './components/Faq';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/faq" component={Faq} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
