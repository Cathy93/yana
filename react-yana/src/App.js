import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavMenu from './components/NavMenu';
import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <NavMenu />
            <Switch>
              <Route
                path='/faq'
                render={() => (<FaqPage />)} />

              <Route
                path='/contact'
                render={() => (<ContactPage />)}/>

                <Route
                  path='/courses'
                  render={() => (<CoursesPage />)}/>

               <Route
                  exact path='/'
                  render={() => (<HomePage />)}/>

                  <Route
                  render={({ location }) => (
                    <h1>{ location.pathname } Not Found</h1>
                  )} />
              </Switch>
          </main>
      </Router>
    );
  }
}

export default App;
