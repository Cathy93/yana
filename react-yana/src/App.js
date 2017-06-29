import React, { Component } from 'react';
import './App.css';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import TestingList from './components/TestingList'

class App extends Component {
  state = {
    testings: null
  }

  render() {
    const { testings } = this.state
    // const testings = this.state.testings

    return (
      <div className="App">
      <NavMenu />
      {
        !!testings ? (
          <TestingList items={ testings } />
        ) : (
          'Loading testings.....'
        )
      }
      <Footer />
      </div>
    );
  }

  // Run after our component instance first appears
  // on screen
  componentDidMount() {
    // Load testings from API
    fetch('/testings')
      // Parsing the JSON JS objects
      .then(res => res.json())
      // Update our component's state with the loaded testings
      .then(json => {
        // Changing the state will re-render the component
        this.setState({
          testings: json
        })
      })
  }
}

export default App;
