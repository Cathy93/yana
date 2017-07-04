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
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import SingleCourseAnimalPage from './pages/SingleCourseAnimalPage';
import SingleCourseColorPage from './pages/SingleCourseColorPage';
import SingleCourseNumberPage from './pages/SingleCourseNumberPage';
import SingleCourseGreetingPage from './pages/SingleCourseGreetingPage';
import SingleCourseFoodPage from './pages/SingleCourseFoodPage';
import SingleCourseFamilyPage from './pages/SingleCourseFamilyPage';
import SingleCourseSentencePage from './pages/SingleCourseSentencePage';
import SingleCourseActionPage from './pages/SingleCourseActionPage';
import SingleCourseSeasonPage from './pages/SingleCourseSeasonPage';



import SignInPage from './pages/SignInPage';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <NavMenu />
            <Switch>
              <Route
                exact path='/'
                render={() => (<HomePage />)}/>

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
                path='/single_course_animal'
                render={() => (<SingleCourseAnimalPage />)}/>

              <Route
                path='/single_course_color'
                render={() => (<SingleCourseColorPage />)}/>

              <Route
                path='/single_course_number'
                render={() => (<SingleCourseNumberPage />)}/>

              <Route
                path='/single_course_greetings'
                render={() => (<SingleCourseGreetingPage />)}/>

              <Route
                path='/single_course_food'
                render={() => (<SingleCourseFoodPage />)}/>

              <Route
                path='/single_course_family'
                render={() => (<SingleCourseFamilyPage />)}/>

              <Route
                path='/single_course_sentences'
                render={() => (<SingleCourseSentencePage />)}/>

              <Route
                path='/single_course_action'
                render={() => (<SingleCourseActionPage />)}/>

              <Route
                path='/single_course_seasons'
                render={() => (<SingleCourseSeasonPage />)}/>

              <Route
                path='/sign_in'
                render={() => (<SignInPage />)}/>

              <Route render={
                ({ location }) => (
                  <div className="not-found-page-container">
                    <h1 className="not-found-page-msg text-center">
                      { location.pathname } Url Not Found
                    </h1>
                  </div>
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
