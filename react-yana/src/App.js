// Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import NavMenu from './components/NavMenu';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import SignInPage from './pages/SignInPage';

class App extends Component {
  render() {
    return (
      <Router>
          <main>
              <NavMenu />
              <Switch>
                  <Route exact path='/' render={
                      () => (
                        <HomePage />
                      )
                    }
                  />

                  <Route path='/about' render={
                      () => (
                        <AboutPage />
                      )
                    }
                  />

                  <Route path='/faq' render={
                      () => (
                        <FaqPage />
                      )
                    }
                  />

                  <Route path='/contact' render={
                      () => (
                        <ContactPage />
                      )
                    }
                  />

                  <Route path='/courses' render={
                      () => (
                        <CoursesPage />
                      )
                    }
                  />

                  <Route path='/signIn' render={
                      () => (
                        <SignInPage />
                      )
                    }
                  />

                  <Route render={
                      ({ location }) => (
                        <h1>{ location.pathname } Not Found</h1>
                      )
                    }
                  />

              </Switch>
          </main>
      </Router>
    );
  }
}

export default App;
