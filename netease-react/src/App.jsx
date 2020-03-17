import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import FooterGuide from './components/footerGuide'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={FooterGuide} />
      </Router>
    )
  }
}

export default App
